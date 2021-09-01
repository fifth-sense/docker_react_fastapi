from fastapi import FastAPI

from fastapi.testclient import TestClient 
from .main import app

# app = FastAPI()

client = TestClient(app)


def test_create_todo():
    response = client.post(
        "/todo",
        json={"title": "exercise"},
    )
    assert response.status_code == 201
    assert response.json() == {
        "title": "exercise",
    }

def test_read_todos():
    response = client.get("/todos")

    assert response.status_code == 200
    assert response.json() ==[{"title" : "snacks"}]
    