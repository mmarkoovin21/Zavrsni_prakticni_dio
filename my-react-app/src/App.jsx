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
import PocetnaProfesor from './Components/pages/pocetna-profesor';
import DetaljiStudenta from './Components/pages/detalji-studenta';
import PregledRezultataStudenta from './Components/pages/pregled-rezultata-studenta';
import UnosRezultataStudenata from './Components/pages/unos-rezultata-studenata.jsx';
import SidebarListProfesor from './Components/SidebarListProfesor.jsx';
import SidebarListAdmin from './Components/SidebarListAdmin.jsx';
import User from './User.jsx';

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

  const sliderListProfesorComponent = <SidebarListProfesor toggleDrawer={toggleDrawer} />;
  const sliderListAdminComponent = <SidebarListAdmin toggleDrawer={toggleDrawer} />;
  let sidebarList = null;

  if (User.type === 'admin') {
    sidebarList = sliderListAdminComponent;
  } else if (User.type === 'profesor') {
    sidebarList = sliderListProfesorComponent;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pocetna-admin" element={<PocetnaAdmin />} />
          <Route path="/ak-godine" element={<AkGodina />} />
          <Route path="/dodjeljivanje-nastavnika" element={<DodjeljivanjeNastavnika />} />
          <Route path="/izvodjenje-redmeta" element={<Izvodjenjepredmeta />} />
          <Route path="/pocetna-profesor" element={<PocetnaProfesor />} />
          <Route path="/detalji-studenta" element={<DetaljiStudenta />} />
          <Route path="/pregled-rezultata-studenta" element={<PregledRezultataStudenta />} />
          <Route path="/unos-rezultata-studenta" element={<UnosRezultataStudenata />} />
        </Routes>
        <HeaderWrapper toggleDrawer={toggleDrawer} />
        <PersistentSidebar open={open} handleDrawerClose={toggleDrawer}>
          {sidebarList}
        </PersistentSidebar>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;