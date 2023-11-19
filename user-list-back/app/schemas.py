from pydantic import BaseModel
from typing import Optional


class User(BaseModel):
    id: Optional[str]  # Making the 'id' field optional
    name: str
    email: str
    age: int
    phone: str
    cell: str
    country: str
    username: str
    gender: str
    # Add more fields as needed
