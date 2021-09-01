from sqlalchemy.orm.session import Session
from fastapi import FastAPI, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from . import schemas, models
from .database import engine, SessionLocal
from typing import List

app = FastAPI()

#enable CORS 
origins = [
    "http://localhost:3000",
    "http://localhost:3000/*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/todo", status_code=status.HTTP_201_CREATED)
async def create_todo(request: schemas.Todo, db: Session = Depends(get_db)):
    new_todo = models.Todo(title=request.title)
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo

@app.get("/todos", status_code=200, response_model= List[schemas.ShowTodo])
def get_todos(db: Session = Depends(get_db)):
    todos = db.query(models.Todo).all()
    return todos

