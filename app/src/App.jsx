import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Finmarket from './pages/Finmarket';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'  element={<Finmarket />} />
          
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
