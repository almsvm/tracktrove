import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  InputAdornment,
  TextField,
  Grid,
} from "@mui/material";
import { Link, AddBoxOutlined } from "@mui/icons-material";

function AddSong() {
  const [dialog, setDialog] = React.useState(false);

  function handleCloseDialog() {
    setDialog(false);
  }

  return (
    <div>
      <Dialog open={dialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <img
            src="http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg"
            alt="Song thumbnail"
            width="530"
          />
          <TextField margin="dense" name="title" label="Title" fullWidth />
          <TextField margin="dense" name="artist" label="Artist" fullWidth />
          <TextField
            margin="dense"
            name="thumbnail"
            label="Thumbnail"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button variant="outlined" color="primary">
            Add Song
          </Button>
        </DialogActions>
      </Dialog>
      <Grid
        container
        columnSpacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={9}>
          <TextField
            placeholder="Add Youtube or Soundcloud Url"
            fullWidth
            margin="normal"
            type="url"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Link />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={() => setDialog(true)}
            variant="contained"
            color="primary"
            margin="normal"
            endIcon={<AddBoxOutlined />}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddSong;
