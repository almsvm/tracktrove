import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { PlayArrow, Save } from "@mui/icons-material";
import theme from "./theme";

function SongList() {
  let loading = false;

  const song = {
    title: "Queen",
    artist: "Under Pressure",
    thumbnail: "https://i3.ytimg.com/vi/a01QQZyl-_I/hqdefault.jpg",
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </div>
  );
}

function Song({ song }) {
  const { title, artist, thumbnail } = song;

  return (
    <Card style={{ margin: theme.spacing(3) }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CardMedia
          image={thumbnail}
          style={{ objectFit: "cover", width: 140, height: 140 }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {artist}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton size="small" color="primary">
              <PlayArrow />
            </IconButton>
            <IconButton size="small" color="secondary">
              <Save />
            </IconButton>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}
export default SongList;
