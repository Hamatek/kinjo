import React from "react";
// import Input from 'material-ui/Input/Input';
import Input from "material-ui/TextField";
import Divider from "material-ui/Divider";
import Typography from "material-ui/Typography";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Paper from "material-ui/Paper";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import { Formik } from "formik";

const styleSheet = createStyleSheet("FormInputs", theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "1em",
    background: "#f5f5f5"
  },
  input: {
    width: "100%",
    margin: "1em"
  }
}));

const FormulaireRendu = ({
  classes,
  handleInputChange,
  isFormValid,
  submit,
  values,
  touched,
  errors,
  error,
  handleChange,
  handleSubmit,
  handleBlur,
  handleReset,
  isSubmitting
}) => {
  return (
    <Paper className={classes.container}>
      {/*  <Typography type="headline" style={{ textAlign: "justify" }}>
        Remplissez ce formulaire afin de recevoir sans engagement la carte
        finalisée de votre lieu favori avant la découpe laser.
      </Typography> */}

      <Input
        name="nom"
        label="Nom"
        onChange={handleInputChange}
        className={classes.input}
        fullWidth
      />

      <Input
        name="tel"
        label="Tel"
        onChange={handleInputChange}
        className={classes.input}
        fullWidth
        required
      />

      <Input
        type="email"
        name="email"
        label="Email"
        onChange={handleInputChange}
        className={classes.input}
        fullWidth
        required
      />

      <Input
        name="title"
        label="Titre de la carte"
        onChange={handleInputChange}
        className={classes.input}
        fullWidth
      />

      <Input
        name="comment"
        onChange={handleInputChange}
        className={classes.input}
        label="Commentaire"
        fullWidth
      />

      <Button
        disabled={!isFormValid}
        raised
        color="accent"
        style={{ width: "100%", marginTop: "1em", backgroundColor: "#4ada99" }}
        onTouchTap={submit}
      >
        Demande de rendu
      </Button>
    </Paper>
  );
};
FormulaireRendu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(FormulaireRendu);
