'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '礼物说'
    }, _this.data = {
      send: '../image/头像.png',
      like: '../image/礼物.png',
      done: '../image/对钩.png',
      a: '../image/xiangji.png',
      b: '../image/钻戒.png',
      c: '../image/口红.png',
      d: '../image/鲜花.png',
      e: '../image/送长辈.png',
      f: '../image/qianbao.png'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/present'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNlbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNlbmQiLCJsaWtlIiwiZG9uZSIsImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsIm1ldGhvZHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxpQkFERDtBQUVMQyxZQUFNLGlCQUZEO0FBR0xDLFlBQU0saUJBSEQ7QUFJTEMsU0FBRyxzQkFKRTtBQUtMQyxTQUFHLGlCQUxFO0FBTUxDLFNBQUcsaUJBTkU7QUFPTEMsU0FBRyxpQkFQRTtBQVFMQyxTQUFHLGtCQVJFO0FBU0xDLFNBQUc7QUFURSxLLFFBV1BDLE8sR0FBVSxFOzs7Ozs2QkFDRCxDQUFHOzs7O0VBaEJxQixlQUFLQyxJOztrQkFBbkJkLEsiLCJmaWxlIjoicHJlc2VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnpLznianor7QnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzZW5kOiAnLi4vaW1hZ2Uv5aS05YOPLnBuZycsXG4gICAgbGlrZTogJy4uL2ltYWdlL+ekvOeJqS5wbmcnLFxuICAgIGRvbmU6ICcuLi9pbWFnZS/lr7npkqkucG5nJyxcbiAgICBhOiAnLi4vaW1hZ2UveGlhbmdqaS5wbmcnLFxuICAgIGI6ICcuLi9pbWFnZS/pkrvmiJIucG5nJyxcbiAgICBjOiAnLi4vaW1hZ2Uv5Y+j57qiLnBuZycsXG4gICAgZDogJy4uL2ltYWdlL+mynOiKsS5wbmcnLFxuICAgIGU6ICcuLi9pbWFnZS/pgIHplb/ovogucG5nJyxcbiAgICBmOiAnLi4vaW1hZ2UvcWlhbmJhby5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHt9XG4gIG9uTG9hZCgpIHsgfVxufVxuIl19