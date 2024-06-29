import Header from "../header";
import React, { useState } from "react";
import PersistentSidebar from "../PersistentSidebar";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material";
import Statistics from "../Statistics";
import RecentCard from "../RecentCard";

function PocetnaAdmin() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <div className="App">
      <Header toggleDrawer={toggleDrawer} />
      <PersistentSidebar open={open} handleDrawerClose={toggleDrawer} />
      <main>
        <div className="topNavigation">
          <Link to="/pocetna-admin">Administrator</Link>
          <ArrowForwardIos sx={{height: '14px'}}/>
          <Link to="/pocetna-admin">Početna</Link>
        </div>
        <Typography variant="h3" sx={{marginBottom: '20px'}}>
          Statistika
        </Typography>
        <Statistics />
        <Typography variant="h3" sx={{marginBottom: '20px'}}>
          Nedavno
        </Typography>
        <div className="recentContainer">
          <RecentCard title='Upis novog kolegija' text='Primjena informatike u biološkim znanostima'/>
          <RecentCard title='Nastavnici' text='Uređivanje nastavnika'/>
          <RecentCard title='Predmeti' text='Uređivanje predmeta'/>
          <RecentCard title='Predmeti' text='Uređivanje predmeta'/>
        </div>
      </main>
    </div>
  );
}

export default PocetnaAdmin;