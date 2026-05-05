from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from database.maindb import Base, engine, SessionLocal
from models.TransactionDBModel import TransactionDBModel
from schema.TransactionSchema import Transaction
from fastapi import Body

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post('/transactions')
def create_transaction(
    tx: Transaction,
    db: Session = Depends(get_db)
):
    new_tx = TransactionDBModel(**tx.model_dump())
    db.add(new_tx)
    db.commit()
    db.refresh(new_tx)
    return new_tx

@app.get('/transactions')
def get_transactions(db: Session = Depends(get_db)):
    return db.query(TransactionDBModel).all()

@app.delete("/transactions/{id}")
def delete_transaction(id: int, db: Session = Depends(get_db)):
    tx = db.query(TransactionDBModel).filter(TransactionDBModel.id == id).first()

    if not tx:
        return {"error": "Transaction not found"}

    db.delete(tx)
    db.commit()

    return {"message": "deleted"}