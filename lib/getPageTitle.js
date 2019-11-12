"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.matchParamsPath = void 0;

var _pathToRegexp = _interopRequireDefault(require("path-to-regexp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchParamsPath = function matchParamsPath(pathname, breadcrumb) {
  if (breadcrumb) {
    var pathKey = Object.keys(breadcrumb).find(function (key) {
      return (0, _pathToRegexp.default)(key).test(pathname);
    });

    if (pathKey) {
      return breadcrumb[pathKey];
    }
  }

  return {
    path: ''
  };
};

exports.matchParamsPath = matchParamsPath;

var getPageTitle = function getPageTitle(props, ignoreTitle) {
  var _props$pathname = props.pathname,
      pathname = _props$pathname === void 0 ? "/" : _props$pathname,
      breadcrumb = props.breadcrumb,
      formatMessage = props.formatMessage,
      _props$title = props.title,
      title = _props$title === void 0 ? "全景智慧城市" : _props$title,
      _props$menu = props.menu,
      menu = _props$menu === void 0 ? {
    locale: true
  } : _props$menu;
  var pageTitle = ignoreTitle ? '' : title;

  if (!pathname) {
    return pageTitle;
  }

  var currRouterData = matchParamsPath(pathname, breadcrumb);

  if (!currRouterData) {
    return pageTitle;
  }

  var pageName = currRouterData.name;

  if (menu.locale && currRouterData.locale && formatMessage) {
    pageName = formatMessage({
      id: currRouterData.locale || '',
      defaultMessage: currRouterData.name
    });
  }

  if (!pageName) {
    return pageTitle;
  }

  if (ignoreTitle) {
    return pageName;
  }

  return "".concat(pageName, " - ").concat(title);
};

var _default = getPageTitle;
exports.default = _default;