'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageFlip = function ImageFlip(_ref) {
    var uri = _ref.uri,
        altText = _ref.altText,
        isVisible = _ref.isVisible;

    return _react2.default.createElement('img', { width: '100%', src: uri, alt: altText, style: { display: '' + (isVisible ? 'block' : 'none') } });
};

exports.default = ImageFlip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2luZ2xlSW1hZ2UuanMiXSwibmFtZXMiOlsiSW1hZ2VGbGlwIiwidXJpIiwiYWx0VGV4dCIsImlzVmlzaWJsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLElBQU0sWUFBWSxTQUFaLEFBQVksZ0JBQWlDO1FBQTlCLEFBQThCLFdBQTlCLEFBQThCO1FBQXpCLEFBQXlCLGVBQXpCLEFBQXlCO1FBQWhCLEFBQWdCLGlCQUFoQixBQUFnQixBQUMvQzs7V0FBTyx1Q0FBSyxPQUFNLEFBQVgsUUFBa0IsS0FBSyxBQUF2QixLQUE0QixLQUFLLEFBQWpDLFNBQTBDLE9BQU8sRUFBRSxlQUFZLFlBQVksQUFBWixVQUFzQixBQUFsQyxBQUFGLEFBQWpELEFBQVAsQUFDSDtBQUZELEFBSUE7O2tCQUFlLEFBQWYiLCJmaWxlIjoiU2luZ2xlSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3N3aW5ndnkvRG9jdW1lbnRzL0RFVi9raW5qbyJ9