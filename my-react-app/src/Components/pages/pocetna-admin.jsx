import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material";
import Statistics from "../Statistics";
import RecentCard from "../RecentCard";
import statPng1 from '../../assets/statistika 1.png';
import statPng2 from '../../assets/statistika 2.png';

function PocetnaAdmin() {
  return (
    <div className="App">
      <main>
        <div className="topNavigation">
          <Link to="/pocetna-admin">Administrator</Link>
          <ArrowForwardIos sx={{height: '14px'}}/>
          <Link to="/pocetna-admin">Početna</Link>
        </div>
        <Typography variant="h3" sx={{marginBottom: '20px'}}>
          Statistika
        </Typography>
        <div className="statistics">
          <Statistics image={statPng1}>
          <Typography variant="h5" sx={{ mb: '15px' }}>Broj aktivnih kolegija: 48 </Typography>
            <Typography variant="h5" sx={{ mb: '15px' }}>Ukupni broj kolegija: 72 </Typography>
            <Typography variant="h5" sx={{ mb: '15px' }}>Novi kolegiji ove godine: 6</Typography>
          </Statistics>
          <Statistics image={statPng2}>
            <Typography variant="h5" sx={{mb: '15px'}}>Ukupno profesora: 84 </Typography>
            <Typography variant="h5" sx={{mb: '15px'}}>Ukupno studenata: 3754</Typography>
            <Typography variant="h5" sx={{mb: '15px'}}>Profesori na čekanju: 2</Typography>
            <Typography variant="h5" sx={{mb: '15px'}}>Studenti na čekanju: 21</Typography>
          </Statistics>
        </div>
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