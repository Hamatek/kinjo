"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _mapboxGl = require("mapbox-gl");

var _mapboxGl2 = _interopRequireDefault(_mapboxGl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Map = function (_Component) {
  (0, _inherits3.default)(Map, _Component);

  function Map() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Map);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Map.__proto__ || (0, _getPrototypeOf2.default)(Map)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      map: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // const isServer = typeof window === 'undefined';

      _mapboxGl2.default.accessToken = "pk.eyJ1IjoibGVncmltIiwiYSI6ImNqNTEzczJ5ZjFxcnQyd3FuOHJuN2RuNmsifQ.MR3lByLywqdaSE1MfXlQmg";

      var map = new _mapboxGl2.default.Map({
        container: this.container,
        style: "mapbox://styles/legrim/cj7rs7vf9e1ek2smg8k4um3st",
        maxZoom: 14,
        minZoom: 11.5
      });

      map.jumpTo({ center: this.props.center, zoom: 11.5 });
      map.on("load", function () {
        _this2.setState({ map: map });
        _this2.props.getMapData(map);
      });
      map.on("dragend", function () {
        _this2.props.getMapData(map);
        _this2.props.showForm();
      });
      map.on("zoomend", function () {
        _this2.props.getMapData(map);
        _this2.props.showForm();
      });
      var nav = new _mapboxGl2.default.NavigationControl();
      map.addControl(nav, "top-left");
      map.dragRotate.disable();

      // Disable map rotation using touch rotation gesture
      map.touchZoomRotate.disableRotation();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.center !== this.props.center || nextState.map !== this.state.map || nextProps.mapSize !== this.props.mapSize;
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      if (this.state.map) {
        this.state.map.jumpTo({ center: this.props.center, zoom: 11.5 });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.map) {
        this.state.map.jumpTo({ center: this.props.center, zoom: 11.5 });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          mapSize = _props.mapSize;
      var map = this.state.map;

      return _react2.default.createElement("div", {
        "data-jsx": 2724859345
      }, _react2.default.createElement("div", {
        className: "Map",
        style: { width: mapSize, height: mapSize },
        ref: function ref(x) {
          _this3.container = x;
        },
        "data-jsx": 2724859345
      }, map && children), _react2.default.createElement(_style2.default, {
        styleId: 2724859345,
        css: ".Map[data-jsx=\"2724859345\"]{cursor:-webkit--webkit-grab;cursor:-moz--webkit-grab;cursor:-webkit-grab;cursor:-webkit--moz-grab;cursor:-moz--moz-grab;cursor:-moz-grab;position:absolute;outline:black solid 0.5vw}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFb0IsQUFHaUMseUVBQ0gsZ0VBQ0Msa0JBRVEsMEJBQzVCIiwiZmlsZSI6ImNvbXBvbmVudHMvTWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zd2luZ3Z5L0RvY3VtZW50cy9ERVYva2luam8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InXHJcbi8vIHdpbmRvdy5tYXBib3hnbCA9IE1hcGJveEdsO1xyXG5pbXBvcnQgTWFwYm94R2wgZnJvbSBcIm1hcGJveC1nbFwiO1xyXG5jbGFzcyBNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbWFwOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xyXG5cclxuICAgIE1hcGJveEdsLmFjY2Vzc1Rva2VuID1cclxuICAgICAgXCJway5leUoxSWpvaWJHVm5jbWx0SWl3aVlTSTZJbU5xTlRFemN6SjVaakZ4Y25ReWQzRnVPSEp1TjJSdU5tc2lmUS5NUjNsQnlMeXdxZGFTRTFNZlhsUW1nXCI7XHJcblxyXG4gICAgY29uc3QgbWFwID0gbmV3IE1hcGJveEdsLk1hcCh7XHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXHJcbiAgICAgIHN0eWxlOiBcIm1hcGJveDovL3N0eWxlcy9sZWdyaW0vY2o3cnM3dmY5ZTFlazJzbWc4azR1bTNzdFwiLFxyXG4gICAgICBtYXhab29tOiAxNCxcclxuICAgICAgbWluWm9vbTogMTEuNVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmp1bXBUbyh7IGNlbnRlcjogdGhpcy5wcm9wcy5jZW50ZXIsIHpvb206IDExLjUgfSk7XHJcbiAgICBtYXAub24oXCJsb2FkXCIsICguLi5hcmdzKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXAgfSk7XHJcbiAgICAgIHRoaXMucHJvcHMuZ2V0TWFwRGF0YShtYXApO1xyXG4gICAgfSk7XHJcbiAgICBtYXAub24oXCJkcmFnZW5kXCIsICguLi5hcmdzKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMuZ2V0TWFwRGF0YShtYXApO1xyXG4gICAgICB0aGlzLnByb3BzLnNob3dGb3JtKCk7XHJcbiAgICB9KTtcclxuICAgIG1hcC5vbihcInpvb21lbmRcIiwgKC4uLmFyZ3MpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5nZXRNYXBEYXRhKG1hcCk7XHJcbiAgICAgIHRoaXMucHJvcHMuc2hvd0Zvcm0oKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbmF2ID0gbmV3IE1hcGJveEdsLk5hdmlnYXRpb25Db250cm9sKCk7XHJcbiAgICBtYXAuYWRkQ29udHJvbChuYXYsIFwidG9wLWxlZnRcIik7XHJcbiAgICBtYXAuZHJhZ1JvdGF0ZS5kaXNhYmxlKCk7XHJcblxyXG4gICAgLy8gRGlzYWJsZSBtYXAgcm90YXRpb24gdXNpbmcgdG91Y2ggcm90YXRpb24gZ2VzdHVyZVxyXG4gICAgbWFwLnRvdWNoWm9vbVJvdGF0ZS5kaXNhYmxlUm90YXRpb24oKTtcclxuICB9XHJcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBuZXh0UHJvcHMuY2VudGVyICE9PSB0aGlzLnByb3BzLmNlbnRlciB8fFxyXG4gICAgICBuZXh0U3RhdGUubWFwICE9PSB0aGlzLnN0YXRlLm1hcCB8fFxyXG4gICAgICBuZXh0UHJvcHMubWFwU2l6ZSAhPT0gdGhpcy5wcm9wcy5tYXBTaXplXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLm1hcCkge1xyXG4gICAgICB0aGlzLnN0YXRlLm1hcC5qdW1wVG8oeyBjZW50ZXI6IHRoaXMucHJvcHMuY2VudGVyLCB6b29tOiAxMS41IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tYXApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5tYXAuanVtcFRvKHsgY2VudGVyOiB0aGlzLnByb3BzLmNlbnRlciwgem9vbTogMTEuNSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG1hcFNpemUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IG1hcCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiTWFwXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBtYXBTaXplLCBoZWlnaHQ6IG1hcFNpemUgfX1cclxuICAgICAgICAgIHJlZj17eCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0geDtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge21hcCAmJiBjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLk1hcCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xyXG4gICAgICAgICAgICBjdXJzb3I6IC1tb3otZ3JhYjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgICAgICAgICAgb3V0bGluZTogYmxhY2sgc29saWQgMC41dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiJdfQ== */\n/*@ sourceURL=components/Map.js */"
      }));
    }
  }]);

  return Map;
}(_react.Component);

// import NoSSR from 'react-no-ssr'
// window.mapboxgl = MapboxGl;
exports.default = Map;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiTWFwYm94R2wiLCJNYXAiLCJzdGF0ZSIsIm1hcCIsImFjY2Vzc1Rva2VuIiwiY29udGFpbmVyIiwic3R5bGUiLCJtYXhab29tIiwibWluWm9vbSIsImp1bXBUbyIsImNlbnRlciIsInByb3BzIiwiem9vbSIsIm9uIiwic2V0U3RhdGUiLCJnZXRNYXBEYXRhIiwic2hvd0Zvcm0iLCJuYXYiLCJOYXZpZ2F0aW9uQ29udHJvbCIsImFkZENvbnRyb2wiLCJkcmFnUm90YXRlIiwiZGlzYWJsZSIsInRvdWNoWm9vbVJvdGF0ZSIsImRpc2FibGVSb3RhdGlvbiIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsIm1hcFNpemUiLCJjaGlsZHJlbiIsIndpZHRoIiwiaGVpZ2h0IiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTLEFBQVc7Ozs7QUFJM0IsQUFBTzs7Ozs7O0ksQUFDRDs7Ozs7Ozs7Ozs7Ozs7c00sQUFDSjtXLEFBQVEsQUFDRDtBQURDLEFBQ047Ozs7O3dDQUdrQjttQkFDbEI7O0FBRUE7O3lCQUFBLEFBQVMsY0FBVCxBQUNFLEFBRUY7O1VBQU0sVUFBVSxtQkFBSixBQUFhO21CQUNaLEtBRGdCLEFBQ1gsQUFDaEI7ZUFGMkIsQUFFcEIsQUFDUDtpQkFIMkIsQUFHbEIsQUFDVDtpQkFKRixBQUFZLEFBQWlCLEFBSWxCLEFBR1g7QUFQNkIsQUFDM0IsT0FEVTs7VUFPWixBQUFJLE9BQU8sRUFBRSxRQUFRLEtBQUEsQUFBSyxNQUFmLEFBQXFCLFFBQVEsTUFBeEMsQUFBVyxBQUFtQyxBQUM5QztVQUFBLEFBQUksR0FBSixBQUFPLFFBQVEsWUFBYSxBQUMxQjtlQUFBLEFBQUssU0FBUyxFQUFFLEtBQWhCLEFBQWMsQUFDZDtlQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsQUFDdkI7QUFIRCxBQUlBO1VBQUEsQUFBSSxHQUFKLEFBQU8sV0FBVyxZQUFhLEFBQzdCO2VBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixBQUN0QjtlQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7QUFIRCxBQUlBO1VBQUEsQUFBSSxHQUFKLEFBQU8sV0FBVyxZQUFhLEFBQzdCO2VBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixBQUN0QjtlQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1o7QUFIRCxBQUlBO1VBQU0sTUFBTSxJQUFJLG1CQUFoQixBQUFZLEFBQWEsQUFDekI7VUFBQSxBQUFJLFdBQUosQUFBZSxLQUFmLEFBQW9CLEFBQ3BCO1VBQUEsQUFBSSxXQUFKLEFBQWUsQUFFZjs7QUFDQTtVQUFBLEFBQUksZ0JBQUosQUFBb0IsQUFDckI7Ozs7MEMsQUFDcUIsVyxBQUFXLFdBQVcsQUFDMUM7YUFDRSxVQUFBLEFBQVUsV0FBVyxLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFDaEMsVUFBQSxBQUFVLFFBQVEsS0FBQSxBQUFLLE1BRHZCLEFBQzZCLE9BQzdCLFVBQUEsQUFBVSxZQUFZLEtBQUEsQUFBSyxNQUg3QixBQUdtQyxBQUVwQzs7OzswQ0FFcUIsQUFDcEI7VUFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLEtBQUssQUFDbEI7YUFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsT0FBTyxFQUFFLFFBQVEsS0FBQSxBQUFLLE1BQWYsQUFBcUIsUUFBUSxNQUFuRCxBQUFzQixBQUFtQyxBQUMxRDtBQUNGOzs7O3lDQUNvQixBQUNuQjtVQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsS0FBSyxBQUNsQjthQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxPQUFPLEVBQUUsUUFBUSxLQUFBLEFBQUssTUFBZixBQUFxQixRQUFRLE1BQW5ELEFBQXNCLEFBQW1DLEFBQzFEO0FBQ0Y7Ozs7NkJBRVE7bUJBQUE7O21CQUN1QixLQUR2QixBQUM0QjtVQUQ1QixBQUNDLGtCQURELEFBQ0M7VUFERCxBQUNXLGlCQURYLEFBQ1c7VUFEWCxBQUVDLE1BQVEsS0FGVCxBQUVjLE1BRmQsQUFFQyxBQUNSOzs2QkFDRSxjQUFBO29CQUFBLEFBQ0U7QUFERixPQUFBLGtCQUNFLGNBQUE7bUJBQUEsQUFDWSxBQUNWO2VBQU8sRUFBRSxPQUFGLEFBQVMsU0FBUyxRQUYzQixBQUVTLEFBQTBCLEFBQ2pDO2FBQUssZ0JBQUssQUFDUjtpQkFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDbEI7QUFMSDtvQkFBQSxBQU9HO0FBTkQsZ0JBRkosQUFDRSxBQU9VO2lCQVJaO2FBREYsQUFDRSxBQXNCSDtBQXRCRzs7Ozs7QUF5Qk4sQSxBQXRGa0I7O0FBSGxCO0FBQ0E7a0JBd0ZBLEFBQWUiLCJmaWxlIjoiTWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zd2luZ3Z5L0RvY3VtZW50cy9ERVYva2luam8ifQ==