import React from "react";
import QueuedSongList from "./QueuedSongList";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Slider,
} from "@mui/material";
import { PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";
import theme from "./theme";

function SongPlayer() {
  return (
    <>
      <Card
        variant="outlined"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0px 15px",
          }}
        >
          <CardContent style={{ flex: "1 0 auto" }}>
            <Typography variant="h5" component="h3">
              Title
            </Typography>
            <Typography variant="subTitle1" component="p" color="textSecondary">
              Artist
            </Typography>
          </CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: theme.spacing(1),
              paddingRight: theme.spacing(1),
            }}
          >
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton>
              <PlayArrow style={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>
            <Typography variant="subTitle1" component="p" color="textSecondary">
              00.01.30
            </Typography>
          </div>
          <Slider type="range" min={0} max={1} step={0.01} />
        </div>
        <CardMedia
          image="https://i3.ytimg.com/vi/a01QQZyl-_I/hqdefault.jpg"
          style={{ width: 150 }}
        />
      </Card>
      <QueuedSongList />
    </>
  );
}

export default SongPlayer;
