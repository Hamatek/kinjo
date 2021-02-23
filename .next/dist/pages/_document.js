"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("next/node_modules/babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require("next/node_modules/babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require("next/node_modules/babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _document = require("next/dist/server/document.js");

var _document2 = _interopRequireDefault(_document);

var _createDefaultContext = require("../styles/createDefaultContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: "render",
    value: function render() {
      var styleContext = (0, _createDefaultContext.getDefaultContext)();
      return _react2.default.createElement("html", { lang: "fr" }, _react2.default.createElement(_document.Head, null, _react2.default.createElement("title", null, "Editeur de Carte Kinjo"), _react2.default.createElement("meta", { charSet: "utf-8" }), _react2.default.createElement("meta", {
        name: "viewport",
        content: "user-scalable=0, initial-scale=1, maximum-scale=1, " + "minimum-scale=1, width=device-width, height=device-height, user-scalable=no"
      }), _react2.default.createElement("meta", {
        name: "theme-color",
        content: styleContext.theme.palette.primary[500]
      }), _react2.default.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      }), _react2.default.createElement("script", { src: "https://smtpjs.com/smtp.js" }), _react2.default.createElement("link", {
        href: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css",
        rel: "stylesheet"
      }), _react2.default.createElement("style", null, "\n      body { \n      //  background:url(/static/old_moon.png);\n      background-color: #fff;\n      }\n      .mapboxgl-ctrl-compass {\n                        display: none !important;\n                  }\n    ")), _react2.default.createElement("body", null, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        var page, styleContext;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _createDefaultContext.setDefaultContext)();
                page = ctx.renderPage();
                styleContext = (0, _createDefaultContext.getDefaultContext)();
                return _context.abrupt("return", (0, _extends3.default)({}, page, {
                  styles: _react2.default.createElement("style", {
                    id: "jss-server-side",
                    dangerouslySetInnerHTML: {
                      __html: styleContext.styleManager.sheetsToString()
                    }
                  })
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiZ2V0RGVmYXVsdENvbnRleHQiLCJzZXREZWZhdWx0Q29udGV4dCIsIk15RG9jdW1lbnQiLCJzdHlsZUNvbnRleHQiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiY3R4IiwicGFnZSIsInJlbmRlclBhZ2UiLCJzdHlsZXMiLCJfX2h0bWwiLCJzdHlsZU1hbmFnZXIiLCJzaGVldHNUb1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUMvQixBQUNFLEFBQ0E7Ozs7SSxBQUdtQjs7Ozs7Ozs7Ozs7NkJBa0JWLEFBQ1A7VUFBTSxlQUFOLEFBQXFCLEFBQ3JCO2FBQ0UsZ0JBQUEsY0FBQSxVQUFNLE1BQU4sQUFBVyxBQUNULHdCQUFBLEFBQUMsOEJBQ0Msc0JBQUEsY0FBQSxTQUFBLE1BREYsQUFDRSxBQUNBLG1FQUFNLFNBRlIsQUFFRSxBQUFjLEFBRWQ7Y0FBQSxBQUNPLEFBQ0w7aUJBQ0Usd0RBUE4sQUFJRSxBQUlJLEFBSUo7QUFQRTtjQU9GLEFBQ08sQUFDTDtpQkFBUyxhQUFBLEFBQWEsTUFBYixBQUFtQixRQUFuQixBQUEyQixRQWR4QyxBQVlFLEFBRVcsQUFBbUMsQUFFOUM7QUFIRTthQUdGLEFBQ00sQUFDSjtjQWxCSixBQWdCRSxBQUVPLEFBR1A7QUFKRSxvREFJTSxLQXJCVixBQXFCRSxBQUFZLEFBQ1o7Y0FBQSxBQUNPLEFBQ0w7YUF4QkosQUFzQkUsQUFFTSxBQUVOO0FBSEUsMEJBR0YsY0FBQSxTQUFBLE1BM0JKLEFBQ0UsQUEwQkUsQUFVRiw0T0FBQSxjQUFBLFFBQ0Usc0JBQUEsQUFBQyw4QkFESCxBQUVFLHVCQUFBLEFBQUMsb0NBeENQLEFBQ0UsQUFxQ0UsQUFNTDs7Ozs7MkcsQUEvRDRCOzs7OzttQkFDM0I7QUFDTTtBLHVCQUFPLElBQ1AsQSxBQURPLEFBQUk7QSwrQixBQUNJOzRFLEFBRWhCOzt3QkFFRCxBQUNLLEFBQ0g7OzhCQUNVLGFBQUEsQUFBYSxhQUh6QixBQUUyQixBQUNmLEFBQTBCO0FBRFgsQUFDdkI7QUFGRixtQkFERjtBQURGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFQa0M7O2tCLEFBQW5CIiwiZmlsZSI6Il9kb2N1bWVudC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3dpbmd2eS9Eb2N1bWVudHMvREVWL2tpbmpvIn0=