'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaultContext = setDefaultContext;
exports.getDefaultContext = getDefaultContext;

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _palette = require('material-ui/styles/palette');

var _palette2 = _interopRequireDefault(_palette);

var _theme = require('material-ui/styles/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { purple400, green400 } from 'material-ui/styles/colors'

var createDefaultContext = function createDefaultContext() {
  return _MuiThemeProvider2.default.createDefaultContext({
    theme: (0, _theme2.default)({
      overrides: {
        MuiTextField: {
          // Name of the styleSheet
          root: {
            // Name of the rule
            margin: '1em'
          }
        }
      }
    })
  });
};

// Singleton hack as there is no way to pass variables from _document.js to pages yet.
var context = null;

function setDefaultContext() {
  context = createDefaultContext();
}

function getDefaultContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return context;
  }

  // Reuse store on the client-side
  if (!context) {
    context = createDefaultContext();
  }

  return context;
}

exports.default = createDefaultContext;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy9jcmVhdGVEZWZhdWx0Q29udGV4dC5qcyJdLCJuYW1lcyI6WyJNdWlUaGVtZVByb3ZpZGVyIiwiY3JlYXRlUGFsZXR0ZSIsImNyZWF0ZU11aVRoZW1lIiwiY3JlYXRlRGVmYXVsdENvbnRleHQiLCJ0aGVtZSIsIm92ZXJyaWRlcyIsIk11aVRleHRGaWVsZCIsInJvb3QiLCJtYXJnaW4iLCJjb250ZXh0Iiwic2V0RGVmYXVsdENvbnRleHQiLCJnZXREZWZhdWx0Q29udGV4dCIsInByb2Nlc3MiLCJicm93c2VyIl0sIm1hcHBpbmdzIjoiOzs7OztRQXdCTyxBQUFTO1FBSVQsQUFBUzs7QUE1QmhCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7O0FBQ1A7O0FBRUEsSUFBTSx1QkFBdUIsU0FBdkIsQUFBdUIsdUJBQUE7b0NBRTNCLEFBQWlCOzs7O0FBS1Q7O0FBRUU7b0JBVGlCLEFBRTNCLEFBQXNDLEFBQzdCLEFBQWUsQUFDVCxBQUNLLEFBRU4sQUFFSTtBQUZKLEFBQ0o7QUFIVSxBQUNaO0FBRk8sQUFDVDtBQUZrQixBQUNwQixLQURLO0FBRDZCLEFBQ3BDLEdBREY7QUFGRjs7QUFnQkE7QUFDQSxJQUFJLFVBQUosQUFBYyxBQUVkOztBQUFPLDZCQUE2QixBQUNsQztZQUFBLEFBQVUsQUFDWDtBQUVEOztBQUFPLDZCQUE2QixBQUNsQztBQUNBO0FBQ0E7TUFBSSxDQUFDLFFBQUwsQUFBYSxTQUFTLEFBQ3BCO1dBQUEsQUFBTyxBQUNSO0FBRUQ7O0FBQ0E7TUFBSSxDQUFKLEFBQUssU0FBUyxBQUNaO2NBQUEsQUFBVSxBQUNYO0FBRUQ7O1NBQUEsQUFBTyxBQUNSO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoiY3JlYXRlRGVmYXVsdENvbnRleHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N3aW5ndnkvRG9jdW1lbnRzL0RFVi9raW5qbyJ9