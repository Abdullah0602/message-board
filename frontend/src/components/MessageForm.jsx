import { useState } from "react";
import { createMessage } from "../services/api";

function MessageForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!message.trim()) return;

    try {
      await createMessage(message);

      console.log("Message submitted");

      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="message-form">
      <h2>Enter Message</h2>

      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />

      <div className="buttons">
        <button onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default MessageForm;
