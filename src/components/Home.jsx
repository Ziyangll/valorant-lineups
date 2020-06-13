import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  main: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#222",
  },
  root: {
    margin: "2rem",
  },
});
export default function Home() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Card className={classes.root}>
        <CardActionArea onClick={() => history.push("/cypher")}>
          <CardMedia
            component='img'
            color="grey"
            alt='cypher'
            height='140'
            image={process.env.PUBLIC_URL + "/images/Cypher_Spycam.png"}
            title='cypher'
          />

          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Cypher
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button component={Link} to='/cypher/ascent'>
            ASCENT
          </Button>
          <Button component={Link} to='/cypher/bind'>
            BIND
          </Button>
          <Button component={Link} to='/cypher/haven'>
            HAVEN
          </Button>
          <Button component={Link} to='/cypher/split'>
            SPLIT
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea onClick={() => history.push("/sova")}>
          <CardMedia
            component='img'
            alt='sova'
            height='140'
            image={process.env.PUBLIC_URL + "/images/Sova.png"}
            title='sova'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              SOVA
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button component={Link} to='/sova/ascent'>
            ASCENT
          </Button>
          <Button component={Link} to='/sova/bind'>
            BIND
          </Button>
          <Button component={Link} to='/sova/haven'>
            HAVEN
          </Button>
          <Button component={Link} to='/sova/split'>
            SPLIT
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea onClick={() => history.push("/viper")}>

          <CardMedia
            component='img'
            alt='viper'
            height='140'
            image={process.env.PUBLIC_URL + "/images/Viper.png"}
            title='viper'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              VIPER
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button component={Link} to='/viper/ascent'>
            ASCENT
          </Button>
          <Button component={Link} to='/viper/bind'>
            BIND
          </Button>
          <Button component={Link} to='/viper/haven'>
            HAVEN
          </Button>
          <Button component={Link} to='/viper/split'>
            SPLIT
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
