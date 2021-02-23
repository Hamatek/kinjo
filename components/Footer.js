import PropTypes from "prop-types";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Grid from "material-ui/Grid";

import ImageCard from "../components/ImageCard";

const styleSheet = createStyleSheet("PaperSheet", theme => ({
  root: {
    flexGrow: 1,
    margin: 30
  },
  card: {
    baackground: "black",
    marginTop: 10
  },
  paper: {
    padding: 16,
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "#f5f5f5"
  }
}));

const cityList = [
  {
    name: "Helsinki",
    images: {
      front: "helsinki.svg",
      back: "helsinki.jpg"
    }
  },
  {
    name: "Aix en Provence",
    images: {
      front: "aix_en_provence.svg",
      back: "aix_en_provence.jpg"
    }
  },
  {
    name: "New York",
    images: {
      front: "new_york.svg",
      back: "new_york.jpg"
    }
  },
  {
    name: "Vieux Port",
    images: {
      front: "vieux_port.svg",
      back: "vieux_port.jpg"
    }
  }
];

function Footer(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Grid container gutter={24} justify="center" align="center">
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={4}>
            <Typography type="headline" component="h3">
              Exemples de cartes suite au travail de nos graphistes
            </Typography>
          </Paper>
        </Grid>

        {cityList.map((ville, i) => (
          <ImageCard
            key={ville.name}
            classes={classes}
            imagePath={"/static/cartes/"}
            images={ville.images}
            altText={ville.name}
            size={6}
          />
        ))}
      </Grid>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Footer);
