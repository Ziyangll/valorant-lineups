import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonModal from "../../ButtonModal";
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
    left: "1010px",
    top: "600px",
  },
  two: {
    position: "absolute",
    left: "750px",
    top: "660px",
  },
  three: {
    position: "absolute",
    left: "230px",
    top: "550px",
  },
});

export default function SovaHaven() {
  const classes = useStyles();
  const icon = "Sova_Recon_Bolt.png";
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div className={classes.main}>
      <ButtonModal
        open={open}
        setOpen={setOpen}
        style={classes.one}
        icon={icon}
        imgID={"https://drive.google.com/uc?export=view&id="}
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={icon}
        imgID={"https://drive.google.com/uc?export=view&id="}
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={icon}
        imgID={"https://drive.google.com/uc?export=view&id="}
      />
    </div>
  );
}
