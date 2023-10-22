import './App.css';
import Navbar from '@/components/Navbar';
import Router from '@/router';

function App() {
  return (
    <div className="app">
      <h2 className='app-title'>STONKS</h2>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
