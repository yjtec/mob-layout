"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDocumentTitle = _interopRequireDefault(require("react-document-title"));

var _getPageTitle = _interopRequireDefault(require("./getPageTitle"));

var _getMenuData2 = _interopRequireDefault(require("./utils/getMenuData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultPageTitleRender = function defaultPageTitleRender(pageProps, props) {
  var pageTitleRender = props.pageTitleRender,
      _props$ignoreTitle = props.ignoreTitle,
      ignoreTitle = _props$ignoreTitle === void 0 ? false : _props$ignoreTitle;

  if (pageTitleRender === false) {
    return props.title || '';
  }

  if (pageTitleRender) {
    return pageTitleRender();
  }

  return (0, _getPageTitle.default)(pageProps, ignoreTitle);
};

var BasicLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BasicLayout, _React$Component);

  function BasicLayout() {
    _classCallCheck(this, BasicLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(BasicLayout).apply(this, arguments));
  }

  _createClass(BasicLayout, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          location = _this$props.location,
          menu = _this$props.menu,
          menuDataRender = _this$props.menuDataRender,
          _this$props$route = _this$props.route,
          route = _this$props$route === void 0 ? {
        routes: []
      } : _this$props$route;
      var routes = route.routes,
          path = route.path;

      var formatMessage = function formatMessage(_ref) {
        var id = _ref.id,
            defaultMessage = _ref.defaultMessage,
            rest = _objectWithoutProperties(_ref, ["id", "defaultMessage"]);

        if (_this.props.formatMessage) {
          return _this.props.formatMessage(_objectSpread({
            id: id,
            defaultMessage: defaultMessage
          }, rest));
        }

        var locales = getLocales();

        if (locales[id]) {
          return locales[id];
        }

        if (defaultMessage) {
          return defaultMessage;
        }

        return id;
      };

      var _getMenuData = (0, _getMenuData2.default)(routes, menu, formatMessage, menuDataRender),
          menuData = _getMenuData.menuData,
          breadcrumb = _getMenuData.breadcrumb;

      var defaultProps = _objectSpread({}, this.props, {
        formatMessage: formatMessage,
        breadcrumb: breadcrumb
      });

      var pageTitle = defaultPageTitleRender(_objectSpread({
        pathname: location.pathname
      }, defaultProps), this.props);
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactDocumentTitle.default, {
        title: pageTitle
      }, children));
    }
  }]);

  return BasicLayout;
}(_react.default.Component);

var _default = BasicLayout;
exports.default = _default;