import Header from "../header";
import React, { useState } from "react";
import PersistentSidebar from "../PersistentSidebar";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material";
import Statistics from "../Statistics";


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
      </main>
    </div>
  );
}

export default PocetnaAdmin;