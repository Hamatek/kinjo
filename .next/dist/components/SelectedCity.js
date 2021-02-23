"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Paper = require("material-ui/Paper");

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = require("material-ui/styles");

var _Typography = require("material-ui/Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = require("material-ui/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Divider = require("material-ui/Divider");

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectedCity = function SelectedCity(_ref) {
  var city = _ref.city,
      disabledRendu = _ref.disabledRendu,
      seeForm = _ref.seeForm;

  return _react2.default.createElement(_Paper2.default, { style: { marginTop: "2em", padding: "1em", background: "#f5f5f5" } }, _react2.default.createElement(_Typography2.default, { type: "headline" }, city), _react2.default.createElement(_Divider2.default, { style: { margin: "1em" } }), _react2.default.createElement(_Typography2.default, { type: "subheading", color: "secondary", align: "center" }, "Remplissez ce formulaire afin de recevoir sans engagement la carte finalis\xE9e de votre lieu favori avant la d\xE9coupe laser"), _react2.default.createElement(_Button2.default, {
    raised: true,
    color: "accent",
    style: {
      width: "100%",
      marginTop: "1em",
      backgroundColor: "#4ada99",
      color: "white"
    },
    disabled: disabledRendu,
    onTouchTap: seeForm
  }, "Demande de rendu"));
};

exports.default = SelectedCity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VsZWN0ZWRDaXR5LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFwZXIiLCJ3aXRoU3R5bGVzIiwiY3JlYXRlU3R5bGVTaGVldCIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJEaXZpZGVyIiwiU2VsZWN0ZWRDaXR5IiwiY2l0eSIsImRpc2FibGVkUmVuZHUiLCJzZWVGb3JtIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJtYXJnaW4iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBWTs7QUFDckIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7QUFDUCxJQUFNLGVBQWUsU0FBZixBQUFlLG1CQUFzQztNQUFuQyxBQUFtQyxZQUFuQyxBQUFtQztNQUE3QixBQUE2QixxQkFBN0IsQUFBNkI7TUFBZCxBQUFjLGVBQWQsQUFBYyxBQUN6RDs7U0FDRSxnQkFBQSxBQUFDLGlDQUFNLE9BQU8sRUFBRSxXQUFGLEFBQWEsT0FBTyxTQUFwQixBQUE2QixPQUFPLFlBQWxELEFBQWMsQUFBZ0QsQUFDNUQsK0JBQUEsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCLEFBQVksY0FEL0IsQUFDRSxBQUNBLHVCQUFBLEFBQUMsbUNBQVEsT0FBTyxFQUFFLFFBRnBCLEFBRUUsQUFBZ0IsQUFBVSxBQUMxQiw0QkFBQSxBQUFDLHNDQUFXLE1BQVosQUFBaUIsY0FBYSxPQUE5QixBQUFvQyxhQUFZLE9BQWhELEFBQXNELFlBSHhELEFBR0UsQUFJQSxtSkFBQSxBQUFDO1lBQUQsQUFFRTtXQUZGLEFBRVEsQUFDTjs7YUFBTyxBQUNFLEFBQ1A7aUJBRkssQUFFTSxBQUNYO3VCQUhLLEFBR1ksQUFDakI7YUFQSixBQUdTLEFBSUUsQUFFVDtBQU5PLEFBQ0w7Y0FKSixBQVNZLEFBQ1Y7Z0JBVkYsQUFVYztBQVRaLEtBVE4sQUFDRSxBQU9FLEFBZ0JMO0FBekJELEFBMkJBOztrQkFBQSxBQUFlIiwiZmlsZSI6IlNlbGVjdGVkQ2l0eS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3dpbmd2eS9Eb2N1bWVudHMvREVWL2tpbmpvIn0=