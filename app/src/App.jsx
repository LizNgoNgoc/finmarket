import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Finmarket from './pages/Finmarket';


function App() {
  return (
    <div className="App">
      <Header/>
      <Finmarket/>
      <Routes>
          
      </Routes>
    </div>
  );
}

export default App;
