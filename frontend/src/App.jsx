import './App.css';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

function App() {
  return (
    <div className="app">
      <h1>Message Board</h1>

      <MessageForm />

      <MessageList />
    </div>
  );
}

export default App;
