from pydantic import BaseModel


class MessageCreate(BaseModel):
    message: str


class MessageResponse(BaseModel):
    id: int
    message: str
    timestamp: str

    class Config:
        from_attributes = True
