import React from "react";
import PropTypes from "prop-types";
import Input from "material-ui/Input/Input";
import Divider from "material-ui/Divider";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
// import { green400 } from 'material-ui/styles/colors';
import { withStyles, createStyleSheet } from "material-ui/styles";
import Typography from "material-ui/Typography";

const styleSheet = createStyleSheet("TextInputs", theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    background: "#f5f5f5",
    zIndex: 2
  },
  input: {
    margin: theme.spacing.unit,
    fontSize: "1.5em",
    grow: 1,
    textAlign: "center",
    width: "100%"
  },
  cardActions: {
    width: "100%",
    padding: "1em"
  }
}));

const SearchCity = ({ updateSearch, city, classes, onTouchTap }) => {
  return (
    <Card className={classes.container}>
      <CardActions className={classes.cardActions}>
        <Input
          placeholder="Indiquez votre lieu"
          onChange={updateSearch}
          className={classes.input}
        />
      </CardActions>
      <Button
        raised
        onTouchTap={onTouchTap}
        style={{
          width: "100%",
          margin: 15,
          backgroundColor: "#f4473a",
          color: "white"
        }}
      >
        recherche
      </Button>
    </Card>
  );
};

SearchCity.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(SearchCity);
