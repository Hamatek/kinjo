import React from "react";
import Paper from "material-ui/Paper";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Divider from "material-ui/Divider";
const SelectedCity = ({ city, disabledRendu, seeForm }) => {
  return (
    <Paper style={{ marginTop: "2em", padding: "1em", background: "#f5f5f5" }}>
      <Typography type="headline">{city}</Typography>
      <Divider style={{ margin: "1em" }} />
      <Typography type="subheading" color="secondary" align="center">
        Remplissez ce formulaire afin de recevoir sans engagement la carte
        finalisée de votre lieu favori avant la découpe laser
      </Typography>
      <Button
        raised
        color="accent"
        style={{
          width: "100%",
          marginTop: "1em",
          backgroundColor: "#4ada99",
          color: "white"
        }}
        disabled={disabledRendu}
        onTouchTap={seeForm}
      >
        Demande de rendu
      </Button>
    </Paper>
  );
};

export default SelectedCity;
