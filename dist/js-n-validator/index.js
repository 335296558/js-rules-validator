'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var AsyncValidator = _interopDefault(require('async-validator'));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

var isNativeStringType = function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}; // isEmptyValue  搬运原库的


var isEmptyValue = function isEmptyValue(val, type) {
  if (val === undefined || val === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(val) && !val.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof val === 'string' && !val) {
    return true;
  }

  return false;
}; // 字段验证


var fieldValidate = function fieldValidate(rule, value, callback, source, options, obj) {
  var validate = (rule.required || !rule.required) && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    if (value && obj['value']) {
      if (_typeof(obj['value']) === 'object' && !obj['value'].test(value)) {
        return callback(obj.message || '%s is required');
      }

      if (typeof obj['value'] === 'function' && !obj['value'](value)) {
        return callback(obj.message || '%s is required');
      }
    }

    callback();
  }
}; // 正则规则配置


var regulars = {
  mixNumLetter: {
    value: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/,
    message: '请输入数字字母混合且不小于 6 位字符'
  },
  oneNine: {
    value: /^([1-9]){1}$/,
    message: '请输入数字1-9，任意一位数字'
  },
  phone: {
    value: /^1[34578][0-9]{9}$/,
    message: '请输入正确的手机号'
  },
  oneAndNineNine: {
    value: /^[1-9]{1,2}$/,
    message: '请输入1-99整数'
  },
  numberUppercaseLetter: {
    value: /^[0-9A-Z]+$/,
    message: '只能是数字与大写字母'
  },
  twoDecimalPlaces: {
    value: /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,
    message: '只能保留2位小数'
  },
  cn: {
    value: /^[u4e00-u9fa5]{0,}$/,
    message: '请输入中文'
  },
  AZazNumber: {
    value: /^[A-Za-z0-9]+$/,
    message: '请输入英文和数字'
  },
  EnglishAlphabet: {
    value: /^[A-Za-z]+$/,
    message: '请输入英文字母'
  },
  LowerLetters: {
    value: /^[a-z]+$/,
    message: '请输入小写字母'
  },
  uppercaseLetter: {
    value: /^[A-Z]+$/,
    message: '请输入大写字母'
  },
  email: {
    value: /^w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$/,
    message: '请输入正确的邮箱'
  },
  url: {
    value: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    message: '请输入正确的域名'
  },
  tel: {
    value: /^((d{3,4}-)|d{3.4}-)?d{7,8}$/,
    message: '请输入电话号码'
  },
  ip: {
    value: /d+.d+.d+.d+/,
    message: '请输入IP地址'
  },
  s: {
    value: /s/,
    message: '不能为空'
  },
  isDecimalPoint: {
    value: /^\d+\.\d+$/,
    message: '请输入带小数点的数字'
  },
  WeChat: {
    value: /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
    message: '请输入微信号'
  },
  PostalCode: {
    value: /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
    message: '请输入邮政编码'
  },
  cnAndNumber: {
    value: /^(([\u4E00-\u9FA5])|(\d))+$/,
    message: '只能包含中文和数字'
  },
  id: {
    value: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
    message: '请输入身份证号码'
  },
  isJSON: {
    value: function value(str) {
      if (typeof str == 'string') {
        try {
          var obj = JSON.parse(str);

          if (obj && _typeof(obj) == 'object') {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }

      return false;
    },
    message: '请输入正确的JSON格式 String'
  }
};

var create = function create(rules) {
  Object.assign(regulars, rules);
  var functions = {};

  var _loop = function _loop(k) {
    var obj = regulars[k];

    functions[k] = function () {
      for (var _len = arguments.length, options = new Array(_len), _key = 0; _key < _len; _key++) {
        options[_key] = arguments[_key];
      }

      return _construct(fieldValidate, options.concat([obj]));
    };
  };

  for (var k in regulars) {
    _loop(k);
  }

  return functions;
};

var RulesConfig = {
  create: create,
  regulars: regulars
};

var red = '\x1b[91m';
var Blue = '\x1b[36m%s\x1b[0m';

var jsNvalidator = /*#__PURE__*/function () {
  function jsNvalidator() {
    var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var debug = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, jsNvalidator);

    this.debug = Boolean(debug);
    debug && console.log(Blue, 'messages ==>>', AsyncValidator.messages);
    debug && console.log(Blue, 'validators ==>>', AsyncValidator.validators);
    var create = RulesConfig.create,
        regulars = RulesConfig.regulars;
    var RulesFunctions = create(rules);
    this.regulars = regulars;
    Object.assign(AsyncValidator.validators, RulesFunctions);
  }
  /**
   * @param {*} rules
   * @param {*} query
   * @returns
   * @memberof jsNvalidator
   */


  _createClass(jsNvalidator, [{
    key: "censor",
    value: function censor(rules, query) {
      if (!rules || !query) {
        console.error(red, 'censor 方法的 验证规则 与 验证参数 不能为空, censor(验证规则, 验证参数)');
        return false;
      }

      this.debug && console.log(query);
      this.debug && console.log(rules);
      var validator = new AsyncValidator(rules);
      return new Promise(function (resolve, reject) {
        validator.validate(query, function (errors, fields) {
          console.log('errors', errors);
          console.log('fields', fields);

          if (!errors) {
            resolve(null);
            return;
          }

          reject(errors);
        });
      });
    }
  }]);

  return jsNvalidator;
}();

module.exports = jsNvalidator;
