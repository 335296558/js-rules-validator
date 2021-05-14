"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var AsyncValidator=_interopDefault(require("async-validator"));function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _construct(e,t,a){return(_construct=_isNativeReflectConstruct()?Reflect.construct:function(e,t,a){var r=[null];r.push.apply(r,t);r=new(Function.bind.apply(e,r));return a&&_setPrototypeOf(r,a.prototype),r}).apply(null,arguments)}var isNativeStringType=function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e},isEmptyValue=function(e,t){return null==e||(!("array"!==t||!Array.isArray(e)||e.length)||!(!isNativeStringType(t)||"string"!=typeof e||e))},fieldValidate=function(e,t,a,r,s,n){if((e.required||!e.required)&&r.hasOwnProperty(e.field))return isEmptyValue(t)&&!e.required?a():t&&n.value&&!n.value.test(t)?a(n.message||"%s is required"):void a()},regulars={mixNumLetter:{value:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/,message:"请输入数字字母混合且不小于 6 位字符"},oneNine:{value:/^([1-9]){1}$/,message:"请输入数字1-9，任意一位数字"},phone:{value:/^1[34578][0-9]{9}$/,message:"请输入正确的手机号"},oneAndNineNine:{value:/^[1-9]{1,2}$/,message:"请输入1-99整数"},numberUppercaseLetter:{value:/^[0-9A-Z]+$/,message:"只能是数字与大写字母"},twoDecimalPlaces:{value:/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,message:"只能保留2位小数"},cn:{value:/^[u4e00-u9fa5]{0,}$/,message:"请输入中文"},AZazNumber:{value:/^[A-Za-z0-9]+$/,message:"请输入英文和数字"},EnglishAlphabet:{value:/^[A-Za-z]+$/,message:"请输入英文字母"},LowerLetters:{value:/^[a-z]+$/,message:"请输入小写字母"},uppercaseLetter:{value:/^[A-Z]+$/,message:"请输入大写字母"},email:{value:/^w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$/,message:"请输入正确的邮箱"},url:{value:/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,message:"请输入正确的域名"},tel:{value:/^((d{3,4}-)|d{3.4}-)?d{7,8}$/,message:"请输入电话号码"},ip:{value:/d+.d+.d+.d+/,message:"请输入IP地址"},s:{value:/s/,message:"不能为空"},isDecimalPoint:{value:/^\d+\.\d+$/,message:"请输入带小数点的数字"},WeChat:{value:/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,message:"请输入微信号"},PostalCode:{value:/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,message:"请输入邮政编码"},cnAndNumber:{value:/^(([\u4E00-\u9FA5])|(\d))+$/,message:"只能包含中文和数字"},id:{value:/(^\d{15}$)|(^\d{17}([0-9]|X)$)/,message:"请输入身份证号码"}},create=function(e){Object.assign(regulars,e);var t,a={};for(t in regulars)!function(e){var r=regulars[e];a[e]=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];_construct(fieldValidate,t.concat([r]))}}(t);return a},RulesConfig={create:create,regulars:regulars},red="[91m",Blue="[36m%s[0m",jsNvalidator=function(){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0;_classCallCheck(this,r),this.debug=Boolean(t),t&&console.log(Blue,"messages ==>>",AsyncValidator.messages),t&&console.log(Blue,"validators ==>>",AsyncValidator.validators);var a=RulesConfig.create,t=RulesConfig.regulars,e=a(e);this.regulars=t,Object.assign(AsyncValidator.validators,e)}return _createClass(r,[{key:"censor",value:function(e,t){var a,r=this;return e&&t?(this.debug&&console.log(t),this.debug&&console.log(e),new AsyncValidator(e).validate(t,function(e,t){return a=e,r.debug&&console.log(e,"===>errors"),!!e&&handleErrors(e,t)}),a):(console.error(red,"censor 方法的 验证规则 与 验证参数 不能为空, censor(验证规则, 验证参数)"),!1)}}]),r}();module.exports=jsNvalidator;
