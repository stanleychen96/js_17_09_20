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
      send: '../image/head.png',
      like: '../image/gift.png',
      done: '../image/tick.png',
      myself: '../image/camera.png',
      girlfriend: '../image/diamondring.png',
      closefriend: '../image/lipstick.png',
      mum: '../image/flower.png',
      elder: '../image/elder.png',
      colleague: '../image/wallet.png',
      woman: 'red',
      wbottom: 'red',
      man: 'gray',
      mbottom: 'gray',
      first: '自己',
      second: '老婆/女票',
      third: '姐妹/闺蜜',
      forth: '妈妈',
      fifth: '长辈',
      sixth: '同事'
    }, _this.methods = {
      her: function her() {
        var self = this;
        self.woman = 'red';
        self.wbottom = 'red';
        self.man = 'gray';
        self.mbottom = 'gray';
        self.myself = '../image/camera.png';
        self.girlfriend = '../image/diamondring.png';
        self.closefriend = '../image/lipstick.png';
        self.mum = '../image/flower.png';
        self.elder = '../image/elder.png';
        self.colleague = '../image/wallet.png';
        self.first = '自己';
        self.second = '老婆/女票';
        self.third = '姐妹/闺蜜';
        self.forth = '妈妈';
        self.fifth = '长辈';
        self.sixth = '同事';
      },
      him: function him() {
        var self = this;
        self.woman = 'gray';
        self.wbottom = 'gray';
        self.man = 'red';
        self.mbottom = 'red';
        self.myself = '../image/book.png';
        self.girlfriend = '../image/scarf.png';
        self.closefriend = '../image/billiards.png';
        self.mum = '../image/watch.png';
        self.elder = '../image/travel.png';
        self.colleague = '../image/golf.png';
        self.first = '自己';
        self.second = '老公/男票';
        self.third = '兄弟/基友';
        self.forth = '爸爸';
        self.fifth = '长辈';
        self.sixth = '同事';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNlbnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNlbmQiLCJsaWtlIiwiZG9uZSIsIm15c2VsZiIsImdpcmxmcmllbmQiLCJjbG9zZWZyaWVuZCIsIm11bSIsImVsZGVyIiwiY29sbGVhZ3VlIiwid29tYW4iLCJ3Ym90dG9tIiwibWFuIiwibWJvdHRvbSIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJmb3J0aCIsImZpZnRoIiwic2l4dGgiLCJtZXRob2RzIiwiaGVyIiwic2VsZiIsImhpbSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLG1CQUREO0FBRUxDLFlBQU0sbUJBRkQ7QUFHTEMsWUFBTSxtQkFIRDtBQUlMQyxjQUFRLHFCQUpIO0FBS0xDLGtCQUFZLDBCQUxQO0FBTUxDLG1CQUFhLHVCQU5SO0FBT0xDLFdBQUsscUJBUEE7QUFRTEMsYUFBTyxvQkFSRjtBQVNMQyxpQkFBVyxxQkFUTjtBQVVMQyxhQUFPLEtBVkY7QUFXTEMsZUFBUyxLQVhKO0FBWUxDLFdBQUssTUFaQTtBQWFMQyxlQUFTLE1BYko7QUFjTEMsYUFBTyxJQWRGO0FBZUxDLGNBQVEsT0FmSDtBQWdCTEMsYUFBTyxPQWhCRjtBQWlCTEMsYUFBTyxJQWpCRjtBQWtCTEMsYUFBTyxJQWxCRjtBQW1CTEMsYUFBTztBQW5CRixLLFFBcUJQQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLWixLQUFMLEdBQWEsS0FBYjtBQUNBWSxhQUFLWCxPQUFMLEdBQWUsS0FBZjtBQUNBVyxhQUFLVixHQUFMLEdBQVcsTUFBWDtBQUNBVSxhQUFLVCxPQUFMLEdBQWUsTUFBZjtBQUNBUyxhQUFLbEIsTUFBTCxHQUFjLHFCQUFkO0FBQ0FrQixhQUFLakIsVUFBTCxHQUFrQiwwQkFBbEI7QUFDQWlCLGFBQUtoQixXQUFMLEdBQW1CLHVCQUFuQjtBQUNBZ0IsYUFBS2YsR0FBTCxHQUFXLHFCQUFYO0FBQ0FlLGFBQUtkLEtBQUwsR0FBYSxvQkFBYjtBQUNBYyxhQUFLYixTQUFMLEdBQWlCLHFCQUFqQjtBQUNBYSxhQUFLUixLQUFMLEdBQWEsSUFBYjtBQUNBUSxhQUFLUCxNQUFMLEdBQWMsT0FBZDtBQUNBTyxhQUFLTixLQUFMLEdBQWEsT0FBYjtBQUNBTSxhQUFLTCxLQUFMLEdBQWEsSUFBYjtBQUNBSyxhQUFLSixLQUFMLEdBQWEsSUFBYjtBQUNBSSxhQUFLSCxLQUFMLEdBQWEsSUFBYjtBQUNELE9BbkJPO0FBb0JSSSxTQXBCUSxpQkFvQkY7QUFDSixZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS1osS0FBTCxHQUFhLE1BQWI7QUFDQVksYUFBS1gsT0FBTCxHQUFlLE1BQWY7QUFDQVcsYUFBS1YsR0FBTCxHQUFXLEtBQVg7QUFDQVUsYUFBS1QsT0FBTCxHQUFlLEtBQWY7QUFDQVMsYUFBS2xCLE1BQUwsR0FBYyxtQkFBZDtBQUNBa0IsYUFBS2pCLFVBQUwsR0FBa0Isb0JBQWxCO0FBQ0FpQixhQUFLaEIsV0FBTCxHQUFtQix3QkFBbkI7QUFDQWdCLGFBQUtmLEdBQUwsR0FBVyxvQkFBWDtBQUNBZSxhQUFLZCxLQUFMLEdBQWEscUJBQWI7QUFDQWMsYUFBS2IsU0FBTCxHQUFpQixtQkFBakI7QUFDQWEsYUFBS1IsS0FBTCxHQUFhLElBQWI7QUFDQVEsYUFBS1AsTUFBTCxHQUFjLE9BQWQ7QUFDQU8sYUFBS04sS0FBTCxHQUFhLE9BQWI7QUFDQU0sYUFBS0wsS0FBTCxHQUFhLElBQWI7QUFDQUssYUFBS0osS0FBTCxHQUFhLElBQWI7QUFDQUksYUFBS0gsS0FBTCxHQUFhLElBQWI7QUFDRDtBQXRDTyxLOzs7Ozs2QkEwQ0QsQ0FBRzs7OztFQW5FcUIsZUFBS0ssSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJwcmVzZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ekvOeJqeivtCdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNlbmQ6ICcuLi9pbWFnZS9oZWFkLnBuZycsXG4gICAgbGlrZTogJy4uL2ltYWdlL2dpZnQucG5nJyxcbiAgICBkb25lOiAnLi4vaW1hZ2UvdGljay5wbmcnLFxuICAgIG15c2VsZjogJy4uL2ltYWdlL2NhbWVyYS5wbmcnLFxuICAgIGdpcmxmcmllbmQ6ICcuLi9pbWFnZS9kaWFtb25kcmluZy5wbmcnLFxuICAgIGNsb3NlZnJpZW5kOiAnLi4vaW1hZ2UvbGlwc3RpY2sucG5nJyxcbiAgICBtdW06ICcuLi9pbWFnZS9mbG93ZXIucG5nJyxcbiAgICBlbGRlcjogJy4uL2ltYWdlL2VsZGVyLnBuZycsXG4gICAgY29sbGVhZ3VlOiAnLi4vaW1hZ2Uvd2FsbGV0LnBuZycsXG4gICAgd29tYW46ICdyZWQnLFxuICAgIHdib3R0b206ICdyZWQnLFxuICAgIG1hbjogJ2dyYXknLFxuICAgIG1ib3R0b206ICdncmF5JyxcbiAgICBmaXJzdDogJ+iHquW3sScsXG4gICAgc2Vjb25kOiAn6ICB5amGL+Wls+elqCcsXG4gICAgdGhpcmQ6ICflp5Dlprkv6Ze66JycJyxcbiAgICBmb3J0aDogJ+WmiOWmiCcsXG4gICAgZmlmdGg6ICfplb/ovognLFxuICAgIHNpeHRoOiAn5ZCM5LqLJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgaGVyKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLndvbWFuID0gJ3JlZCdcbiAgICAgIHNlbGYud2JvdHRvbSA9ICdyZWQnXG4gICAgICBzZWxmLm1hbiA9ICdncmF5J1xuICAgICAgc2VsZi5tYm90dG9tID0gJ2dyYXknXG4gICAgICBzZWxmLm15c2VsZiA9ICcuLi9pbWFnZS9jYW1lcmEucG5nJ1xuICAgICAgc2VsZi5naXJsZnJpZW5kID0gJy4uL2ltYWdlL2RpYW1vbmRyaW5nLnBuZydcbiAgICAgIHNlbGYuY2xvc2VmcmllbmQgPSAnLi4vaW1hZ2UvbGlwc3RpY2sucG5nJ1xuICAgICAgc2VsZi5tdW0gPSAnLi4vaW1hZ2UvZmxvd2VyLnBuZydcbiAgICAgIHNlbGYuZWxkZXIgPSAnLi4vaW1hZ2UvZWxkZXIucG5nJ1xuICAgICAgc2VsZi5jb2xsZWFndWUgPSAnLi4vaW1hZ2Uvd2FsbGV0LnBuZydcbiAgICAgIHNlbGYuZmlyc3QgPSAn6Ieq5bexJ1xuICAgICAgc2VsZi5zZWNvbmQgPSAn6ICB5amGL+Wls+elqCdcbiAgICAgIHNlbGYudGhpcmQgPSAn5aeQ5aa5L+mXuuicnCdcbiAgICAgIHNlbGYuZm9ydGggPSAn5aaI5aaIJ1xuICAgICAgc2VsZi5maWZ0aCA9ICfplb/ovognXG4gICAgICBzZWxmLnNpeHRoID0gJ+WQjOS6iydcbiAgICB9LFxuICAgIGhpbSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi53b21hbiA9ICdncmF5J1xuICAgICAgc2VsZi53Ym90dG9tID0gJ2dyYXknXG4gICAgICBzZWxmLm1hbiA9ICdyZWQnXG4gICAgICBzZWxmLm1ib3R0b20gPSAncmVkJ1xuICAgICAgc2VsZi5teXNlbGYgPSAnLi4vaW1hZ2UvYm9vay5wbmcnXG4gICAgICBzZWxmLmdpcmxmcmllbmQgPSAnLi4vaW1hZ2Uvc2NhcmYucG5nJ1xuICAgICAgc2VsZi5jbG9zZWZyaWVuZCA9ICcuLi9pbWFnZS9iaWxsaWFyZHMucG5nJ1xuICAgICAgc2VsZi5tdW0gPSAnLi4vaW1hZ2Uvd2F0Y2gucG5nJ1xuICAgICAgc2VsZi5lbGRlciA9ICcuLi9pbWFnZS90cmF2ZWwucG5nJ1xuICAgICAgc2VsZi5jb2xsZWFndWUgPSAnLi4vaW1hZ2UvZ29sZi5wbmcnXG4gICAgICBzZWxmLmZpcnN0ID0gJ+iHquW3sSdcbiAgICAgIHNlbGYuc2Vjb25kID0gJ+iAgeWFrC/nlLfnpagnXG4gICAgICBzZWxmLnRoaXJkID0gJ+WFhOW8ny/ln7rlj4snXG4gICAgICBzZWxmLmZvcnRoID0gJ+eIuOeIuCdcbiAgICAgIHNlbGYuZmlmdGggPSAn6ZW/6L6IJ1xuICAgICAgc2VsZi5zaXh0aCA9ICflkIzkuosnXG4gICAgfVxuXG4gIH1cblxuICBvbkxvYWQoKSB7IH1cbn1cbiJdfQ==