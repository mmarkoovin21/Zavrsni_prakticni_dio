import './App.css';
import { useState } from 'react';
import Header from './Components/header.jsx';
import Footer from './Components/footer';
import PersistentSidebar from "./Components/PersistentSidebar.jsx";
import Login from './Components/pages/login';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import PocetnaAdmin from './Components/pages/pocetna-admin';
import DodjeljivanjeNastavnika from './Components/pages/dodjeljivanje-nastavnika';
import Izvodjenjepredmeta from './Components/pages/izvodenje-predmeta';
import AkGodina from './Components/pages/ak-godina';

function HeaderWrapper({ toggleDrawer }) {
  const location = useLocation();
  if (location.pathname !== "/") {
    return <Header toggleDrawer={toggleDrawer} />;
  }
  return null;
}

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pocetna-admin" element={<PocetnaAdmin />} />
          <Route path="/ak-godine" element={<AkGodina />} />
          <Route path="/dodjeljivanje-nastavnika" element={<DodjeljivanjeNastavnika />} />
          <Route path="/izvodjenje-redmeta" element={<Izvodjenjepredmeta />} />
        </Routes>
        <HeaderWrapper toggleDrawer={toggleDrawer} />
        <PersistentSidebar open={open} handleDrawerClose={toggleDrawer} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;