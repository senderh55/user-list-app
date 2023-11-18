# crud.py
from .database import store  # Ensure this correctly points to your configured DocumentStore


def get_user(user_id: str):
    with store.open_session() as session:
        return session.load('Users/', user_id)  # Assuming 'Users/' is the collection name


def get_users(skip: int = 0, limit: int = 50):
    with store.open_session() as session:
        return list(session.query(collection_name="Users").skip(skip).take(limit))
