function MessageList() {

  const handleListMessages = () => {
    console.log("Fetch all messages");
  };

  return (
    <div className="message-list">
      <h2>Messages</h2>

      <button onClick={handleListMessages}>
        List Messages
      </button>

      <p>No messages yet.</p>
    </div>
  );
}

export default MessageList;
