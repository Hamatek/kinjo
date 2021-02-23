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

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _dynamic = require('next/dist/lib/dynamic.js');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _Progress = require('material-ui/Progress');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const ImageLoader = dynamic({
//     modules: (props) => {
//         const components = {
//             DynamicImage: import('../components/SingleImage'),
//         }
// return components
//   },

// render: (props, { DynamicImage }) => (<DynamicImage uri={props.uri} altText={props.altText} isVisible={props.isVisible} />) })

var ImageLoader = (0, _dynamic2.default)(typeof window === 'undefined' ? new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    require.ensure([], function (require) {
        var m = require('../components/SingleImage');

        m.__webpackChunkName = 'components_SingleImage_347f984268c60a7a9beaa686a477407c.js';
        resolve(m);
    }, 'chunks/components_SingleImage_347f984268c60a7a9beaa686a477407c.js');
}) : new (require('next/dist/lib/dynamic.js').SameLoopPromise)(function (resolve, reject) {
    var weakId = require.resolveWeak('../components/SingleImage');

    try {
        var weakModule = __webpack_require__(weakId);

        return resolve(weakModule);
    } catch (err) {}

    require.ensure([], function (require) {
        try {
            var m = require('../components/SingleImage');

            resolve(m);
        } catch (error) {
            reject(error);
        }
    }, 'chunks/components_SingleImage_347f984268c60a7a9beaa686a477407c.js');
}), {
    loading: function loading() {
        return _react2.default.createElement(_Progress.CircularProgress, { size: 100 });
    }
});

var ImageCard = function (_Component) {
    (0, _inherits3.default)(ImageCard, _Component);

    function ImageCard() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ImageCard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ImageCard.__proto__ || (0, _getPrototypeOf2.default)(ImageCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            imageName: _this.props.images.front
        }, _this.switchImage = function () {
            var images = _this.props.images;

            _this.setState(function (state) {
                return { imageName: state.imageName !== images.back ? images.back : images.front };
            });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ImageCard, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                size = _props.size,
                imagePath = _props.imagePath,
                images = _props.images,
                altText = _props.altText;
            var imageName = this.state.imageName;

            return _react2.default.createElement(_Grid2.default, { item: true, xs: size, sm: 3, md: 2, onMouseEnter: this.switchImage, onMouseLeave: this.switchImage }, _react2.default.createElement(_Card2.default, { className: classes.card }, _react2.default.createElement(_Card.CardMedia, null, _react2.default.createElement(ImageLoader, { uri: '' + imagePath + images.front, altText: altText, isVisible: imageName === images.front }), _react2.default.createElement(ImageLoader, { uri: '' + imagePath + images.back, altText: altText, isVisible: imageName === images.back }))));
        }
    }]);

    return ImageCard;
}(_react.Component);

exports.default = ImageCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW1hZ2VDYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwid2l0aFN0eWxlcyIsImNyZWF0ZVN0eWxlU2hlZXQiLCJDYXJkIiwiQ2FyZE1lZGlhIiwiR3JpZCIsImR5bmFtaWMiLCJDaXJjdWxhclByb2dyZXNzIiwiSW1hZ2VMb2FkZXIiLCJsb2FkaW5nIiwiSW1hZ2VDYXJkIiwic3RhdGUiLCJpbWFnZU5hbWUiLCJwcm9wcyIsImltYWdlcyIsImZyb250Iiwic3dpdGNoSW1hZ2UiLCJzZXRTdGF0ZSIsImJhY2siLCJjbGFzc2VzIiwic2l6ZSIsImltYWdlUGF0aCIsImFsdFRleHQiLCJjYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZOztBQUVyQixBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7Ozs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFNLDBKQUFjO1NBQUE7OzBDQUFBO2dCQUFBOzsrQkFBQTtnQkFBQTtPQUFBOzBGQUFBO3lCQUFBOztRQUFBOzZDQUFBOzt1QkFBQTttQkFBQTs7MENBQUE7WUFBQTtvQkFBQTs7b0JBQUE7d0JBQUE7bUJBQUE7QUFBQTtPQUFBOzthQUdILG1CQUFBO2VBQU8sZ0JBQUEsQUFBQyw0Q0FBaUIsTUFBekIsQUFBTyxBQUF3QjtBQUhoRCxBQUFvQixBQUVoQjtBQUFBLEFBQ0ksQ0FIWTs7SSxBQVFkOzs7Ozs7Ozs7Ozs7OztzTixBQUNGO3VCQUNlLE1BQUEsQUFBSyxNQUFMLEFBQVcsTyxBQURsQixBQUN5QjtBQUR6QixBQUNKLGlCLEFBRUosY0FBYyxZQUFNLEFBQ2hCO2dCQUFNLFNBQVMsTUFBQSxBQUFLLE1BQXBCLEFBQTBCLEFBRTFCOztrQkFBQSxBQUFLLFNBQVUsVUFBQSxBQUFVLE9BQU8sQUFDNUI7dUJBQU8sRUFBRSxXQUFXLE1BQUEsQUFBTSxjQUFjLE9BQXBCLEFBQTJCLE9BQU8sT0FBbEMsQUFBeUMsT0FBTyxPQUFwRSxBQUFPLEFBQW9FLEFBQzlFO0FBRkQsQUFJSDtBOzs7OztpQ0FDUTt5QkFDaUQsS0FEakQsQUFDc0Q7Z0JBRHRELEFBQ0csaUJBREgsQUFDRztnQkFESCxBQUNZLGNBRFosQUFDWTtnQkFEWixBQUNrQixtQkFEbEIsQUFDa0I7Z0JBRGxCLEFBQzZCLGdCQUQ3QixBQUM2QjtnQkFEN0IsQUFDcUMsaUJBRHJDLEFBQ3FDO2dCQURyQyxBQUVHLFlBQWMsS0FGakIsQUFFc0IsTUFGdEIsQUFFRyxBQUVSOzttQkFDSSxnQkFBQSxBQUFDLGdDQUFLLE1BQU4sTUFBVyxJQUFYLEFBQWUsTUFBTSxJQUFyQixBQUF5QixHQUFHLElBQTVCLEFBQWdDLEdBQUcsY0FBYyxLQUFqRCxBQUFzRCxhQUFhLGNBQWMsS0FBakYsQUFBc0YsQUFDbEYsK0JBQUEsQUFBQyxnQ0FBSyxXQUFXLFFBQWpCLEFBQXlCLEFBQ3JCLHdCQUFBLEFBQUMsK0JBQ0csb0NBQUEsQUFBQyxlQUFZLFVBQUEsQUFBUSxZQUFZLE9BQWpDLEFBQXdDLE9BQVMsU0FBakQsQUFBMEQsU0FBUyxXQUFXLGNBQWMsT0FEaEcsQUFDSSxBQUFtRyxBQUNuRyx3Q0FBQSxBQUFDLGVBQVksVUFBQSxBQUFRLFlBQVksT0FBakMsQUFBd0MsTUFBUSxTQUFoRCxBQUF5RCxTQUFTLFdBQVcsY0FBYyxPQUwzRyxBQUNJLEFBQ0ksQUFDSSxBQUVJLEFBQWtHLEFBS3JIOzs7OztBLEFBMUJtQixBQTRCeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSW1hZ2VDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zd2luZ3Z5L0RvY3VtZW50cy9ERVYva2luam8ifQ==