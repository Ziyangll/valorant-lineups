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
  const icon = "Cypher_Spycam.png";
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <div className={classes.main}>
      <ButtonModal
        open={open}
        setOpen={setOpen}
        style={classes.one}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1kpUXtZpEsUOuUSDdd_Lqxe9SrGLCjb7a"
        }
      />
      <ButtonModal
        open={open2}
        setOpen={setOpen2}
        style={classes.two}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1ppOa7sC6z19rUfH1iYAt8vqmN-bpOdUT"
        }
      />
      <ButtonModal
        open={open3}
        setOpen={setOpen3}
        style={classes.three}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1l3rHhY5V9BpvSsIkNb4FosTh-Gh6kYSd"
        }
      />
      <ButtonModal
        open={open4}
        setOpen={setOpen4}
        style={classes.four}
        icon={icon}
        imgID={
          "https://drive.google.com/uc?export=view&id=1t2urXE0jVvSDwOe17LsG9yvF61iNHuqT"
        }
      />
    </div>
  );
}
