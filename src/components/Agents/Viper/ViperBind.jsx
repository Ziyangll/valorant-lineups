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
    left: "800px",
    top: "525px",
  },
  two: {
    position: "absolute",
    left: "1000px",
    top: "350px",
  },
  three: {
    position: "absolute",
    left: "200px",
    top: "450px",
  },
  four: {
    position: "absolute",
    left: "925px",
    top: "725px",
  },
  five: {
    position: "absolute",
    left: "500px",
    top: "600px",
  },
  six: {
    position: "absolute",
    left: "1150px",
    top: "600px",
  },
});

export default function ViperBind() {
  const classes = useStyles();
  const Wallicon = "Viper_Toxic_Screen.png";
  const Orbicon = "Viper_Poison_Cloud.png";
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <div>
      <ButtonModal
        open={open}
        setOpen={setOpen}
        style={classes.one}
        icon={Orbicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1XBNAcR0perqsR6isKOsi2TNojBx3maCa"
        }
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={Orbicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1Z9CKjzn_vQeU39rufD3p_h_T3w_dbk0f"
        }
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={Orbicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=16mjcy7IxehaeqV7RHe7kfx6Dnskc0KHH"
        }
      />
      <ButtonModal
        open={open4}
        setOpen={setOpen4}
        style={classes.four}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1Rily5pvAF52hRKWAchYdqZalL67pXgKX"
        }
      />
      <ButtonModal
        open={open5}
        setOpen={setOpen5}
        style={classes.five}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1G2P2RVb5dEifp_UGILL_7lKFANiMobIn"
        }
      />
      <ButtonModal
        open={open6}
        setOpen={setOpen6}
        style={classes.six}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1WYFzoOCcZZN366B0hDhBDdooxTynoSXE"
        }
      />
    </div>
  );
}
