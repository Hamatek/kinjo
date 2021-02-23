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

var _jsxFileName = "/Users/swingvy/Documents/DEV/kinjo/pages/_document.js?entry";


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
      return _react2.default.createElement("html", { lang: "fr", __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Editeur de Carte Kinjo"), _react2.default.createElement("meta", { charSet: "utf-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement("meta", {
        name: "viewport",
        content: "user-scalable=0, initial-scale=1, maximum-scale=1, " + "minimum-scale=1, width=device-width, height=device-height, user-scalable=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement("meta", {
        name: "theme-color",
        content: styleContext.theme.palette.primary[500],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement("script", { src: "https://smtpjs.com/smtp.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement("link", {
        href: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.38.0/mapbox-gl.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "\n      body { \n      //  background:url(/static/old_moon.png);\n      background-color: #fff;\n      }\n      .mapboxgl-ctrl-compass {\n                        display: none !important;\n                  }\n    ")), _react2.default.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      })));
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
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiZ2V0RGVmYXVsdENvbnRleHQiLCJzZXREZWZhdWx0Q29udGV4dCIsIk15RG9jdW1lbnQiLCJzdHlsZUNvbnRleHQiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiY3R4IiwicGFnZSIsInJlbmRlclBhZ2UiLCJzdHlsZXMiLCJfX2h0bWwiLCJzdHlsZU1hbmFnZXIiLCJzaGVldHNUb1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUMvQixBQUNFLEFBQ0E7Ozs7Ozs7SSxBQUdtQjs7Ozs7Ozs7Ozs7NkJBa0JWLEFBQ1A7VUFBTSxlQUFOLEFBQXFCLEFBQ3JCOzZCQUNFLGNBQUEsVUFBTSxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLG1FQUFNLFNBQU4sQUFBYztvQkFBZDtzQkFGRixBQUVFLEFBRUE7QUFGQTs7Y0FFQSxBQUNPLEFBQ0w7aUJBQ0Usd0RBSEosQUFJSTs7b0JBSko7c0JBSkYsQUFJRSxBQVFBO0FBUkE7QUFDRTtjQU9GLEFBQ08sQUFDTDtpQkFBUyxhQUFBLEFBQWEsTUFBYixBQUFtQixRQUFuQixBQUEyQixRQUZ0QyxBQUVXLEFBQW1DOztvQkFGOUM7c0JBWkYsQUFZRSxBQUlBO0FBSkE7QUFDRTthQUdGLEFBQ00sQUFDSjtjQUZGLEFBRU87O29CQUZQO3NCQWhCRixBQWdCRSxBQUtBO0FBTEE7QUFDRSxvREFJTSxLQUFSLEFBQVk7b0JBQVo7c0JBckJGLEFBcUJFLEFBQ0E7QUFEQTs7Y0FDQSxBQUNPLEFBQ0w7YUFGRixBQUVNOztvQkFGTjtzQkF0QkYsQUFzQkUsQUFJQTtBQUpBO0FBQ0UsMEJBR0YsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBM0JKLEFBQ0UsQUEwQkUsQUFVRiw0T0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQXhDTixBQUNFLEFBcUNFLEFBRUUsQUFJUDtBQUpPO0FBQUE7Ozs7OzJHLEFBM0RxQjs7Ozs7bUJBQzNCO0FBQ007QSx1QkFBTyxJLEFBQUEsQUFBSSxBQUNYO0EsK0IsQUFBZTs0RSxBQUVoQjs7d0JBRUQsQUFDSyxBQUNIOzs4QkFDVSxhQUFBLEFBQWEsYUFIekIsQUFFMkIsQUFDZixBQUEwQjtBQURYLEFBQ3ZCOztnQ0FISjtrQ0FBQTtBQUFBO0FBQ0UsbUJBREY7QUFERjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBUGtDOztrQixBQUFuQiIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N3aW5ndnkvRG9jdW1lbnRzL0RFVi9raW5qbyJ9