import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Finmarket from './pages/Finmarket';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'  element={<Finmarket />} />
          
      </Routes>
    </div>
  );
}

export default App;
