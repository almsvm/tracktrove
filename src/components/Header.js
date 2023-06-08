import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

function Header() {
  return (
    <AppBar color="primary" position="fixed" enableColorOnDark>
      <Toolbar>
        <GraphicEqIcon />
        <Typography variant="h6" component="h1" style={{ marginLeft: 10 }}>
          TrackTrove
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
