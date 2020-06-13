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
    left: "1000px",
    top: "800px",
  },
  two: {
    position: "absolute",
    left: "1150px",
    top: "450px",
  },
  three: {
    position: "absolute",
    left: "350px",
    top: "550px",
  },
  four: {
    position: "absolute",
    left: "350px",
    top: "750px",
  },
  five: {
    position: "absolute",
    left: "475px",
    top: "400px",
  },
  six: {
    position: "absolute",
    left: "1000px",
    top: "850px",
  },
  seven: {
    position: "absolute",
    left: "690px",
    top: "600px",
  },
  eight: {
    position: "absolute",
    left: "1200px",
    top: "550px",
  },
});

export default function ViperAscent() {
  const classes = useStyles();
  const Wallicon = "Viper_Toxic_Screen.png";
  const Orbicon = "Viper_Poison_Cloud.png";
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  return (
    <div>
      <ButtonModal
        open={open}
        setOpen={setOpen}
        style={classes.one}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1X-hd31PPeXmnKCWyJWwJvJlStRX9Ggtv"
        }
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={Orbicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1iZVKkLZDJimSr-464c7zxmGP3QptmN9O"
        }
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1eBO0JQmomCPH0lJ791FAmvJAL6zKI2bC"
        }
      />
      <ButtonModal
        open={open4}
        setOpen={setOpen4}
        style={classes.four}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1hq4rTsZZpv5T9XKHVxovEFpK7uaLjjgl"
        }
      />
      <ButtonModal
        open={open5}
        setOpen={setOpen5}
        style={classes.five}
        icon={Orbicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1_L5aLY7wWhchjoOetd9awq3bQz1YETt8"
        }
      />
      <ButtonModal
        open={open6}
        setOpen={setOpen6}
        style={classes.six}
        icon={Wallicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=13AHBy8ZB-WVME3AMDhijsg9G18Sx7lEC"
        }
      />
      <ButtonModal
        open={open7}
        setOpen={setOpen7}
        style={classes.seven}
        icon={Orbicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1cQHOgWIuQiz2Qhcl03-oI_D53B9DGMMM"
        }
      />
      <ButtonModal
        open={open8}
        setOpen={setOpen8}
        style={classes.eight}
        icon={Orbicon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1YHnhktwkBylozmxiysToKuz09ZVwaMzP"
        }
      />
    </div>
  );
}
