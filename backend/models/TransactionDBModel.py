from sqlalchemy import Column, Integer, String
from database.maindb import Base

class TransactionDBModel(Base):
    __tablename__ = 'transactions'

    id = Column(Integer, primary_key=True, index=True)
    date = Column(String)
    amount = Column(String)
    name = Column(String)
    method = Column(String)
    category = Column(String)
    status = Column(String)