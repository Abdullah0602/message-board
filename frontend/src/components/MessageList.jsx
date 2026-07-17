import { useState } from "react";
import { getMessages } from "../services/api";

function MessageList() {
  const [messages, setMessages] = useState([]);

  const handleListMessages = async () => {
    try {
      const response = await getMessages();

      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="message-list">
      <h2>Messages</h2>

      <button onClick={handleListMessages}>
        List Messages
      </button>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {messages.map((item, index) => (
            <li key={index}>
              <strong>{item.message}</strong>
              <br />
              <small>{item.timestamp}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MessageList;
