from fastapi import Depends, FastAPI, HTTPException, Header, Body
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from database.maindb import Base, engine, SessionLocal
from models.TransactionDBModel import TransactionDBModel
from schema.TransactionSchema import Transaction
from firebase_config import verify_token 

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_current_user(authorization: str = Header(...)):
    token = authorization.replace("Bearer ", "")
    user = verify_token(token)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return user

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post('/transactions')
def create_transaction(
    tx: Transaction,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    data = tx.model_dump()
    data['user_id'] = user['uid']  # attach to user
    new_tx = TransactionDBModel(**data)
    db.add(new_tx)
    db.commit()
    db.refresh(new_tx)
    return new_tx

@app.get('/transactions')
def get_transactions(
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    return db.query(TransactionDBModel).filter(
        TransactionDBModel.user_id == user['uid']  # only their data
    ).all()

@app.delete("/transactions/{id}")
def delete_transaction(
    id: int,
    db: Session = Depends(get_db),
    user=Depends(get_current_user)
):
    tx = db.query(TransactionDBModel).filter(
        TransactionDBModel.id == id,
        TransactionDBModel.user_id == user['uid']  # prevent deleting others' data
    ).first()

    if not tx:
        raise HTTPException(status_code=404, detail="Transaction not found")

    db.delete(tx)
    db.commit()
    return {"message": "deleted"}