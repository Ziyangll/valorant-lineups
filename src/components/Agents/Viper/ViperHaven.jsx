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
    left: "600px",
    top: "550px",
  },
  two: {
    position: "absolute",
    left: "1175px",
    top: "475px",
  },
  three: {
    position: "absolute",
    left: "800px",
    top: "550px",
  },
  four: {
    position: "absolute",
    left: "725px",
    top: "925px",
  },
  five: {
    position: "absolute",
    left: "400px",
    top: "1000px",
  },
  six: {
    position: "absolute",
    left: "875px",
    top: "1050px",
  },
});

export default function ViperHaven() {
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
          "https://drive.google.com/uc?export=view&id=1YS0SZ9SM6AL72EgGKcz9j8wymRGDmwDb"
        }
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={Orbicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1Q9DkQwWkBIXeFmCZabz7gvvWTkcA2drg"
        }
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={Orbicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1T9NMwxpHdT-cSBN01P2xdo_YXlWnwa9P"
        }
      />
      <ButtonModal
        open={open4}
        setOpen={setOpen4}
        style={classes.four}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=12TCBLVFWtgCGa0LDShWrnXMc7kNcVHCg"
        }
      />
      <ButtonModal
        open={open5}
        setOpen={setOpen5}
        style={classes.five}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1lfepPhwYNO-77HRWklr3YvVUS56j4yyG"
        }
      />
      <ButtonModal
        open={open6}
        setOpen={setOpen6}
        style={classes.six}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1-QFglp4JBXCChGPqy6cRWnS95n7Mily7"
        }
      />
    </div>
  );
}
