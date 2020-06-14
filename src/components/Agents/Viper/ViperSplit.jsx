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
    top: "700px",
  },
  two: {
    position: "absolute",
    left: "1175px",
    top: "825px",
  },
  three: {
    position: "absolute",
    left: "350px",
    top: "550px",
  },
  four: {
    position: "absolute",
    left: "725px",
    top: "1150px",
  },
  five: {
    position: "absolute",
    left: "300px",
    top: "900px",
  },
  six: {
    position: "absolute",
    left: "925px",
    top: "1100px",
  },
});

export default function ViperSplit() {
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
          "https://drive.google.com/uc?export=view&id=10pcdRALM4HzeQJMwztfPp5HpKOG2aEmR"
        }
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={Orbicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=11VK0IGcXpWTViJKyulxscKSx9_I4PIRl"
        }
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={Orbicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=13WoD9ZCHskUfUkOK5fA4QsNXTLBs_BP_"
        }
      />
      <ButtonModal
        open={open4}
        setOpen={setOpen4}
        style={classes.four}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1pTuWVov9SwKfqOALYbqmmyJW0EhrIdZE"
        }
      />
      <ButtonModal
        open={open5}
        setOpen={setOpen5}
        style={classes.five}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1RirZf0y0VTcytDbQffjSAw7RC_PbW36y"
        }
      />
      <ButtonModal
        open={open6}
        setOpen={setOpen6}
        style={classes.six}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1Wqje7pZv0tMh1UoWC6EuXFCAwvyLtlfZ"
        }
      />
    </div>
  );
}
