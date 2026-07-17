from datetime import datetime

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.message import Message
from app.schemas.message import MessageCreate, MessageResponse

router = APIRouter()


@router.post("/messages", response_model=MessageResponse)
def create_message(
    data: MessageCreate,
    db: Session = Depends(get_db)
):
    new_message = Message(
        message=data.message,
        timestamp=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    )

    db.add(new_message)
    db.commit()
    db.refresh(new_message)

    return new_message


@router.get("/messages", response_model=list[MessageResponse])
def list_messages(
    db: Session = Depends(get_db)
):
    return db.query(Message).all()
