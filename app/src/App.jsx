import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Finmarket from './pages/Finmarket';
import Borrow from './pages/Borrow';
import Footer from './components/Footer';
import Refinance from './pages/Refinance';
import Buncrutcy from './pages/Buncrutcy';
import Debts from './pages/Debts';
import Anket from './components/Anket/Anket'
import Lot from './components/Lot/Lot';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'  element={<Finmarket />} />
        <Route path='/borrow'  element={<Borrow />} />
        <Route path='/refinance'  element={<Refinance/>} />
        <Route path='/buncrutcy'  element={<Buncrutcy/>} />
        <Route path='/debts'  element={<Debts/>} />
        <Route path='/anket'  element={<Anket/>} />
        <Route path='/lot'  element={<Lot/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
