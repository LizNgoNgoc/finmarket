import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Finmarket from './pages/Finmarket';
import FinServiceRules from './components/finmarketServiceRules/FinServiceRules';

function App() {
  return (
    <div className="App">
      <Header/>
      <Finmarket/>
      <FinServiceRules/>
      <Routes>
          
      </Routes>
    </div>
  );
}

export default App;
