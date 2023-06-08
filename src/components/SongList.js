import React from "react";
import { CircularProgress } from "@mui/material";

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
    <>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </>
  );
}

function Song() {
  return <div>song</div>;
}
export default SongList;
