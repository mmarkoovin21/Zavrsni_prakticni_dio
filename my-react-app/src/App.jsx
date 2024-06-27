import './App.css';
import Footer from './Components/footer';
import Login from './Components/pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PocetnaAdmin from './Components/pages/pocetna-admin';
import PersistentSidebar from './Components/PersistentSidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pocetna-admin" element={<PocetnaAdmin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;