
from sqlalchemy.sql.sqltypes import Integer, DateTime
from sqlalchemy import Column,String
import datetime
from .database import Base


class Todo(Base):

    __tablename__ = 'todos'

    id = Column(Integer, primary_key=True,index=True)
    title = Column(String)
    created_at =Column(DateTime, default=datetime.datetime.utcnow)