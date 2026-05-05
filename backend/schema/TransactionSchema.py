from pydantic import BaseModel

class Transaction(BaseModel):
    date: str
    amount: str
    name: str
    method: str
    category: str
    status: str