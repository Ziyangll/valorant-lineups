import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Modal } from "@material-ui/core";

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
    width: "1600px",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
    top: "20%",
    textAlign: "center",
  },
});

export default function ButtonModal({ open, setOpen, style, icon, imgID}) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Button className={style} onClick={() => setOpen(true)}>
        <img
          className={classes.icon}
          alt={icon}
          src={
            process.env.PUBLIC_URL + "/images/icons/" + icon
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
              src={imgID}></img>
          </div>
        }
      </Modal>
    </div>
  );
}
