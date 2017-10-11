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
      f: '../image/qianbao.png',
      c1: 'red',
      co1: 'red',
      c2: 'gray',
      co2: 'gray'
    }, _this.methods = {
      her: function her() {
        var self = this;
        self.c1 = 'red';
        self.co1 = 'red';
        self.c2 = 'gray';
        self.co2 = 'gray';
        self.a = '../image/xiangji.png';
        self.b = '../image/钻戒.png';
        self.c = '../image/口红.png';
        self.d = '../image/鲜花.png';
        self.e = '../image/送长辈.png';
        self.f = '../image/qianbao.png';
      },
      him: function him() {
        var self = this;
        self.c1 = 'gray';
        self.co1 = 'gray';
        self.c2 = 'red';
        self.co2 = 'red';
        self.a = '../image/xiangji.png';
        self.b = '../image/钻戒.png';
        self.c = '../image/口红.png';
        self.d = '../image/鲜花.png';
        self.e = '../image/送长辈.png';
        self.f = '../image/qianbao.png';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/present'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNlbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNlbmQiLCJsaWtlIiwiZG9uZSIsImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsImMxIiwiY28xIiwiYzIiLCJjbzIiLCJtZXRob2RzIiwiaGVyIiwic2VsZiIsImhpbSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLGlCQUREO0FBRUxDLFlBQU0saUJBRkQ7QUFHTEMsWUFBTSxpQkFIRDtBQUlMQyxTQUFHLHNCQUpFO0FBS0xDLFNBQUcsaUJBTEU7QUFNTEMsU0FBRyxpQkFORTtBQU9MQyxTQUFHLGlCQVBFO0FBUUxDLFNBQUcsa0JBUkU7QUFTTEMsU0FBRyxzQkFURTtBQVVMQyxVQUFJLEtBVkM7QUFXTEMsV0FBSyxLQVhBO0FBWUxDLFVBQUksTUFaQztBQWFMQyxXQUFLO0FBYkEsSyxRQWVQQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLTixFQUFMLEdBQVUsS0FBVjtBQUNBTSxhQUFLTCxHQUFMLEdBQVcsS0FBWDtBQUNBSyxhQUFLSixFQUFMLEdBQVUsTUFBVjtBQUNBSSxhQUFLSCxHQUFMLEdBQVcsTUFBWDtBQUNBRyxhQUFLWixDQUFMLEdBQVMsc0JBQVQ7QUFDQVksYUFBS1gsQ0FBTCxHQUFTLGlCQUFUO0FBQ0FXLGFBQUtWLENBQUwsR0FBUyxpQkFBVDtBQUNBVSxhQUFLVCxDQUFMLEdBQVMsaUJBQVQ7QUFDQVMsYUFBS1IsQ0FBTCxHQUFTLGtCQUFUO0FBQ0FRLGFBQUtQLENBQUwsR0FBUyxzQkFBVDtBQUNELE9BYk87QUFjUlEsU0FkUSxpQkFjRjtBQUNKLFlBQUlELE9BQU8sSUFBWDtBQUNBQSxhQUFLTixFQUFMLEdBQVUsTUFBVjtBQUNBTSxhQUFLTCxHQUFMLEdBQVcsTUFBWDtBQUNBSyxhQUFLSixFQUFMLEdBQVUsS0FBVjtBQUNBSSxhQUFLSCxHQUFMLEdBQVcsS0FBWDtBQUNBRyxhQUFLWixDQUFMLEdBQVMsc0JBQVQ7QUFDQVksYUFBS1gsQ0FBTCxHQUFTLGlCQUFUO0FBQ0FXLGFBQUtWLENBQUwsR0FBUyxpQkFBVDtBQUNBVSxhQUFLVCxDQUFMLEdBQVMsaUJBQVQ7QUFDQVMsYUFBS1IsQ0FBTCxHQUFTLGtCQUFUO0FBQ0FRLGFBQUtQLENBQUwsR0FBUyxzQkFBVDtBQUNEO0FBMUJPLEs7Ozs7OzZCQThCRCxDQUFHOzs7O0VBakRxQixlQUFLUyxJOztrQkFBbkJyQixLIiwiZmlsZSI6InByZXNlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56S854mp6K+0J1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc2VuZDogJy4uL2ltYWdlL+WktOWDjy5wbmcnLFxuICAgIGxpa2U6ICcuLi9pbWFnZS/npLzniakucG5nJyxcbiAgICBkb25lOiAnLi4vaW1hZ2Uv5a+56ZKpLnBuZycsXG4gICAgYTogJy4uL2ltYWdlL3hpYW5namkucG5nJyxcbiAgICBiOiAnLi4vaW1hZ2Uv6ZK75oiSLnBuZycsXG4gICAgYzogJy4uL2ltYWdlL+WPo+e6oi5wbmcnLFxuICAgIGQ6ICcuLi9pbWFnZS/pspzoirEucG5nJyxcbiAgICBlOiAnLi4vaW1hZ2Uv6YCB6ZW/6L6ILnBuZycsXG4gICAgZjogJy4uL2ltYWdlL3FpYW5iYW8ucG5nJyxcbiAgICBjMTogJ3JlZCcsXG4gICAgY28xOiAncmVkJyxcbiAgICBjMjogJ2dyYXknLFxuICAgIGNvMjogJ2dyYXknXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBoZXIoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuYzEgPSAncmVkJ1xuICAgICAgc2VsZi5jbzEgPSAncmVkJ1xuICAgICAgc2VsZi5jMiA9ICdncmF5J1xuICAgICAgc2VsZi5jbzIgPSAnZ3JheSdcbiAgICAgIHNlbGYuYSA9ICcuLi9pbWFnZS94aWFuZ2ppLnBuZydcbiAgICAgIHNlbGYuYiA9ICcuLi9pbWFnZS/pkrvmiJIucG5nJ1xuICAgICAgc2VsZi5jID0gJy4uL2ltYWdlL+WPo+e6oi5wbmcnXG4gICAgICBzZWxmLmQgPSAnLi4vaW1hZ2Uv6bKc6IqxLnBuZydcbiAgICAgIHNlbGYuZSA9ICcuLi9pbWFnZS/pgIHplb/ovogucG5nJ1xuICAgICAgc2VsZi5mID0gJy4uL2ltYWdlL3FpYW5iYW8ucG5nJ1xuICAgIH0sXG4gICAgaGltKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmMxID0gJ2dyYXknXG4gICAgICBzZWxmLmNvMSA9ICdncmF5J1xuICAgICAgc2VsZi5jMiA9ICdyZWQnXG4gICAgICBzZWxmLmNvMiA9ICdyZWQnXG4gICAgICBzZWxmLmEgPSAnLi4vaW1hZ2UveGlhbmdqaS5wbmcnXG4gICAgICBzZWxmLmIgPSAnLi4vaW1hZ2Uv6ZK75oiSLnBuZydcbiAgICAgIHNlbGYuYyA9ICcuLi9pbWFnZS/lj6PnuqIucG5nJ1xuICAgICAgc2VsZi5kID0gJy4uL2ltYWdlL+mynOiKsS5wbmcnXG4gICAgICBzZWxmLmUgPSAnLi4vaW1hZ2Uv6YCB6ZW/6L6ILnBuZydcbiAgICAgIHNlbGYuZiA9ICcuLi9pbWFnZS9xaWFuYmFvLnBuZydcbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHsgfVxufVxuIl19