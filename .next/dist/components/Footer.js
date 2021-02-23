"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("material-ui/styles");

var _Paper = require("material-ui/Paper");

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = require("material-ui/Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _Card = require("material-ui/Card");

var _Card2 = _interopRequireDefault(_Card);

var _Grid = require("material-ui/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _ImageCard = require("../components/ImageCard");

var _ImageCard2 = _interopRequireDefault(_ImageCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = (0, _styles.createStyleSheet)("PaperSheet", function (theme) {
  return {
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
  };
});

var cityList = [{
  name: "Helsinki",
  images: {
    front: "helsinki.svg",
    back: "helsinki.jpg"
  }
}, {
  name: "Aix en Provence",
  images: {
    front: "aix_en_provence.svg",
    back: "aix_en_provence.jpg"
  }
}, {
  name: "New York",
  images: {
    front: "new_york.svg",
    back: "new_york.jpg"
  }
}, {
  name: "Vieux Port",
  images: {
    front: "vieux_port.svg",
    back: "vieux_port.jpg"
  }
}];

function Footer(props) {
  var classes = props.classes;
  return _react2.default.createElement("div", { className: classes.root }, _react2.default.createElement(_Grid2.default, { container: true, gutter: 24, justify: "center", align: "center" }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12 }, _react2.default.createElement(_Paper2.default, { className: classes.paper, elevation: 4 }, _react2.default.createElement(_Typography2.default, { type: "headline", component: "h3" }, "Exemples de cartes suite au travail de nos graphistes"))), cityList.map(function (ville, i) {
    return _react2.default.createElement(_ImageCard2.default, {
      key: ville.name,
      classes: classes,
      imagePath: "/static/cartes/",
      images: ville.images,
      altText: ville.name,
      size: 6
    });
  })));
}

exports.default = (0, _styles.withStyles)(styleSheet)(Footer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIndpdGhTdHlsZXMiLCJjcmVhdGVTdHlsZVNoZWV0IiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJHcmlkIiwiSW1hZ2VDYXJkIiwic3R5bGVTaGVldCIsInJvb3QiLCJmbGV4R3JvdyIsIm1hcmdpbiIsImNhcmQiLCJiYWFja2dyb3VuZCIsIm1hcmdpblRvcCIsInBhcGVyIiwicGFkZGluZyIsInRleHRBbGlnbiIsImNvbG9yIiwidGhlbWUiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsImJhY2tncm91bmQiLCJjaXR5TGlzdCIsIm5hbWUiLCJpbWFnZXMiLCJmcm9udCIsImJhY2siLCJGb290ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJtYXAiLCJ2aWxsZSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZOztBQUNyQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBUSxBQUFhLEFBQWE7Ozs7QUFDekMsQUFBTzs7OztBQUVQLEFBQU87Ozs7OztBQUVQLElBQU0sMkNBQWEsQUFBaUIsY0FBYyxpQkFBQTs7O2dCQUMxQyxBQUNNLEFBQ1Y7Y0FId0QsQUFDcEQsQUFFSSxBQUVWO0FBSk0sQUFDSjs7bUJBR0ksQUFDUyxBQUNiO2lCQVB3RCxBQUtwRCxBQUVPLEFBRWI7QUFKTSxBQUNKOztlQUdLLEFBQ0ksQUFDVDtpQkFGSyxBQUVNLEFBQ1g7YUFBTyxNQUFBLEFBQU0sUUFBTixBQUFjLEtBSGhCLEFBR3FCLEFBQzFCO2tCQWI4QyxBQUFVLEFBU25ELEFBSU87QUFKUCxBQUNMO0FBVndELEFBQzFEO0FBREYsQUFBbUIsQ0FBQTs7QUFpQm5CLElBQU07UUFDSixBQUNRLEFBQ047O1dBQVEsQUFDQyxBQUNQO1VBTFcsQUFDZixBQUVVLEFBRUE7QUFGQSxBQUNOO0FBSEosQUFDRSxDQUZhO1FBUWYsQUFDUSxBQUNOOztXQUFRLEFBQ0MsQUFDUDtVQVpXLEFBUWYsQUFFVSxBQUVBO0FBRkEsQUFDTjtBQUhKLEFBQ0U7UUFNRixBQUNRLEFBQ047O1dBQVEsQUFDQyxBQUNQO1VBbkJXLEFBZWYsQUFFVSxBQUVBO0FBRkEsQUFDTjtBQUhKLEFBQ0U7UUFNRixBQUNRLEFBQ047O1dBQVEsQUFDQyxBQUNQO1VBMUJOLEFBQWlCLEFBc0JmLEFBRVUsQUFFQTtBQUZBLEFBQ047QUFISixBQUNFOztBQVFKLFNBQUEsQUFBUyxPQUFULEFBQWdCLE9BQU8sQUFDckI7TUFBTSxVQUFVLE1BQWhCLEFBQXNCLEFBQ3RCO3lCQUNFLGNBQUEsU0FBSyxXQUFXLFFBQWhCLEFBQXdCLEFBQ3RCLHdCQUFBLEFBQUMsZ0NBQUssV0FBTixNQUFnQixRQUFoQixBQUF3QixJQUFJLFNBQTVCLEFBQW9DLFVBQVMsT0FBN0MsQUFBbUQsQUFDakQsNEJBQUEsQUFBQyxnQ0FBSyxNQUFOLE1BQVcsSUFBWCxBQUFlLEFBQ2Isc0JBQUEsQUFBQyxpQ0FBTSxXQUFXLFFBQWxCLEFBQTBCLE9BQU8sV0FBakMsQUFBNEMsQUFDMUMscUJBQUEsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCLFlBQVcsV0FBNUIsQUFBc0MsUUFINUMsQUFDRSxBQUNFLEFBQ0UsQUFNSCxxRUFBQSxBQUFTLElBQUksVUFBQSxBQUFDLE9BQUQsQUFBUSxHQUFSOzJCQUNaLEFBQUM7V0FDTSxNQURQLEFBQ2EsQUFDWDtlQUZGLEFBRVcsQUFDVDtpQkFIRixBQUdhLEFBQ1g7Y0FBUSxNQUpWLEFBSWdCLEFBQ2Q7ZUFBUyxNQUxYLEFBS2lCLEFBQ2Y7WUFQVSxBQUNaLEFBTVE7QUFMTixLQURGO0FBWlIsQUFDRSxBQUNFLEFBU0csQUFhUixLQXZCRztBQTZCSjs7a0JBQWUsd0JBQUEsQUFBVyxZQUExQixBQUFlLEFBQXVCIiwiZmlsZSI6IkZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3dpbmd2eS9Eb2N1bWVudHMvREVWL2tpbmpvIn0=