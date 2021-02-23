import React, { Component } from "react";
import PropTypes from "prop-types";

import injectTapEventPlugin from "react-tap-event-plugin";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import createPalette from "material-ui/styles/palette";
import { CircularProgress } from "material-ui/Progress";
import Toolbar from "material-ui/Toolbar";
import Grid from "material-ui/Grid";
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

import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import AppBar from "material-ui/AppBar";

import dynamic from "next/dynamic";
import Head from "next/head";
import { Container, Col, Row } from "react-grid-system";

import MapboxClient from "mapbox";
import StaticMap from "mapbox/lib/services/static";
import Footer from "../components/Footer";
import SearchCity from "../components/SearchCity";
import App from "../components/App";
import FormulaireRendu from "../components/FormulaireRendu";
import EndMessage from "../components/EndMessage";
import SelectedCity from "../components/SelectedCity";
import yup from "yup";

const schema = yup.object().shape({
  // nom: yup.string(),
  email: yup
    .string()
    .email()
    .required(),
  tel: yup
    .string()
    .min(9)
    .required()
  // title: yup.string(),
  // comment: yup.string()
});

const Map = dynamic(import("../components/Map"), {
  loading: () => (
    <div
      id="frame"
      style={{
        background: "black",
        height: 500,
        width: 500,
        textAlign: "center"
      }}
    >
      <CircularProgress size={200} />
    </div>
  ),
  ssr: false
});

if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}
const client = new MapboxClient(
  "pk.eyJ1IjoibGVncmltIiwiYSI6ImNqNTEzczJ5ZjFxcnQyd3FuOHJuN2RuNmsifQ.MR3lByLywqdaSE1MfXlQmg"
);

const indexStyle = createStyleSheet("indexStyle", theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

let mapSize = "500px";
const marseilleCenter = [5.37639, 43.29667];
class Index extends Component {
  state = {
    sliderValue: 0.5,
    city: "Marseille",
    center: marseilleCenter,
    dragCenter: null,
    zoomLevel: 11.5,
    finished: false,
    stepIndex: 0,
    inputSearch: "",
    imgUrl: null,
    hideForm: true,
    ///form
    nom: null,
    email: null,
    tel: null,
    title: null,
    comment: null
  };

  getMapData = map => {
    this.setState(function(state) {
      return { map: map };
    });
  };
  showForm = () => {
    console.log("show fucking form");
    this.setState(function() {
      return { hideForm: false };
    });
  };

  sendEmail = () => {
    const { map, nom, title, tel, email, comment, city, mapSize } = this.state;
    const center = map.getCenter();
    const { lng, lat } = center;
    console.log("sending email");
    console.log("mapSize");

    let calculatedSize = mapSize === "90vw" ? window.innerWidth : mapSize;
    console.log(calculatedSize);
    const imgUrl = client.getStaticURL(
      "mapbox",
      "streets-v10",
      calculatedSize,
      calculatedSize,
      {
        longitude: lng,
        latitude: lat,
        zoom: map.getZoom(),
        retina: true
      }
    );

    console.log("imgUrl");
    console.log(imgUrl);
    // {token: "e2759110-b5d3-4ff5-a153-4e6e965f231e"}, steph {token:
    // "fbae29bc-c70f-4a1e-87c6-f7abe58dcf9f"}, mat
    Email.sendWithAttachment(
      "stephane@kinjo.fr",
      "stephane@kinjo.fr",
      `Demande de carte Kinjo ${title}`,
      `
            || La carte || 
                        
             ${imgUrl}
             
             || Parametres ||
             
             Latitude: ${lng}
             Longitude: ${lat}
             Zoom: ${map.getZoom()}
             
             || Formulaire ||

             Titre carte: ${title}
             
             Nom: ${nom}          
             Tel: ${tel}
             Email: ${email}
             Commentaire: ${comment}
            `,
      {
        token: "e2759110-b5d3-4ff5-a153-4e6e965f231e"
      }
    );
  };

  updateSearch = event => {
    console.log("update search");
    const searchInput = event.target.value;
    console.log(searchInput);
    this.setState(function() {
      return { inputSearch: searchInput };
    });
  };

  centerMap = () => {
    client.geocodeForward(this.state.inputSearch, (err, data, res) => {
      const firstResult = data.features[0];
      console.log(firstResult);
      if (firstResult) {
        this.setState(function() {
          return { city: firstResult.place_name, center: firstResult.center };
        });
      }
    });
    this.showForm();
  };
  handleNext = () => {
    this.setState(function(state) {
      if (state.stepIndex === 1) {
        // this.checkForm();
        if (state.isFormValid) {
          // console.log("sending email or not");
          this.sendEmail();
        } else {
          return {};
        }
      }
      return {
        stepIndex: state.stepIndex + 1,
        finished: state.stepIndex >= 1
      };
    });
  };
  handlePrev = () => {
    this.setState(function(state) {
      if (state.stepIndex > 0) {
        return {
          stepIndex: state.stepIndex - 1
        };
      }
    });
  };
  checkForm = () => {
    const { nom, tel, email, title, comment } = this.state;
    const isValid = schema.isValid({ email, tel }).then(valid => {
      this.setState({ isFormValid: valid });
    });
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
    this.checkForm();
  };

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  };
  updateWindowDimensions = () => {
    console.log("resize");
    console.log(window.innerWidth);
    this.setState({
      mapSize: window.innerWidth - 15 >= 500 ? 500 : "90vw"
    });
  };

  render() {
    const {
      city,
      center,
      finished,
      stepIndex,
      imgUrl,
      mapSize,
      hideForm
    } = this.state;

    const classes = this.props.classes;

    // console.log("render state", this.state);
    return (
      <App>
        <div style={{ flexGrow: 1 }}>
          <Grid container gutter={0} justify="center" align="center">
            {/* <Grid item xs={12}>
              <Typography
                type="title"
                align="right"
                type="headline"
                style={{
                  width: "100%"
                }}
              >
                <span
                  style={{
                    margin: 10,
                    padding: 10,
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: 50
                  }}
                >
                  150€
                </span>
              </Typography>
            </Grid> */}
            <Grid item xs={12} sm={8} lg={5}>
              <Grid item xs={12} sm={12} lg={9} style={{ width: 575 }}>
                <Paper
                  style={{
                    marginTop: "2em",
                    padding: "1em",
                    fontSize: 15,
                    textAlign: "justify",
                    background: "#f5f5f5"
                  }}
                >
                  Zoomez et déplacez vous directement sur la carte pour trouver
                  le positionnement parfait de votre lieu favori.
                </Paper>
              </Grid>
              <div
                id="frame"
                style={{
                  width: mapSize,
                  height: mapSize
                }}
                ref={ref => (this.mapGrid = ref)}
              >
                <Map
                  center={center}
                  getMapData={this.getMapData}
                  mapSize={mapSize}
                  showForm={this.showForm}
                />
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: stepIndex == 0 ? "block" : "none"
              }}
            >
              <Grid
                item
                xs={12}
                md={4}
                lg={12}
                style={{
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <div id="price">150€</div>
              </Grid>
              <SearchCity
                updateSearch={this.updateSearch}
                onTouchTap={this.centerMap}
              />

              <SelectedCity
                city={city}
                seeForm={this.handleNext}
                disabledRendu={hideForm}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: stepIndex == 1 ? "block" : "none"
              }}
            >
              <FormulaireRendu
                isFormValid={this.state.isFormValid}
                handleInputChange={this.handleInputChange}
                submit={this.handleNext}
              />

              <div
                style={{
                  marginTop: 20,
                  marginRight: 0
                }}
              >
                <Button
                  raised
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{
                    marginRight: 12
                  }}
                >
                  Retour
                </Button>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: stepIndex == 2 ? "block" : "none"
              }}
            >
              <EndMessage />
            </Grid>

            <style jsx>
              {`
                #frame {
                  background-image: url("/static/wood1.jpg");
                  background-repeat: repeat-x;
                  background-size: cover;
                  padding: 2vw;
                  margin-top: 3%;
                  box-shadow: 10px 10px 33px rgba(0, 0, 0, 0.51);
                }

                #price {
                  -webkit-transform: rotate(15deg);
                  -ms-transform: rotate(15deg);
                  transform: rotate(15deg);
                  margin-bottom: -15px;
                  margin-left: -15px;
                  font-size: 20px;
                  line-height: 2.2;
                  font-family: ProximaNova-Regular, sans-serif;
                  font-weight: 400;
                  background: #000;
                  background: rgba(0, 0, 0, 0.5);
                  padding: 0.5em;
                  text-align: center;
                  color: #fff;
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  z-index: 1;
                }
              `}
            </style>
            <Footer />
          </Grid>
        </div>
      </App>
    );
  }
}
Index.propTypes = {
  mapSize: PropTypes.string
};

Index.defaultProps = {
  mapSize: mapSize
};

export default Index;
