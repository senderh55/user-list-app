from pydantic import BaseModel


class User(BaseModel):
    name: str
    email: str
    age: int
    phone: str
    cell: str
    country: str
    username: str
    gender: str
    # Add more fields as needed
