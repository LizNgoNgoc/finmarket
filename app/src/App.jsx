import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Finmarket from './pages/Finmarket';
import Borrow from './pages/Borrow';
import Footer from './components/Footer';
import Refinance from './pages/Refinance';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'  element={<Finmarket />} />
        <Route path='/borrow'  element={<Borrow />} />
        <Route path='/refinance'  element={<Refinance/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
