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
      navigationBarTitleText: 'personal information'
    }, _this.data = {
      name: 'Chen',
      year: '1996.5.6',
      count: 0,
      usercount: 3,
      img: '',
      src: '',
      music: '',
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }],
      musicsrc: '../music/谢安琪 - 钟无艳.mp3'

    }, _this.methods = {
      add: function add() {
        var self = this;
        if (self.usercount < 1) {
          console.log('error');
        } else {
          self.count++;
          self.usercount--;
        }
      },


      checkboxChange: function checkboxChange(e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);
      },

      radioChange: function radioChange(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);
      },

      slider4change: function slider4change(e) {
        console.log('slider发生change事件，携带value值为：', e.detail.value);
      },

      bindButtonTap: function bindButtonTap() {
        var that = this;
        _wepy2.default.chooseVideo({
          sourceType: ['camera'],
          maxDuration: 60,
          camera: 'front',
          success: function success(res) {
            that.src = res.tempFilePath;
            that.setData({
              src: res.tempFilePath
            });
          }
        });
      },

      bindButton2Tap: function bindButton2Tap() {
        var that = this;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            that.img = res.tempFilePaths[0];
            that.setData({
              img: res.tempFilePaths[0]
            });
          }
        });
      },

      audioPlay: function audioPlay() {
        this.audioCtx.play();
      },
      audioPause: function audioPause() {
        this.audioCtx.pause();
      },
      audio14: function audio14() {
        this.audioCtx.seek(14);
      },
      audioStart: function audioStart() {
        this.audioCtx.seek(0);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReady',
    value: function onReady(e) {
      // 使用 wx.createAudioContext 获取 audio 上下文 context
      this.audioCtx = _wepy2.default.createAudioContext('myAudio');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJuYW1lIiwieWVhciIsImNvdW50IiwidXNlcmNvdW50IiwiaW1nIiwic3JjIiwibXVzaWMiLCJpdGVtcyIsInZhbHVlIiwiY2hlY2tlZCIsIm11c2ljc3JjIiwibWV0aG9kcyIsImFkZCIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tib3hDaGFuZ2UiLCJlIiwiZGV0YWlsIiwicmFkaW9DaGFuZ2UiLCJzbGlkZXI0Y2hhbmdlIiwiYmluZEJ1dHRvblRhcCIsInRoYXQiLCJjaG9vc2VWaWRlbyIsInNvdXJjZVR5cGUiLCJtYXhEdXJhdGlvbiIsImNhbWVyYSIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGgiLCJzZXREYXRhIiwiYmluZEJ1dHRvbjJUYXAiLCJjaG9vc2VJbWFnZSIsInNpemVUeXBlIiwidGVtcEZpbGVQYXRocyIsImF1ZGlvUGxheSIsImF1ZGlvQ3R4IiwicGxheSIsImF1ZGlvUGF1c2UiLCJwYXVzZSIsImF1ZGlvMTQiLCJzZWVrIiwiYXVkaW9TdGFydCIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLE1BREQ7QUFFTEMsWUFBTSxVQUZEO0FBR0xDLGFBQU8sQ0FIRjtBQUlMQyxpQkFBVyxDQUpOO0FBS0xDLFdBQUssRUFMQTtBQU1MQyxXQUFLLEVBTkE7QUFPTEMsYUFBTyxFQVBGO0FBUUxDLGFBQU8sQ0FDTCxFQUFFUCxNQUFNLEtBQVIsRUFBZVEsT0FBTyxJQUF0QixFQURLLEVBRUwsRUFBRVIsTUFBTSxLQUFSLEVBQWVRLE9BQU8sSUFBdEIsRUFBNEJDLFNBQVMsTUFBckMsRUFGSyxFQUdMLEVBQUVULE1BQU0sS0FBUixFQUFlUSxPQUFPLElBQXRCLEVBSEssRUFJTCxFQUFFUixNQUFNLEtBQVIsRUFBZVEsT0FBTyxJQUF0QixFQUpLLEVBS0wsRUFBRVIsTUFBTSxLQUFSLEVBQWVRLE9BQU8sSUFBdEIsRUFMSyxFQU1MLEVBQUVSLE1BQU0sS0FBUixFQUFlUSxPQUFPLElBQXRCLEVBTkssQ0FSRjtBQWdCTEUsZ0JBQVU7O0FBaEJMLEssUUFvQlBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUEsS0FBS1YsU0FBTCxHQUFpQixDQUFyQixFQUF3QjtBQUN0Qlcsa0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLGVBQUtYLEtBQUw7QUFDQVcsZUFBS1YsU0FBTDtBQUNEO0FBQ0YsT0FUTzs7O0FBV1JhLHNCQUFnQix3QkFBU0MsQ0FBVCxFQUFZO0FBQzFCSCxnQkFBUUMsR0FBUixDQUFZLCtCQUFaLEVBQTZDRSxFQUFFQyxNQUFGLENBQVNWLEtBQXREO0FBQ0QsT0FiTzs7QUFlUlcsbUJBQWEscUJBQVNGLENBQVQsRUFBWTtBQUN2QkgsZ0JBQVFDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0UsRUFBRUMsTUFBRixDQUFTVixLQUFuRDtBQUNELE9BakJPOztBQW1CUlkscUJBQWUsdUJBQVNILENBQVQsRUFBWTtBQUN6QkgsZ0JBQVFDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ0UsRUFBRUMsTUFBRixDQUFTVixLQUFwRDtBQUNELE9BckJPOztBQXVCUmEscUJBQWUseUJBQVc7QUFDeEIsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsc0JBQVksQ0FBQyxRQUFELENBREc7QUFFZkMsdUJBQWEsRUFGRTtBQUdmQyxrQkFBUSxPQUhPO0FBSWZDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJOLGlCQUFLakIsR0FBTCxHQUFXdUIsSUFBSUMsWUFBZjtBQUNBUCxpQkFBS1EsT0FBTCxDQUFhO0FBQ1h6QixtQkFBS3VCLElBQUlDO0FBREUsYUFBYjtBQUdEO0FBVGMsU0FBakI7QUFXRCxPQXBDTzs7QUFzQ1JFLHNCQUFnQiwwQkFBVztBQUN6QixZQUFJVCxPQUFPLElBQVg7QUFDQSx1QkFBS1UsV0FBTCxDQUFpQjtBQUNmOUIsaUJBQU8sQ0FEUSxFQUNMO0FBQ1YrQixvQkFBVSxDQUFDLFlBQUQsQ0FGSyxFQUVXO0FBQzFCVCxzQkFBWSxDQUFDLE9BQUQsQ0FIRyxFQUdRO0FBQ3ZCRyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTixpQkFBS2xCLEdBQUwsR0FBV3dCLElBQUlNLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBWDtBQUNBWixpQkFBS1EsT0FBTCxDQUFhO0FBQ1gxQixtQkFBS3dCLElBQUlNLGFBQUosQ0FBa0IsQ0FBbEI7QUFETSxhQUFiO0FBR0Q7QUFUYyxTQUFqQjtBQVdELE9BbkRPOztBQXFEUkMsaUJBQVcscUJBQVc7QUFDcEIsYUFBS0MsUUFBTCxDQUFjQyxJQUFkO0FBQ0QsT0F2RE87QUF3RFJDLGtCQUFZLHNCQUFXO0FBQ3JCLGFBQUtGLFFBQUwsQ0FBY0csS0FBZDtBQUNELE9BMURPO0FBMkRSQyxlQUFTLG1CQUFXO0FBQ2xCLGFBQUtKLFFBQUwsQ0FBY0ssSUFBZCxDQUFtQixFQUFuQjtBQUNELE9BN0RPO0FBOERSQyxrQkFBWSxzQkFBVztBQUNyQixhQUFLTixRQUFMLENBQWNLLElBQWQsQ0FBbUIsQ0FBbkI7QUFDRDtBQWhFTyxLOzs7Ozs2QkFtRUQsQ0FBRTs7OzRCQUVIeEIsQyxFQUFHO0FBQ1Q7QUFDQSxXQUFLbUIsUUFBTCxHQUFnQixlQUFLTyxrQkFBTCxDQUF3QixTQUF4QixDQUFoQjtBQUNEOzs7O0VBakdnQyxlQUFLQyxJOztrQkFBbkJoRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3BlcnNvbmFsIGluZm9ybWF0aW9uJ1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBuYW1lOiAnQ2hlbicsXG4gICAgeWVhcjogJzE5OTYuNS42JyxcbiAgICBjb3VudDogMCxcbiAgICB1c2VyY291bnQ6IDMsXG4gICAgaW1nOiAnJyxcbiAgICBzcmM6ICcnLFxuICAgIG11c2ljOiAnJyxcbiAgICBpdGVtczogW1xuICAgICAgeyBuYW1lOiAnVVNBJywgdmFsdWU6ICfnvo7lm70nIH0sXG4gICAgICB7IG5hbWU6ICdDSE4nLCB2YWx1ZTogJ+S4reWbvScsIGNoZWNrZWQ6ICd0cnVlJyB9LFxuICAgICAgeyBuYW1lOiAnQlJBJywgdmFsdWU6ICflt7Topb8nIH0sXG4gICAgICB7IG5hbWU6ICdKUE4nLCB2YWx1ZTogJ+aXpeacrCcgfSxcbiAgICAgIHsgbmFtZTogJ0VORycsIHZhbHVlOiAn6Iux5Zu9JyB9LFxuICAgICAgeyBuYW1lOiAnVFVSJywgdmFsdWU6ICfms5Xlm70nIH1cbiAgICBdLFxuICAgIG11c2ljc3JjOiAnLi4vbXVzaWMv6LCi5a6J55CqIC0g6ZKf5peg6ImzLm1wMydcblxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhZGQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLnVzZXJjb3VudCA8IDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuY291bnQrK1xuICAgICAgICBzZWxmLnVzZXJjb3VudC0tXG4gICAgICB9XG4gICAgfSxcblxuICAgIGNoZWNrYm94Q2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2hlY2tib3jlj5HnlJ9jaGFuZ2Xkuovku7bvvIzmkLrluKZ2YWx1ZeWAvOS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH0sXG5cbiAgICByYWRpb0NoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgY29uc29sZS5sb2coJ3JhZGlv5Y+R55SfY2hhbmdl5LqL5Lu277yM5pC65bimdmFsdWXlgLzkuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuXG4gICAgc2xpZGVyNGNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgY29uc29sZS5sb2coJ3NsaWRlcuWPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfSxcblxuICAgIGJpbmRCdXR0b25UYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICB3ZXB5LmNob29zZVZpZGVvKHtcbiAgICAgICAgc291cmNlVHlwZTogWydjYW1lcmEnXSxcbiAgICAgICAgbWF4RHVyYXRpb246IDYwLFxuICAgICAgICBjYW1lcmE6ICdmcm9udCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHRoYXQuc3JjID0gcmVzLnRlbXBGaWxlUGF0aFxuICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICBzcmM6IHJlcy50ZW1wRmlsZVBhdGhcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBiaW5kQnV0dG9uMlRhcDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxuICAgICAgICBzaXplVHlwZTogWydjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICB0aGF0LmltZyA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgIGltZzogcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBhdWRpb1BsYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5wbGF5KClcbiAgICB9LFxuICAgIGF1ZGlvUGF1c2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5wYXVzZSgpXG4gICAgfSxcbiAgICBhdWRpbzE0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYXVkaW9DdHguc2VlaygxNClcbiAgICB9LFxuICAgIGF1ZGlvU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5hdWRpb0N0eC5zZWVrKDApXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkKCkge31cblxuICBvblJlYWR5KGUpIHtcbiAgICAvLyDkvb/nlKggd3guY3JlYXRlQXVkaW9Db250ZXh0IOiOt+WPliBhdWRpbyDkuIrkuIvmlocgY29udGV4dFxuICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXG4gIH1cbn1cbiJdfQ==