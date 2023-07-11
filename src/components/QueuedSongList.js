import React from "react";
import { Typography, Avatar, IconButton, useMediaQuery } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useMutation } from "@apollo/react-hooks";
import { ADD_OR_REMOVE_FROM_QUEUE } from "../graphql/mutations";

function QueuedSongList({ queue }) {
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  // const song = {
  //   title: "LÜNE",
  //   artist: "MÖÖN",
  //   thumbnail: "http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg"
  // };

  return (
    greaterThanMd && (
      <div style={{ margin: "10px 0" }}>
        <Typography color="textSecondary" variant="button">
          QUEUE ({queue.length})
        </Typography>
        {queue.map((song) => (
          <QueuedSong key={song.id} song={song} />
        ))}
      </div>
    )
  );
}

function QueuedSong({ song }) {
  const [addOrRemoveFromQueue] = useMutation(ADD_OR_REMOVE_FROM_QUEUE, {
    onCompleted: (data) => {
      localStorage.setItem("queue", JSON.stringify(data.addOrRemoveFromQueue));
    },
  });
  const { thumbnail, artist, title } = song;

  function handleAddOrRemoveFromQueue() {
    addOrRemoveFromQueue({
      variables: { input: { ...song, __typename: "Song" } },
    });
  }

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
          style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {title}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {artist}
        </Typography>
      </div>
      <IconButton onClick={handleAddOrRemoveFromQueue}>
        <Delete color="error" />
      </IconButton>
    </div>
  );
}

export default QueuedSongList;
