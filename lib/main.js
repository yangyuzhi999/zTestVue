"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _less = _interopRequireDefault(require("less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.config.productionTip = false;

_vue.default.use(_less.default);

new _vue.default({
  router: _router.default,
  render: h => h(_App.default)
}).$mount("#app");