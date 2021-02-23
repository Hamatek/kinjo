'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _createDefaultContext = require('../styles/createDefaultContext');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = (0, _styles.createStyleSheet)('App', function (theme) {
  return {
    '@global': {
      html: {
        background: theme.palette.background.default,
        fontFamily: theme.typography.fontFamily,
        WebkitFontSmoothing: 'antialiased', // Antialiasing.
        MozOsxFontSmoothing: 'grayscale' // Antialiasing.
      },
      body: {
        margin: 0
      },
      a: {
        color: 'inherit'
      }
    }
  };
});

var AppWrapper = function AppWrapper(props) {
  return props.children;
};

AppWrapper = (0, _styles.withStyles)(styleSheet)(AppWrapper);

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _getDefaultContext = (0, _createDefaultContext.getDefaultContext)(),
          styleManager = _getDefaultContext.styleManager,
          theme = _getDefaultContext.theme;

      return _react2.default.createElement(_styles.MuiThemeProvider, { styleManager: styleManager, theme: theme }, _react2.default.createElement(AppWrapper, null, this.props.children));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwid2l0aFN0eWxlcyIsImNyZWF0ZVN0eWxlU2hlZXQiLCJNdWlUaGVtZVByb3ZpZGVyIiwiZ2V0RGVmYXVsdENvbnRleHQiLCJzdHlsZVNoZWV0IiwiaHRtbCIsImJhY2tncm91bmQiLCJ0aGVtZSIsInBhbGV0dGUiLCJkZWZhdWx0IiwiZm9udEZhbWlseSIsInR5cG9ncmFwaHkiLCJXZWJraXRGb250U21vb3RoaW5nIiwiTW96T3N4Rm9udFNtb290aGluZyIsImJvZHkiLCJtYXJnaW4iLCJhIiwiY29sb3IiLCJBcHBXcmFwcGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsIkFwcCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInN0eWxlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQVMsQUFBWSxBQUFrQjs7QUFDdkMsQUFBUzs7OztBQUVULElBQU0sMkNBQWEsQUFBaUIsT0FBTyxpQkFBQTs7OztvQkFHekIsTUFBQSxBQUFNLFFBQU4sQUFBYyxXQUR0QixBQUNpQyxBQUNyQztvQkFBWSxNQUFBLEFBQU0sV0FGZCxBQUV5QixBQUM3Qjs2QkFISSxBQUdpQixlQUFlLEFBQ3BDOzZCQUpJLEFBSWlCLFlBTGQsQUFDSCxBQUk2QixBQUVuQztBQU5NLEFBQ0o7O2dCQUZPLEFBT0gsQUFDSSxBQUVWO0FBSE0sQUFDSjs7ZUFUcUMsQUFBVSxBQUN4QyxBQVVOLEFBQ007QUFETixBQUNEO0FBWE8sQUFDVDtBQUZpRCxBQUNuRDtBQURGLEFBQW1CLENBQUE7O0FBaUJuQixJQUFJLGFBQWEsMkJBQUE7U0FBUyxNQUFULEFBQWU7QUFBaEM7O0FBRUEsYUFBYSx3QkFBQSxBQUFXLFlBQXhCLEFBQWEsQUFBdUI7O0ksQUFFOUI7Ozs7Ozs7Ozs7O3dDQUNpQixBQUNuQjtBQUNBO1VBQU0sWUFBWSxTQUFBLEFBQVMsY0FBM0IsQUFBa0IsQUFBdUIsQUFDekM7VUFBSSxhQUFhLFVBQWpCLEFBQTJCLFlBQVksQUFDckM7a0JBQUEsQUFBVSxXQUFWLEFBQXFCLFlBQXJCLEFBQWlDLEFBQ2xDO0FBQ0Y7Ozs7NkJBRVM7K0JBQUEsQUFDd0I7VUFEeEIsQUFDQSxrQ0FEQSxBQUNBO1VBREEsQUFDYywyQkFEZCxBQUNjLEFBQ3RCOzthQUNFLGdCQUFBLEFBQUMsMENBQWlCLGNBQWxCLEFBQWdDLGNBQWMsT0FBOUMsQUFBcUQsQUFDbkQseUJBQUMsY0FBRCxZQUNHLFdBQUEsQUFBSyxNQUhaLEFBQ0UsQUFDRSxBQUNjLEFBSW5COzs7OztBQU9ILEEsQUF6QmtCOztrQkF5QmxCLEFBQWUiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zd2luZ3Z5L0RvY3VtZW50cy9ERVYva2luam8ifQ==