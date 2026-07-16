function MessageForm() {
  return (
    <div className="message-form">
      <h2>Enter Message</h2>

      <input
        type="text"
        placeholder="Type your message"
      />

      <div className="buttons">
        <button>Submit</button>
        <button>List Messages</button>
      </div>
    </div>
  );
}

export default MessageForm;
