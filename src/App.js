import React from "react";
import Header from "./components/Header";
import AddSong from "./components/AddSong";
import SongList from "./components/SongList";
import SongPlayer from "./components/SongPlayer";
import { Grid, useMediaQuery, Hidden } from "@mui/material";

function App() {
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <>
      <Hidden only="xs">
        <Header />
      </Hidden>
      <Grid container spacing={3}>
        <Grid
          item
          style={{
            paddingTop: greaterThanSm ? 80 : 10,
          }}
          xs={12}
          md={7}
        >
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? {
                  position: "fixed",
                  width: "100%",
                  right: 20,
                  top: 70,
                }
              : {
                  position: "fixed",
                  width: "100%",
                  left: 0,
                  bottom: 0,
                }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
