import { useState } from "react";

function MessageForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("Submitted:", message);
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
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default MessageForm;
