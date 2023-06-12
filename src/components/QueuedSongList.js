import React from "react";
import { Typography, Avatar, IconButton, useMediaQuery } from "@mui/material";
import { Delete } from "@mui/icons-material";

function QueuedSongList() {
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const song = {
    title: "Queen",
    artist: "Under Pressure",
    thumbnail: "https://i3.ytimg.com/vi/a01QQZyl-_I/hqdefault.jpg",
  };

  return (
    greaterThanMd && (
      <div style={{ margin: "10px 0" }}>
        <Typography color="textSecondary" variant="button">
          QUEUE (5)
        </Typography>
        {Array.from({ length: 5 }, () => song).map((song) => (
          <QueuedSong key={song.id} song={song} />
        ))}
      </div>
    )
  );
}

function QueuedSong({ song }) {
  const { thumbnail, artist, title } = song;

  return (
    <div
      style={{
        display: "grid",
        gridAutoFlow: "column",
        gridTemplateColumns: "50px auto 50px",
        gridGap: 12,
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Avatar
        src={thumbnail}
        alt="Song thumbnail"
        style={{ width: 44, height: 44 }}
      />
      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <Typography
          variant="subtitle2"
          style={{ textOverflow: "ellipsis", overflow: "hidden" }}
        >
          {title}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          style={{ textOverflow: "ellipsis", overflow: "hidden" }}
        >
          {artist}
        </Typography>
      </div>
      <IconButton>
        <Delete color="error" />
      </IconButton>
    </div>
  );
}

export default QueuedSongList;
