/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Mcalendar =
/*#__PURE__*/
function () {
  //农历参数
  function Mcalendar() {
    _classCallCheck(this, Mcalendar);

    _defineProperty(this, "FullYear", 0);

    _defineProperty(this, "month", void 0);

    _defineProperty(this, "day", -1);

    _defineProperty(this, "week", void 0);

    _defineProperty(this, "hours", void 0);

    _defineProperty(this, "minutes", void 0);

    _defineProperty(this, "seconds", void 0);

    _defineProperty(this, "lunarMonth", void 0);

    _defineProperty(this, "lunarDay", void 0);

    _defineProperty(this, "lunarLeap", void 0);

    _defineProperty(this, "hzWeek", new Array('日', '一', '二', '三', '四', '五', '六', '日'));

    _defineProperty(this, "lunarInfo", new Array(0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, //1990
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, 0x14b63));

    _defineProperty(this, "nStr1", new Array('', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'));

    _defineProperty(this, "nStr2", new Array('初', '十', '廿', '卅', '□'));
  }

  _createClass(Mcalendar, [{
    key: "CalConv",
    value: function CalConv() {
      var now = new Date();

      if (now.getDate() != this.day) {
        this.FullYear = noww.getFullYear();
        this.month = noww.getMonth() + 1;
        this.week = noww.getDay(); //

        this.nday = noww.getDate(); // getlunar(); //获取农历
      }

      this.hours = noww.getHours();
      this.minutes = noww.getMinutes();
      this.seconds = noww.getSeconds(); //显示时间

      var s = FullYear + '年' + month + '月' + nday + '日 ' + '星期' + cweekday(week);
      s += ' 农历' + lunarMonth + '月' + lunarDay; //农历

      document.write(s);
    } ////辅助函数////

  }, {
    key: "cweekday",
    value: function cweekday(wday) {
      return hzWeek[wday];
    }
  }, {
    key: "shapetime",
    value: function shapetime(vhrs, vmin, vsec) {
      if (vsec <= 9) vsec = '0' + vsec;
      if (vmin <= 9) vmin = '0' + vmin;
      if (vhrs <= 9) vhrs = '0' + vhrs;
      return vhrs + ':' + vmin + ':' + vsec;
    } ////农历函数开始////

  }, {
    key: "lYearDays",
    value: function lYearDays(y) {
      i, sum = 348;

      for (i = 0x8000; i > 0x8; i >>= 1) {
        sum += lunarInfo[y - 1900] & i ? 1 : 0;
      }

      return sum + leapDays(y);
    }
  }, {
    key: "leapDays",
    value: function leapDays(y) {
      if (leapMonth(y)) return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;else return 0;
    }
  }, {
    key: "leapMonth",
    value: function leapMonth(y) {
      return lunarInfo[y - 1900] & 0xf;
    }
  }, {
    key: "monthDays",
    value: function monthDays(y, m) {
      return lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
    }
  }, {
    key: "Lunar",
    value: function Lunar(y, m, d) {
      i, leap = 0, temp = 0;
      offset = (Date.UTC(y, m, d) - Date.UTC(1900, 0, 31)) / 86400000;

      for (i = 1900; i < 2050 && offset > 0; i++) {
        temp = lYearDays(i);
        offset -= temp;
      }

      if (offset < 0) {
        offset += temp;
        i--;
      }

      this.year = i;
      leap = leapMonth(i);
      this.isLeap = false;

      for (i = 1; i < 13 && offset > 0; i++) {
        if (leap > 0 && i == leap + 1 && this.isLeap == false) {
          --i;
          this.isLeap = true;
          temp = leapDays(this.year);
        } else {
          temp = monthDays(this.year, i);
        }

        if (this.isLeap == true && i == leap + 1) this.isLeap = false;
        offset -= temp;
      }

      if (offset == 0 && leap > 0 && i == leap + 1) if (this.isLeap) {
        this.isLeap = false;
      } else {
        this.isLeap = true;
        --i;
      }

      if (offset < 0) {
        offset += temp;
        --i;
      }

      this.month = i;
      this.day = offset + 1;
    }
  }, {
    key: "GetcDay",
    value: function GetcDay(d) {
      s;

      switch (d) {
        case 10:
          s = '初十';
          break;

        case 20:
          s = '二十';
          break;

        case 30:
          s = '三十';
          break;

        default:
          s = nStr2[Math.floor(d / 10)];
          s += nStr1[d % 10];
          break;
      }

      return s;
    }
  }, {
    key: "GetcMon",
    value: function GetcMon(m) {
      if (m == 1) return '正';else return nStr1[m];
    }
  }, {
    key: "getlunar",
    value: function getlunar() {
      lObj = new Lunar(FullYear, month - 1, nday);
      lunarMonth = GetcMon(lObj.month);
      lunarDay = GetcDay(lObj.day);
      lunarLeap = lObj.isLeap;

      if (lunarLeap == 1) {
        lunarMonth = '闰' + lunarMonth;
      }
    } ////农历函数结束////
    //显示开始
    //CalConv();

  }]);

  return Mcalendar;
}();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map