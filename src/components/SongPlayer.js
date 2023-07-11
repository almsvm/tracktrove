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
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@mui/icons-material";
import theme from "../theme";
import { SongContext } from "../App";
import { useQuery } from "@apollo/client";
import { GET_QUEUED_SONGS } from "../graphql/queries";

function SongPlayer() {
  const { data } = useQuery(GET_QUEUED_SONGS);
  const { state, dispatch } = React.useContext(SongContext);

  function handleTogglePlay() {
    dispatch(state.isPlaying ? { type: "PAUSE_SONG" } : { type: "PLAY_SONG" });
  }

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
              {state.song.title}
            </Typography>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              {state.song.artist}
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
            <IconButton onClick={handleTogglePlay}>
              {state.isPlaying ? (
                <Pause
                  style={{
                    height: 38,
                    width: 38,
                  }}
                />
              ) : (
                <PlayArrow
                  style={{
                    height: 38,
                    width: 38,
                  }}
                />
              )}
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              00:01:30
            </Typography>
          </div>
          <Slider type="range" min={0} max={1} step={0.01} />
        </div>
        <CardMedia style={{ width: 140 }} image={state.song.thumbnail} />
      </Card>
      <QueuedSongList queue={data.queue} />
    </>
  );
}

export default SongPlayer;
