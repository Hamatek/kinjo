"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("next/node_modules/babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require("next/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTapEventPlugin = require("react-tap-event-plugin");

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _styles = require("material-ui/styles");

var _palette = require("material-ui/styles/palette");

var _palette2 = _interopRequireDefault(_palette);

var _Progress = require("material-ui/Progress");

var _Toolbar = require("material-ui/Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Grid = require("material-ui/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _Input = require("material-ui/Input/Input");

var _Input2 = _interopRequireDefault(_Input);

var _Divider = require("material-ui/Divider");

var _Divider2 = _interopRequireDefault(_Divider);

var _Card = require("material-ui/Card");

var _Card2 = _interopRequireDefault(_Card);

var _Button = require("material-ui/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Paper = require("material-ui/Paper");

var _Paper2 = _interopRequireDefault(_Paper);

var _IconButton = require("material-ui/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Typography = require("material-ui/Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _AppBar = require("material-ui/AppBar");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _dynamic = require("next/dist/lib/dynamic.js");

var _dynamic2 = _interopRequireDefault(_dynamic);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _reactGridSystem = require("react-grid-system");

var _mapbox = require("mapbox");

var _mapbox2 = _interopRequireDefault(_mapbox);

var _static = require("mapbox/lib/services/static");

var _static2 = _interopRequireDefault(_static);

var _Footer = require("../components/Footer");

var _Footer2 = _interopRequireDefault(_Footer);

var _SearchCity = require("../components/SearchCity");

var _SearchCity2 = _interopRequireDefault(_SearchCity);

var _App = require("../components/App");

var _App2 = _interopRequireDefault(_App);

var _FormulaireRendu = require("../components/FormulaireRendu");

var _FormulaireRendu2 = _interopRequireDefault(_FormulaireRendu);

var _EndMessage = require("../components/EndMessage");

var _EndMessage2 = _interopRequireDefault(_EndMessage);

var _SelectedCity = require("../components/SelectedCity");

var _SelectedCity2 = _interopRequireDefault(_SelectedCity);

var _yup = require("yup");

var _yup2 = _interopRequireDefault(_yup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/swingvy/Documents/DEV/kinjo/pages/index.js?entry";
// import { green400 } from 'material-ui/styles/colors';


var schema = _yup2.default.object().shape({
  // nom: yup.string(),
  email: _yup2.default.string().email().required(),
  tel: _yup2.default.string().min(9).required()
  // title: yup.string(),
  // comment: yup.string()
});

var Map = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require("next/dist/lib/dynamic.js").SameLoopPromise)(function (resolve, reject) {
  eval('require.ensure = function (deps, callback) { callback(require) }');

  require.ensure([], function (require) {
    var m = require("../components/Map");

    m.__webpackChunkName = 'components_Map_ce5f1892007d7cb7e2445d22423810d5.js';
    resolve(m);
  }, 'chunks/components_Map_ce5f1892007d7cb7e2445d22423810d5.js');
}) : new (require("next/dist/lib/dynamic.js").SameLoopPromise)(function (resolve, reject) {
  var weakId = require.resolveWeak("../components/Map");

  try {
    var weakModule = __webpack_require__(weakId);

    return resolve(weakModule);
  } catch (err) {}

  require.ensure([], function (require) {
    try {
      var m = require("../components/Map");

      resolve(m);
    } catch (error) {
      reject(error);
    }
  }, 'chunks/components_Map_ce5f1892007d7cb7e2445d22423810d5.js');
}), {
  loading: function loading() {
    return _react2.default.createElement("div", {
      id: "frame",
      style: {
        background: "black",
        height: 500,
        width: 500,
        textAlign: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    }, _react2.default.createElement(_Progress.CircularProgress, { size: 200, __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      }
    }));
  },
  ssr: false
});

if (!process.tapEventInjected) {
  (0, _reactTapEventPlugin2.default)();
  process.tapEventInjected = true;
}
var client = new _mapbox2.default("pk.eyJ1IjoibGVncmltIiwiYSI6ImNqNTEzczJ5ZjFxcnQyd3FuOHJuN2RuNmsifQ.MR3lByLywqdaSE1MfXlQmg");

var indexStyle = (0, _styles.createStyleSheet)("indexStyle", function (theme) {
  return {
    root: {
      flexGrow: 1,
      marginTop: 30
    },
    paper: {
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  };
});

var mapSize = "500px";
var marseilleCenter = [5.37639, 43.29667];

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
    }, _this.getMapData = function (map) {
      _this.setState(function (state) {
        return { map: map };
      });
    }, _this.showForm = function () {
      console.log("show fucking form");
      _this.setState(function () {
        return { hideForm: false };
      });
    }, _this.sendEmail = function () {
      var _this$state = _this.state,
          map = _this$state.map,
          nom = _this$state.nom,
          title = _this$state.title,
          tel = _this$state.tel,
          email = _this$state.email,
          comment = _this$state.comment,
          city = _this$state.city,
          mapSize = _this$state.mapSize;

      var center = map.getCenter();
      var lng = center.lng,
          lat = center.lat;

      console.log("sending email");
      console.log("mapSize");

      var calculatedSize = mapSize === "90vw" ? window.innerWidth : mapSize;
      console.log(calculatedSize);
      var imgUrl = client.getStaticURL("mapbox", "streets-v10", calculatedSize, calculatedSize, {
        longitude: lng,
        latitude: lat,
        zoom: map.getZoom(),
        retina: true
      });

      console.log("imgUrl");
      console.log(imgUrl);
      // {token: "e2759110-b5d3-4ff5-a153-4e6e965f231e"}, steph {token:
      // "fbae29bc-c70f-4a1e-87c6-f7abe58dcf9f"}, mat
      Email.sendWithAttachment("stephane@kinjo.fr", "stephane@kinjo.fr", "Demande de carte Kinjo " + title, "\n            || La carte || \n                        \n             " + imgUrl + "\n             \n             || Parametres ||\n             \n             Latitude: " + lng + "\n             Longitude: " + lat + "\n             Zoom: " + map.getZoom() + "\n             \n             || Formulaire ||\n\n             Titre carte: " + title + "\n             \n             Nom: " + nom + "          \n             Tel: " + tel + "\n             Email: " + email + "\n             Commentaire: " + comment + "\n            ", {
        token: "e2759110-b5d3-4ff5-a153-4e6e965f231e"
      });
    }, _this.updateSearch = function (event) {
      console.log("update search");
      var searchInput = event.target.value;
      console.log(searchInput);
      _this.setState(function () {
        return { inputSearch: searchInput };
      });
    }, _this.centerMap = function () {
      client.geocodeForward(_this.state.inputSearch, function (err, data, res) {
        var firstResult = data.features[0];
        console.log(firstResult);
        if (firstResult) {
          _this.setState(function () {
            return { city: firstResult.place_name, center: firstResult.center };
          });
        }
      });
      _this.showForm();
    }, _this.handleNext = function () {
      _this.setState(function (state) {
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
    }, _this.handlePrev = function () {
      _this.setState(function (state) {
        if (state.stepIndex > 0) {
          return {
            stepIndex: state.stepIndex - 1
          };
        }
      });
    }, _this.checkForm = function () {
      var _this$state2 = _this.state,
          nom = _this$state2.nom,
          tel = _this$state2.tel,
          email = _this$state2.email,
          title = _this$state2.title,
          comment = _this$state2.comment;

      var isValid = schema.isValid({ email: email, tel: tel }).then(function (valid) {
        _this.setState({ isFormValid: valid });
      });
    }, _this.handleInputChange = function (event) {
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;

      _this.setState((0, _defineProperty3.default)({}, name, value));
      _this.checkForm();
    }, _this.componentDidMount = function () {
      _this.updateWindowDimensions();
      window.addEventListener("resize", _this.updateWindowDimensions);
    }, _this.componentWillUnmount = function () {
      window.removeEventListener("resize", _this.updateWindowDimensions);
    }, _this.updateWindowDimensions = function () {
      console.log("resize");
      console.log(window.innerWidth);
      _this.setState({
        mapSize: window.innerWidth - 15 >= 500 ? 500 : "90vw"
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          city = _state.city,
          center = _state.center,
          finished = _state.finished,
          stepIndex = _state.stepIndex,
          imgUrl = _state.imgUrl,
          mapSize = _state.mapSize,
          hideForm = _state.hideForm;

      var classes = this.props.classes;

      // console.log("render state", this.state);
      return _react2.default.createElement(_App2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, _react2.default.createElement("div", { style: { flexGrow: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, _react2.default.createElement(_Grid2.default, { container: true, gutter: 0, justify: "center", align: "center", __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, sm: 8, lg: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, sm: 12, lg: 9, style: { width: 575 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, _react2.default.createElement(_Paper2.default, {
        style: {
          marginTop: "2em",
          padding: "1em",
          fontSize: 15,
          textAlign: "justify",
          background: "#f5f5f5"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, "Zoomez et d\xE9placez vous directement sur la carte pour trouver le positionnement parfait de votre lieu favori.")), _react2.default.createElement("div", {
        id: "frame",
        style: {
          width: mapSize,
          height: mapSize
        },
        ref: function ref(_ref2) {
          return _this2.mapGrid = _ref2;
        },
        "data-jsx": 2839822428,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, _react2.default.createElement(Map, {
        center: center,
        getMapData: this.getMapData,
        mapSize: mapSize,
        showForm: this.showForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }))), _react2.default.createElement(_Grid2.default, {
        item: true,
        xs: 12,
        md: 4,
        style: {
          display: stepIndex == 0 ? "block" : "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, _react2.default.createElement(_Grid2.default, {
        item: true,
        xs: 12,
        md: 4,
        lg: 12,
        style: {
          display: "flex",
          justifyContent: "flex-end"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, _react2.default.createElement("div", { id: "price", "data-jsx": 2839822428,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, "150\u20AC")), _react2.default.createElement(_SearchCity2.default, {
        updateSearch: this.updateSearch,
        onTouchTap: this.centerMap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }), _react2.default.createElement(_SelectedCity2.default, {
        city: city,
        seeForm: this.handleNext,
        disabledRendu: hideForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      })), _react2.default.createElement(_Grid2.default, {
        item: true,
        xs: 12,
        md: 4,
        style: {
          display: stepIndex == 1 ? "block" : "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, _react2.default.createElement(_FormulaireRendu2.default, {
        isFormValid: this.state.isFormValid,
        handleInputChange: this.handleInputChange,
        submit: this.handleNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }), _react2.default.createElement("div", {
        style: {
          marginTop: 20,
          marginRight: 0
        },
        "data-jsx": 2839822428,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, _react2.default.createElement(_Button2.default, {
        raised: true,
        disabled: stepIndex === 0,
        onTouchTap: this.handlePrev,
        style: {
          marginRight: 12
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        }
      }, "Retour"))), _react2.default.createElement(_Grid2.default, {
        item: true,
        xs: 12,
        md: 4,
        style: {
          display: stepIndex == 2 ? "block" : "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, _react2.default.createElement(_EndMessage2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: 2839822428,
        css: "#frame[data-jsx=\"2839822428\"]{background-image:url(\"/static/wood1.jpg\");background-repeat:repeat-x;background-size:cover;padding:2vw;margin-top:3%;box-shadow:10px 10px 33px rgba(0,0,0,0.51)}#price[data-jsx=\"2839822428\"]{-webkit-transform:rotate(15deg);-ms-transform:rotate(15deg);-webkit-transform:rotate(15deg);-ms-transform:rotate(15deg);transform:rotate(15deg);margin-bottom:-15px;margin-left:-15px;font-size:20px;line-height:2.2;font-family:ProximaNova-Regular,sans-serif;font-weight:400;background:#000;background:rgba(0,0,0,0.5);padding:0.5em;text-align:center;color:#fff;width:50px;height:50px;border-radius:50%;z-index:1}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFaZSxBQUc2RCxBQVNWLGdDQUNKLFVBVEQsa0JBVUgsU0FURixzQkFDVixZQUNFLGNBQ2dDLDJCQU8xQixnQkFOdEIsSUFPb0Isa0JBQ0gsZUFDQyxnQkFDNEIsMkNBQzVCLGdCQUNBLGdCQUNjLDJCQUNoQixjQUNJLGtCQUNQLFdBQ0EsV0FDQyxZQUNNLGtCQUNSLFVBQ1oiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N3aW5ndnkvRG9jdW1lbnRzL0RFVi9raW5qbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuaW1wb3J0IGluamVjdFRhcEV2ZW50UGx1Z2luIGZyb20gXCJyZWFjdC10YXAtZXZlbnQtcGx1Z2luXCI7XHJcbmltcG9ydCB7IE11aVRoZW1lUHJvdmlkZXIsIGNyZWF0ZU11aVRoZW1lIH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5pbXBvcnQgY3JlYXRlUGFsZXR0ZSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJtYXRlcmlhbC11aS9Qcm9ncmVzc1wiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwibWF0ZXJpYWwtdWkvVG9vbGJhclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwibWF0ZXJpYWwtdWkvR3JpZFwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIm1hdGVyaWFsLXVpL0lucHV0L0lucHV0XCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJtYXRlcmlhbC11aS9EaXZpZGVyXCI7XHJcbmltcG9ydCBDYXJkLCB7XHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkTWVkaWEsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZEFjdGlvbnNcclxufSBmcm9tIFwibWF0ZXJpYWwtdWkvQ2FyZFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJtYXRlcmlhbC11aS9CdXR0b25cIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJtYXRlcmlhbC11aS9QYXBlclwiO1xyXG4vLyBpbXBvcnQgeyBncmVlbjQwMCB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9jb2xvcnMnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBjcmVhdGVTdHlsZVNoZWV0IH0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5cclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIm1hdGVyaWFsLXVpL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIm1hdGVyaWFsLXVpL1R5cG9ncmFwaHlcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwibWF0ZXJpYWwtdWkvQXBwQmFyXCI7XHJcblxyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdC1ncmlkLXN5c3RlbVwiO1xyXG5cclxuaW1wb3J0IE1hcGJveENsaWVudCBmcm9tIFwibWFwYm94XCI7XHJcbmltcG9ydCBTdGF0aWNNYXAgZnJvbSBcIm1hcGJveC9saWIvc2VydmljZXMvc3RhdGljXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBTZWFyY2hDaXR5IGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaENpdHlcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBcIjtcclxuaW1wb3J0IEZvcm11bGFpcmVSZW5kdSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtdWxhaXJlUmVuZHVcIjtcclxuaW1wb3J0IEVuZE1lc3NhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvRW5kTWVzc2FnZVwiO1xyXG5pbXBvcnQgU2VsZWN0ZWRDaXR5IGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdGVkQ2l0eVwiO1xyXG5pbXBvcnQgeXVwIGZyb20gXCJ5dXBcIjtcclxuXHJcbmNvbnN0IHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgLy8gbm9tOiB5dXAuc3RyaW5nKCksXHJcbiAgZW1haWw6IHl1cFxyXG4gICAgLnN0cmluZygpXHJcbiAgICAuZW1haWwoKVxyXG4gICAgLnJlcXVpcmVkKCksXHJcbiAgdGVsOiB5dXBcclxuICAgIC5zdHJpbmcoKVxyXG4gICAgLm1pbig5KVxyXG4gICAgLnJlcXVpcmVkKClcclxuICAvLyB0aXRsZTogeXVwLnN0cmluZygpLFxyXG4gIC8vIGNvbW1lbnQ6IHl1cC5zdHJpbmcoKVxyXG59KTtcclxuXHJcbmNvbnN0IE1hcCA9IGR5bmFtaWMoaW1wb3J0KFwiLi4vY29tcG9uZW50cy9NYXBcIiksIHtcclxuICBsb2FkaW5nOiAoKSA9PiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGlkPVwiZnJhbWVcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiYmxhY2tcIixcclxuICAgICAgICBoZWlnaHQ6IDUwMCxcclxuICAgICAgICB3aWR0aDogNTAwLFxyXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyMDB9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApLFxyXG4gIHNzcjogZmFsc2VcclxufSk7XHJcblxyXG5pZiAoIXByb2Nlc3MudGFwRXZlbnRJbmplY3RlZCkge1xyXG4gIGluamVjdFRhcEV2ZW50UGx1Z2luKCk7XHJcbiAgcHJvY2Vzcy50YXBFdmVudEluamVjdGVkID0gdHJ1ZTtcclxufVxyXG5jb25zdCBjbGllbnQgPSBuZXcgTWFwYm94Q2xpZW50KFxyXG4gIFwicGsuZXlKMUlqb2liR1ZuY21sdElpd2lZU0k2SW1OcU5URXpjeko1WmpGeGNuUXlkM0Z1T0hKdU4yUnVObXNpZlEuTVIzbEJ5THl3cWRhU0UxTWZYbFFtZ1wiXHJcbik7XHJcblxyXG5jb25zdCBpbmRleFN0eWxlID0gY3JlYXRlU3R5bGVTaGVldChcImluZGV4U3R5bGVcIiwgdGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIG1hcmdpblRvcDogMzBcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxyXG4gIH1cclxufSkpO1xyXG5cclxubGV0IG1hcFNpemUgPSBcIjUwMHB4XCI7XHJcbmNvbnN0IG1hcnNlaWxsZUNlbnRlciA9IFs1LjM3NjM5LCA0My4yOTY2N107XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNsaWRlclZhbHVlOiAwLjUsXHJcbiAgICBjaXR5OiBcIk1hcnNlaWxsZVwiLFxyXG4gICAgY2VudGVyOiBtYXJzZWlsbGVDZW50ZXIsXHJcbiAgICBkcmFnQ2VudGVyOiBudWxsLFxyXG4gICAgem9vbUxldmVsOiAxMS41LFxyXG4gICAgZmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgc3RlcEluZGV4OiAwLFxyXG4gICAgaW5wdXRTZWFyY2g6IFwiXCIsXHJcbiAgICBpbWdVcmw6IG51bGwsXHJcbiAgICBoaWRlRm9ybTogdHJ1ZSxcclxuICAgIC8vL2Zvcm1cclxuICAgIG5vbTogbnVsbCxcclxuICAgIGVtYWlsOiBudWxsLFxyXG4gICAgdGVsOiBudWxsLFxyXG4gICAgdGl0bGU6IG51bGwsXHJcbiAgICBjb21tZW50OiBudWxsXHJcbiAgfTtcclxuXHJcbiAgZ2V0TWFwRGF0YSA9IG1hcCA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiB7IG1hcDogbWFwIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHNob3dGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJzaG93IGZ1Y2tpbmcgZm9ybVwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7IGhpZGVGb3JtOiBmYWxzZSB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc2VuZEVtYWlsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBtYXAsIG5vbSwgdGl0bGUsIHRlbCwgZW1haWwsIGNvbW1lbnQsIGNpdHksIG1hcFNpemUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBjZW50ZXIgPSBtYXAuZ2V0Q2VudGVyKCk7XHJcbiAgICBjb25zdCB7IGxuZywgbGF0IH0gPSBjZW50ZXI7XHJcbiAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgZW1haWxcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1hcFNpemVcIik7XHJcblxyXG4gICAgbGV0IGNhbGN1bGF0ZWRTaXplID0gbWFwU2l6ZSA9PT0gXCI5MHZ3XCIgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IG1hcFNpemU7XHJcbiAgICBjb25zb2xlLmxvZyhjYWxjdWxhdGVkU2l6ZSk7XHJcbiAgICBjb25zdCBpbWdVcmwgPSBjbGllbnQuZ2V0U3RhdGljVVJMKFxyXG4gICAgICBcIm1hcGJveFwiLFxyXG4gICAgICBcInN0cmVldHMtdjEwXCIsXHJcbiAgICAgIGNhbGN1bGF0ZWRTaXplLFxyXG4gICAgICBjYWxjdWxhdGVkU2l6ZSxcclxuICAgICAge1xyXG4gICAgICAgIGxvbmdpdHVkZTogbG5nLFxyXG4gICAgICAgIGxhdGl0dWRlOiBsYXQsXHJcbiAgICAgICAgem9vbTogbWFwLmdldFpvb20oKSxcclxuICAgICAgICByZXRpbmE6IHRydWVcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImltZ1VybFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGltZ1VybCk7XHJcbiAgICAvLyB7dG9rZW46IFwiZTI3NTkxMTAtYjVkMy00ZmY1LWExNTMtNGU2ZTk2NWYyMzFlXCJ9LCBzdGVwaCB7dG9rZW46XHJcbiAgICAvLyBcImZiYWUyOWJjLWM3MGYtNGExZS04N2M2LWY3YWJlNThkY2Y5ZlwifSwgbWF0XHJcbiAgICBFbWFpbC5zZW5kV2l0aEF0dGFjaG1lbnQoXHJcbiAgICAgIFwic3RlcGhhbmVAa2luam8uZnJcIixcclxuICAgICAgXCJzdGVwaGFuZUBraW5qby5mclwiLFxyXG4gICAgICBgRGVtYW5kZSBkZSBjYXJ0ZSBLaW5qbyAke3RpdGxlfWAsXHJcbiAgICAgIGBcclxuICAgICAgICAgICAgfHwgTGEgY2FydGUgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgJHtpbWdVcmx9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIHx8IFBhcmFtZXRyZXMgfHxcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgTGF0aXR1ZGU6ICR7bG5nfVxyXG4gICAgICAgICAgICAgTG9uZ2l0dWRlOiAke2xhdH1cclxuICAgICAgICAgICAgIFpvb206ICR7bWFwLmdldFpvb20oKX1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfHwgRm9ybXVsYWlyZSB8fFxyXG5cclxuICAgICAgICAgICAgIFRpdHJlIGNhcnRlOiAke3RpdGxlfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBOb206ICR7bm9tfSAgICAgICAgICBcclxuICAgICAgICAgICAgIFRlbDogJHt0ZWx9XHJcbiAgICAgICAgICAgICBFbWFpbDogJHtlbWFpbH1cclxuICAgICAgICAgICAgIENvbW1lbnRhaXJlOiAke2NvbW1lbnR9XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICAgIHtcclxuICAgICAgICB0b2tlbjogXCJlMjc1OTExMC1iNWQzLTRmZjUtYTE1My00ZTZlOTY1ZjIzMWVcIlxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZVNlYXJjaCA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlIHNlYXJjaFwiKTtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coc2VhcmNoSW5wdXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHsgaW5wdXRTZWFyY2g6IHNlYXJjaElucHV0IH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjZW50ZXJNYXAgPSAoKSA9PiB7XHJcbiAgICBjbGllbnQuZ2VvY29kZUZvcndhcmQodGhpcy5zdGF0ZS5pbnB1dFNlYXJjaCwgKGVyciwgZGF0YSwgcmVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpcnN0UmVzdWx0ID0gZGF0YS5mZWF0dXJlc1swXTtcclxuICAgICAgY29uc29sZS5sb2coZmlyc3RSZXN1bHQpO1xyXG4gICAgICBpZiAoZmlyc3RSZXN1bHQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgY2l0eTogZmlyc3RSZXN1bHQucGxhY2VfbmFtZSwgY2VudGVyOiBmaXJzdFJlc3VsdC5jZW50ZXIgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNob3dGb3JtKCk7XHJcbiAgfTtcclxuICBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbihzdGF0ZSkge1xyXG4gICAgICBpZiAoc3RhdGUuc3RlcEluZGV4ID09PSAxKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jaGVja0Zvcm0oKTtcclxuICAgICAgICBpZiAoc3RhdGUuaXNGb3JtVmFsaWQpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2VuZGluZyBlbWFpbCBvciBub3RcIik7XHJcbiAgICAgICAgICB0aGlzLnNlbmRFbWFpbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RlcEluZGV4OiBzdGF0ZS5zdGVwSW5kZXggKyAxLFxyXG4gICAgICAgIGZpbmlzaGVkOiBzdGF0ZS5zdGVwSW5kZXggPj0gMVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBoYW5kbGVQcmV2ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbihzdGF0ZSkge1xyXG4gICAgICBpZiAoc3RhdGUuc3RlcEluZGV4ID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBzdGVwSW5kZXg6IHN0YXRlLnN0ZXBJbmRleCAtIDFcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNoZWNrRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbm9tLCB0ZWwsIGVtYWlsLCB0aXRsZSwgY29tbWVudCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSBzY2hlbWEuaXNWYWxpZCh7IGVtYWlsLCB0ZWwgfSkudGhlbih2YWxpZCA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Zvcm1WYWxpZDogdmFsaWQgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICB0aGlzLmNoZWNrRm9ybSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ID0gKCkgPT4ge1xyXG4gICAgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcclxuICB9O1xyXG4gIHVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc2l6ZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtYXBTaXplOiB3aW5kb3cuaW5uZXJXaWR0aCAtIDE1ID49IDUwMCA/IDUwMCA6IFwiOTB2d1wiXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNpdHksXHJcbiAgICAgIGNlbnRlcixcclxuICAgICAgZmluaXNoZWQsXHJcbiAgICAgIHN0ZXBJbmRleCxcclxuICAgICAgaW1nVXJsLFxyXG4gICAgICBtYXBTaXplLFxyXG4gICAgICBoaWRlRm9ybVxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHRoaXMucHJvcHMuY2xhc3NlcztcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInJlbmRlciBzdGF0ZVwiLCB0aGlzLnN0YXRlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBcHA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBndXR0ZXI9ezB9IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICB7LyogPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaGVhZGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNTBcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgMTUw4oKsXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezh9IGxnPXs1fT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezEyfSBsZz17OX0gc3R5bGU9e3sgd2lkdGg6IDU3NSB9fT5cclxuICAgICAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjFlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2Y1ZjVmNVwiXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFpvb21leiBldCBkw6lwbGFjZXogdm91cyBkaXJlY3RlbWVudCBzdXIgbGEgY2FydGUgcG91ciB0cm91dmVyXHJcbiAgICAgICAgICAgICAgICAgIGxlIHBvc2l0aW9ubmVtZW50IHBhcmZhaXQgZGUgdm90cmUgbGlldSBmYXZvcmkuXHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBpZD1cImZyYW1lXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYXBTaXplLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IG1hcFNpemVcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiAodGhpcy5tYXBHcmlkID0gcmVmKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWFwXHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlcj17Y2VudGVyfVxyXG4gICAgICAgICAgICAgICAgICBnZXRNYXBEYXRhPXt0aGlzLmdldE1hcERhdGF9XHJcbiAgICAgICAgICAgICAgICAgIG1hcFNpemU9e21hcFNpemV9XHJcbiAgICAgICAgICAgICAgICAgIHNob3dGb3JtPXt0aGlzLnNob3dGb3JtfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICAgIG1kPXs0fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBzdGVwSW5kZXggPT0gMCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgICAgICBtZD17NH1cclxuICAgICAgICAgICAgICAgIGxnPXsxMn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcmljZVwiPjE1MOKCrDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8U2VhcmNoQ2l0eVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2VhcmNoPXt0aGlzLnVwZGF0ZVNlYXJjaH1cclxuICAgICAgICAgICAgICAgIG9uVG91Y2hUYXA9e3RoaXMuY2VudGVyTWFwfVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxTZWxlY3RlZENpdHlcclxuICAgICAgICAgICAgICAgIGNpdHk9e2NpdHl9XHJcbiAgICAgICAgICAgICAgICBzZWVGb3JtPXt0aGlzLmhhbmRsZU5leHR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFJlbmR1PXtoaWRlRm9ybX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICBtZD17NH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogc3RlcEluZGV4ID09IDEgPyBcImJsb2NrXCIgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Rm9ybXVsYWlyZVJlbmR1XHJcbiAgICAgICAgICAgICAgICBpc0Zvcm1WYWxpZD17dGhpcy5zdGF0ZS5pc0Zvcm1WYWxpZH1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc3VibWl0PXt0aGlzLmhhbmRsZU5leHR9XHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMCxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICByYWlzZWRcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N0ZXBJbmRleCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5oYW5kbGVQcmV2fVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxMlxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZXRvdXJcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgICBtZD17NH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogc3RlcEluZGV4ID09IDIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RW5kTWVzc2FnZSAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAjZnJhbWUge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL3dvb2QxLmpwZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAydnc7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMzNweCByZ2JhKDAsIDAsIDAsIDAuNTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNwcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuMjtcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFByb3hpbWFOb3ZhLVJlZ3VsYXIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQXBwPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuSW5kZXgucHJvcFR5cGVzID0ge1xyXG4gIG1hcFNpemU6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbkluZGV4LmRlZmF1bHRQcm9wcyA9IHtcclxuICBtYXBTaXplOiBtYXBTaXplXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=pages/index.js?entry */"
      }), _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }))));
    }
  }]);

  return Index;
}(_react.Component);

Index.propTypes = {
  mapSize: _propTypes2.default.string
};

Index.defaultProps = {
  mapSize: mapSize
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiaW5qZWN0VGFwRXZlbnRQbHVnaW4iLCJNdWlUaGVtZVByb3ZpZGVyIiwiY3JlYXRlTXVpVGhlbWUiLCJjcmVhdGVQYWxldHRlIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIlRvb2xiYXIiLCJHcmlkIiwiSW5wdXQiLCJEaXZpZGVyIiwiQ2FyZCIsIkNhcmRIZWFkZXIiLCJDYXJkTWVkaWEiLCJDYXJkQ29udGVudCIsIkNhcmRBY3Rpb25zIiwiQnV0dG9uIiwiUGFwZXIiLCJ3aXRoU3R5bGVzIiwiY3JlYXRlU3R5bGVTaGVldCIsIkljb25CdXR0b24iLCJUeXBvZ3JhcGh5IiwiQXBwQmFyIiwiZHluYW1pYyIsIkhlYWQiLCJDb250YWluZXIiLCJDb2wiLCJSb3ciLCJNYXBib3hDbGllbnQiLCJTdGF0aWNNYXAiLCJGb290ZXIiLCJTZWFyY2hDaXR5IiwiQXBwIiwiRm9ybXVsYWlyZVJlbmR1IiwiRW5kTWVzc2FnZSIsIlNlbGVjdGVkQ2l0eSIsInl1cCIsInNjaGVtYSIsIm9iamVjdCIsInNoYXBlIiwiZW1haWwiLCJzdHJpbmciLCJyZXF1aXJlZCIsInRlbCIsIm1pbiIsIk1hcCIsImxvYWRpbmciLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJzc3IiLCJwcm9jZXNzIiwidGFwRXZlbnRJbmplY3RlZCIsImNsaWVudCIsImluZGV4U3R5bGUiLCJyb290IiwiZmxleEdyb3ciLCJtYXJnaW5Ub3AiLCJwYXBlciIsImNvbG9yIiwidGhlbWUiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsIm1hcFNpemUiLCJtYXJzZWlsbGVDZW50ZXIiLCJJbmRleCIsInN0YXRlIiwic2xpZGVyVmFsdWUiLCJjaXR5IiwiY2VudGVyIiwiZHJhZ0NlbnRlciIsInpvb21MZXZlbCIsImZpbmlzaGVkIiwic3RlcEluZGV4IiwiaW5wdXRTZWFyY2giLCJpbWdVcmwiLCJoaWRlRm9ybSIsIm5vbSIsInRpdGxlIiwiY29tbWVudCIsImdldE1hcERhdGEiLCJzZXRTdGF0ZSIsIm1hcCIsInNob3dGb3JtIiwiY29uc29sZSIsImxvZyIsInNlbmRFbWFpbCIsImdldENlbnRlciIsImxuZyIsImxhdCIsImNhbGN1bGF0ZWRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImdldFN0YXRpY1VSTCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiem9vbSIsImdldFpvb20iLCJyZXRpbmEiLCJFbWFpbCIsInNlbmRXaXRoQXR0YWNobWVudCIsInRva2VuIiwidXBkYXRlU2VhcmNoIiwic2VhcmNoSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2VudGVyTWFwIiwiZ2VvY29kZUZvcndhcmQiLCJlcnIiLCJkYXRhIiwicmVzIiwiZmlyc3RSZXN1bHQiLCJmZWF0dXJlcyIsInBsYWNlX25hbWUiLCJoYW5kbGVOZXh0IiwiaXNGb3JtVmFsaWQiLCJoYW5kbGVQcmV2IiwiY2hlY2tGb3JtIiwiaXNWYWxpZCIsInRoZW4iLCJ2YWxpZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwidHlwZSIsImNoZWNrZWQiLCJuYW1lIiwiY29tcG9uZW50RGlkTW91bnQiLCJ1cGRhdGVXaW5kb3dEaW1lbnNpb25zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzZXMiLCJwcm9wcyIsInBhZGRpbmciLCJmb250U2l6ZSIsIm1hcEdyaWQiLCJyZWYiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5SaWdodCIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQVMsQUFBa0I7O0FBQzNCLEFBQU87Ozs7QUFD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RSxBQU1BO0FBTkE7QUFDRSwwQkFLRixjQUFBOztxQkFDUyxBQUNNLEFBQ1g7dUJBSEosQUFDUyxBQUVRO0FBRlIsQUFDTDtvQkFGSjs7b0JBQUE7c0JBQUEsQUFNRTtBQU5GO0FBQ0UseUJBS0EsQUFBQztnQkFBRCxBQUVFO2tCQUFVLGNBRlosQUFFMEIsQUFDeEI7b0JBQVksS0FIZCxBQUdtQixBQUNqQjs7dUJBSkYsQUFJUyxBQUNRO0FBRFIsQUFDTDs7b0JBTEo7c0JBQUE7QUFBQTtBQUNFLFNBM0dSLEFBc0ZFLEFBY0UsQUFNRSxBQVlKLDZCQUFBLEFBQUM7Y0FBRCxBQUVFO1lBRkYsQUFFTSxBQUNKO1lBSEYsQUFHTSxBQUNKOzttQkFDVyxhQUFBLEFBQWEsSUFBYixBQUFpQixVQUw5QixBQUlTLEFBQytCO0FBRC9CLEFBQ0w7O29CQUxKO3NCQUFBLEFBUUU7QUFSRjtBQUNFLHlCQU9BLEFBQUM7O29CQUFEO3NCQTlISixBQXNIRSxBQVFFO0FBQUE7QUFBQTtpQkE5SEo7YUFBQSxBQWtLRTtBQWxLRiwwQkFrS0UsQUFBQzs7b0JBQUQ7c0JBcktSLEFBQ0UsQUFDRSxBQUNFLEFBa0tFLEFBS1Q7QUFMUztBQUFBOzs7OztBLEFBelZROztBQWdXcEIsTUFBQSxBQUFNO1dBQ0ssb0JBRFgsQUFBa0IsQUFDRztBQURILEFBQ2hCOztBQUdGLE1BQUEsQUFBTTtXQUFOLEFBQXFCLEFBQ1YsQUFHWDtBQUpxQixBQUNuQjs7a0JBR0YsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3dpbmd2eS9Eb2N1bWVudHMvREVWL2tpbmpvIn0=