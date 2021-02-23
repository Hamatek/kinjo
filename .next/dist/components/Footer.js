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

var _jsxFileName = "/Users/swingvy/Documents/DEV/kinjo/components/Footer.js";


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
  return _react2.default.createElement("div", { className: classes.root, __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement(_Grid2.default, { container: true, gutter: 24, justify: "center", align: "center", __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement(_Paper2.default, { className: classes.paper, elevation: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement(_Typography2.default, { type: "headline", component: "h3", __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, "Exemples de cartes suite au travail de nos graphistes"))), cityList.map(function (ville, i) {
    return _react2.default.createElement(_ImageCard2.default, {
      key: ville.name,
      classes: classes,
      imagePath: "/static/cartes/",
      images: ville.images,
      altText: ville.name,
      size: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    });
  })));
}

Footer.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styleSheet)(Footer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIndpdGhTdHlsZXMiLCJjcmVhdGVTdHlsZVNoZWV0IiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWEiLCJHcmlkIiwiSW1hZ2VDYXJkIiwic3R5bGVTaGVldCIsInJvb3QiLCJmbGV4R3JvdyIsIm1hcmdpbiIsImNhcmQiLCJiYWFja2dyb3VuZCIsIm1hcmdpblRvcCIsInBhcGVyIiwicGFkZGluZyIsInRleHRBbGlnbiIsImNvbG9yIiwidGhlbWUiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsImJhY2tncm91bmQiLCJjaXR5TGlzdCIsIm5hbWUiLCJpbWFnZXMiLCJmcm9udCIsImJhY2siLCJGb290ZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJtYXAiLCJ2aWxsZSIsImkiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBWTs7QUFDckIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVEsQUFBYSxBQUFhOzs7O0FBQ3pDLEFBQU87Ozs7QUFFUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLDJDQUFhLEFBQWlCLGNBQWMsaUJBQUE7OztnQkFDMUMsQUFDTSxBQUNWO2NBSHdELEFBQ3BELEFBRUksQUFFVjtBQUpNLEFBQ0o7O21CQUdJLEFBQ1MsQUFDYjtpQkFQd0QsQUFLcEQsQUFFTyxBQUViO0FBSk0sQUFDSjs7ZUFHSyxBQUNJLEFBQ1Q7aUJBRkssQUFFTSxBQUNYO2FBQU8sTUFBQSxBQUFNLFFBQU4sQUFBYyxLQUhoQixBQUdxQixBQUMxQjtrQkFiOEMsQUFBVSxBQVNuRCxBQUlPO0FBSlAsQUFDTDtBQVZ3RCxBQUMxRDtBQURGLEFBQW1CLENBQUE7O0FBaUJuQixJQUFNO1FBQ0osQUFDUSxBQUNOOztXQUFRLEFBQ0MsQUFDUDtVQUxXLEFBQ2YsQUFFVSxBQUVBO0FBRkEsQUFDTjtBQUhKLEFBQ0UsQ0FGYTtRQVFmLEFBQ1EsQUFDTjs7V0FBUSxBQUNDLEFBQ1A7VUFaVyxBQVFmLEFBRVUsQUFFQTtBQUZBLEFBQ047QUFISixBQUNFO1FBTUYsQUFDUSxBQUNOOztXQUFRLEFBQ0MsQUFDUDtVQW5CVyxBQWVmLEFBRVUsQUFFQTtBQUZBLEFBQ047QUFISixBQUNFO1FBTUYsQUFDUSxBQUNOOztXQUFRLEFBQ0MsQUFDUDtVQTFCTixBQUFpQixBQXNCZixBQUVVLEFBRUE7QUFGQSxBQUNOO0FBSEosQUFDRTs7QUFRSixTQUFBLEFBQVMsT0FBVCxBQUFnQixPQUFPLEFBQ3JCO01BQU0sVUFBVSxNQUFoQixBQUFzQixBQUN0Qjt5QkFDRSxjQUFBLFNBQUssV0FBVyxRQUFoQixBQUF3QjtnQkFBeEI7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxXQUFOLE1BQWdCLFFBQWhCLEFBQXdCLElBQUksU0FBNUIsQUFBb0MsVUFBUyxPQUE3QyxBQUFtRDtnQkFBbkQ7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsZ0NBQUssTUFBTixNQUFXLElBQVgsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxpQ0FBTSxXQUFXLFFBQWxCLEFBQTBCLE9BQU8sV0FBakMsQUFBNEM7Z0JBQTVDO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLHNDQUFXLE1BQVosQUFBaUIsWUFBVyxXQUE1QixBQUFzQztnQkFBdEM7a0JBQUE7QUFBQTtLQUhOLEFBQ0UsQUFDRSxBQUNFLEFBTUgscUVBQUEsQUFBUyxJQUFJLFVBQUEsQUFBQyxPQUFELEFBQVEsR0FBUjsyQkFDWixBQUFDO1dBQ00sTUFEUCxBQUNhLEFBQ1g7ZUFGRixBQUVXLEFBQ1Q7aUJBSEYsQUFHYSxBQUNYO2NBQVEsTUFKVixBQUlnQixBQUNkO2VBQVMsTUFMWCxBQUtpQixBQUNmO1lBTkYsQUFNUTs7a0JBTlI7b0JBRFksQUFDWjtBQUFBO0FBQ0UsS0FERjtBQVpSLEFBQ0UsQUFDRSxBQVNHLEFBYVI7OztBQUVELE9BQUEsQUFBTztXQUNJLG9CQUFBLEFBQVUsT0FEckIsQUFBbUIsQUFDUyxBQUc1QjtBQUptQixBQUNqQjs7a0JBR2Esd0JBQUEsQUFBVyxZQUExQixBQUFlLEFBQXVCIiwiZmlsZSI6IkZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3dpbmd2eS9Eb2N1bWVudHMvREVWL2tpbmpvIn0=