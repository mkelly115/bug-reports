import logo from './logo.svg';
import './styles.css'
import './App.css';
import TicketForm from './components/TicketForm';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Reports</h1>
        <TicketForm />
      </div>
    </div>
  );
}

export default App;
