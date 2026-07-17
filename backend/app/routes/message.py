from datetime import datetime

from fastapi import APIRouter

from app.schemas.message import MessageCreate

router = APIRouter()

messages = []


@router.post("/messages")
def create_message(data: MessageCreate):
    new_message = {
        "message": data.message,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }

    messages.append(new_message)

    return {
        "status": "success",
        "data": new_message
    }


@router.get("/messages")
def list_messages():
    return messages
