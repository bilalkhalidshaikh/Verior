import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Styles/CssCards.css";
import heart from "../Images/heart-removebg-preview.png";
import tick from "../Images/tick-removebg-preview.png";
import light from "./../Images/light-removebg-preview.png";

const useStylesCard = makeStyles({
  root: {
    minWidth: 275,
    padding: "42px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function OutlinedCard() {
  const classes = useStylesCard();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function CssCards() {
  return (
    <div style={{ paddingBottom: "10em", paddingTop: "10em" }}>
      <Hidden only="xs">
        <div className="p-24">
          <main className="grid">
            <article className="item-center">
              <img
                src={tick}
                style={{
                  width: "16em",
                  height: "12em",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <div className="text">
                <h3
                  style={{
                    color: "#003F63",
                    fontWeight: "bold",
                    fontFamily: "'League Spartan Bold', arial",
                    fontSize: "20pt",
                  }}
                >
                  Sincirerity
                </h3>
                <p
                  style={{
                    color: "#999",
                    textAlign: "justify",
                    fontFamily: "Libre Baskerville",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </div>
            </article>
            <article>
              <img
                src={heart}
                style={{
                  width: "16em",
                  height: "13em",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <div className="text text-center">
                <h3
                  style={{
                    color: "#003F63",
                    fontWeight: "bold",
                    fontFamily: "'League Spartan Bold', arial",
                    fontSize: "20pt",
                  }}
                >
                  Commitment
                </h3>
                <p
                  style={{
                    color: "#999",
                    textAlign: "justify",
                    fontFamily: "Libre Baskerville",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </div>
            </article>
            <article style={{ marginTop: "-25px" }}>
              <img
                src={light}
                style={{
                  width: "16em",
                  height: "14em",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <div className="text">
                <h3
                  style={{
                    color: "#003F63",
                    fontWeight: "bold",
                    fontFamily: "'League Spartan Bold', arial",
                    fontSize: "20pt",
                  }}
                >
                  Integrity
                </h3>
                <p
                  style={{
                    color: "#999",
                    textAlign: "justify",
                    fontFamily: "Libre Baskerville",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </div>
            </article>
          </main>
        </div>
      </Hidden>

      <Hidden only="lg">
        <main className="grid">
          <article className="item-center">
            <img
              src={tick}
              style={{
                width: "16em",
                height: "12em",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div className="text">
              <h3
                style={{
                  color: "#003F63",
                  fontWeight: "bold",
                  fontFamily: "'League Spartan Bold', arial",
                  fontSize: "20pt",
                }}
              >
                Sincirerity
              </h3>
              <p
                style={{
                  color: "#999",
                  textAlign: "justify",
                  fontFamily: "Libre Baskerville",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
          </article>
          <article>
            <img
              src={heart}
              style={{
                width: "16em",
                height: "13em",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div className="text text-center">
              <h3
                style={{
                  color: "#003F63",
                  fontWeight: "bold",
                  fontFamily: "'League Spartan Bold', arial",
                  fontSize: "20pt",
                }}
              >
                Commitment
              </h3>
              <p
                style={{
                  color: "#999",
                  textAlign: "justify",
                  fontFamily: "Libre Baskerville",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
          </article>
          <article style={{ marginTop: "-25px" }}>
            <img
              src={light}
              style={{
                width: "16em",
                height: "14em",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div className="text">
              <h3
                style={{
                  color: "#003F63",
                  fontWeight: "bold",
                  fontFamily: "'League Spartan Bold', arial",
                  fontSize: "20pt",
                }}
              >
                Integrity
              </h3>
              <p
                style={{
                  color: "#999",
                  textAlign: "justify",
                  fontFamily: "Libre Baskerville",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
          </article>
        </main>
      </Hidden>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} id="about">
      <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ccc"
            fill-opacity="1"
            d="M0,288L60,277.3C120,267,240,245,360,229.3C480,213,600,203,720,218.7C840,235,960,277,1080,293.3C1200,309,1320,299,1380,293.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <CssCards />
    </div>
  );
}
