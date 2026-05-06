from pydantic import BaseModel
from typing import Optional

class Transaction(BaseModel):
    user_id: Optional[str] = None
    date: str
    amount: str
    name: str
    method: str
    category: str
    status: str