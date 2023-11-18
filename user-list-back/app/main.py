from fastapi import FastAPI, HTTPException
from . import crud, schemas

app = FastAPI()


@app.get("/users/", response_model=list[schemas.User])
async def read_users(skip: int = 0, limit: int = 50):
    try:
        return crud.get_users(skip=skip, limit=limit)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/users/{user_id}", response_model=schemas.User)
async def read_user(user_id: str):
    try:
        user = crud.get_user(user_id=user_id)
        if user is None:
            raise HTTPException(status_code=404, detail="User not found")
        return user
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
