import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
const useStyles = makeStyles({
  main: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#222",
  },
  text: {
    color: "#fff",
  },
  icon: {
    width: "40px",
    height: "40px",
  },

  image: {
    position: "absolute",
    width: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
    top: "50%",
    textAlign: "center",
  },
  one: {
    position: "absolute",
    left: "1230px",
    top: "460px",
  },
  two: {
    position: "absolute",
    left: "1230px",
    top: "500px",
  },
  three: {
    position: "absolute",
    left: "200px",
    top: "700px",
  },
  four: {
    position: "absolute",
    left: "580px",
    top: "750px",
  },
});

export default function CypherHaven() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [open2, setOpen2] = useState(false);

  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className={classes.main}>
      <Button className={classes.one} onClick={() => setOpen(true)}>
        <img
          className={classes.icon}
          alt='cam icon'
          src={
            process.env.PUBLIC_URL + "/images/icons/Cypher_Spycam.png"
          }></img>
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        {
          <div>
            <img
              className={classes.image}
              alt='cam spot'
              src='https://drive.google.com/uc?export=view&id=1kpUXtZpEsUOuUSDdd_Lqxe9SrGLCjb7a'></img>
          </div>
        }
      </Modal>

      <Button className={classes.two} onClick={() => setOpen2(true)}>
        <img
          className={classes.icon}
          alt='cam icon'
          src={
            process.env.PUBLIC_URL + "/images/icons/Cypher_Spycam.png"
          }></img>
      </Button>
      <Modal
        open={open2}
        onClose={() => setOpen2(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        {
          <div>
            <img
              className={classes.image}
              alt='cam spot'
              src='https://drive.google.com/uc?export=view&id=1ppOa7sC6z19rUfH1iYAt8vqmN-bpOdUT'></img>
          </div>
        }
      </Modal>

      <Button className={classes.three} onClick={() => setOpen3(true)}>
        <img
          className={classes.icon}
          alt='cam icon'
          src={
            process.env.PUBLIC_URL + "/images/icons/Cypher_Spycam.png"
          }></img>
      </Button>
      <Modal
        open={open3}
        onClose={() => setOpen3(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        {
          <div>
            <img
              className={classes.image}
              alt='cam spot'
              src='https://drive.google.com/uc?export=view&id=1l3rHhY5V9BpvSsIkNb4FosTh-Gh6kYSd'></img>
          </div>
        }
      </Modal>

      <Button className={classes.four} onClick={() => setOpen4(true)}>
        <img
          className={classes.icon}
          alt='cam icon'
          src={
            process.env.PUBLIC_URL + "/images/icons/Cypher_Spycam.png"
          }></img>
      </Button>
      <Modal
        open={open4}
        onClose={() => setOpen4(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'>
        {
          <div>
            <img
              className={classes.image}
              alt='cam spot'
              src='https://drive.google.com/uc?export=view&id=1t2urXE0jVvSDwOe17LsG9yvF61iNHuqT'></img>
          </div>
        }
      </Modal>
    </div>
  );
}
