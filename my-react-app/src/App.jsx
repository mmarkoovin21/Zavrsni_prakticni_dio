import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useUser } from './UserContext';
import Header from './Components/header';
import Footer from './Components/footer';
import PersistentSidebar from "./Components/PersistentSidebar";
import Login from './Components/pages/login';
import PocetnaAdmin from './Components/pages/pocetna-admin';
import DodjeljivanjeNastavnika from './Components/pages/dodjeljivanje-nastavnika';
import Izvodjenjepredmeta from './Components/pages/izvodenje-predmeta';
import AkGodina from './Components/pages/ak-godina';
import PocetnaProfesor from './Components/pages/pocetna-profesor';
import DetaljiStudenta from './Components/pages/detalji-studenta';
import PregledRezultataStudenta from './Components/pages/pregled-rezultata-studenta';
import SidebarListProfesor from './Components/SidebarListProfesor';
import SidebarListAdmin from './Components/SidebarListAdmin';

function HeaderWrapper({ toggleDrawer }) {
  const location = useLocation();
  const { user } = useUser();
  if (location.pathname !== "/") {
    return <Header toggleDrawer={toggleDrawer} avatarImage={user?.profilePicture} />;
  }
  return null;
}

function App() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  const toggleDrawer = () => {
    setOpen(prevOpen => !prevOpen);
  };

  let sidebarList = null;

  if (user?.type === 'administrator') {
    sidebarList = <SidebarListAdmin toggleDrawer={toggleDrawer} />;
  } else if (user?.type === 'profesor') {
    sidebarList = <SidebarListProfesor toggleDrawer={toggleDrawer} />;
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
