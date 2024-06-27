import Header from "../header";
import React, { useState } from "react";
import PersistentSidebar from "../PersistentSidebar";

function PocetnaAdmin() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <div className="App">
      <Header toggleDrawer={toggleDrawer} />
      <PersistentSidebar open={open} handleDrawerClose={toggleDrawer} />
    </div>
  );
}

export default PocetnaAdmin;