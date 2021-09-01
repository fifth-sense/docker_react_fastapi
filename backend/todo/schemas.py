from pydantic import BaseModel
from datetime import date
from typing import Optional


class Todo(BaseModel):
    title: str


class ShowTodo(BaseModel):
    title: str
    class Config():
        orm_mode = True
    

