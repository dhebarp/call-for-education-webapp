import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

export const CreateRoomPage = () => {
  const [schoolName, setSchoolName] = useState("");
  const [subject, setSubject] = useState("");
  const [roomName, setRoomName] = useState("");

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(16),
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
    },
  }));

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewRoom();
  };

  const createNewRoom = () => {
    fetch("rooms", {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: "same-origin",
        body: JSON.stringify({
          SchoolName: schoolName,
          Subject: subject,
          RoomCode: roomName,
        })
      }).then((res) => res.json())
        .then((data) => {
          console.log("data:", data);
        })
    }

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-error-whelper-text"
          label="School Name"
          value={schoolName}
          variant="outlined"
          onChange={(event) => setSchoolName(event.target.value)}
        />
        <TextField
          id="outlined-error-whelper-text"
          label="Subject"
          value={subject}
          variant="outlined"
          onChange={(event) => setSubject(event.target.value)}
        />
        <TextField
          id="outlined-error-whelper-text"
          label="Enter Room Name"
          value={roomName}
          variant="outlined"
          onChange={(event) => setRoomName(event.target.value)}
        />
         <Button variant="contained" color="primary" onClick={handleSubmit} >
        Create Room
      </Button>
      </form>
    </div>
  );
};
