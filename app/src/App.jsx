import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Finmarket from './pages/Finmarket';
import FinServiceRules from './components/finmarketServiceRules/FinServiceRules';
import Trade from './components/onlineTrade/Trade';

function App() {
  return (
    <div className="App">
      <Header/>
      <Finmarket/>
      <FinServiceRules/>
      <Trade/>
      <Routes>
          
      </Routes>
    </div>
  );
}

export default App;
