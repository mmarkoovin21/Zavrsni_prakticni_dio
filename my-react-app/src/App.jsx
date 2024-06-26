import './App.css';
import Footer from './Components/footer';
import Login from './Components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './Components/Pocetna';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pocetna" element={<Pocetna />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;