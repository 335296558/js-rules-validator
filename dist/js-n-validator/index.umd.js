!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).jsNvalidator=r()}(this,function(){"use strict";function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,r){return(a=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function s(e,r,t){return(s=function(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),1}catch(e){return}}}()?Reflect.construct:function(e,r,t){var n=[null];n.push.apply(n,r);n=new(Function.bind.apply(e,n));return t&&a(n,t.prototype),n}).apply(null,arguments)}function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t,n=arguments[r];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,r){return(u=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function o(e,r,t){return(o=function(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),1}catch(e){return}}}()?Reflect.construct:function(e,r,t){var n=[null];n.push.apply(n,r);n=new(Function.bind.apply(e,n));return t&&u(n,t.prototype),n}).apply(null,arguments)}function r(e){var t="function"==typeof Map?new Map:void 0;return(r=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return o(e,arguments,n(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)})(e)}var f=/%[sdj%]/g,e=function(){};function y(e){if(!e||!e.length)return null;var t={};return e.forEach(function(e){var r=e.field;t[r]=t[r]||[],t[r].push(e)}),t}function g(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=1,i=r[0],a=r.length;return"function"==typeof i?i.apply(null,r.slice(1)):"string"!=typeof i?i:String(i).replace(f,function(e){if("%%"===e)return"%";if(a<=n)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}break;default:return e}})}function l(e,r){return null==e||("array"===r&&Array.isArray(e)&&!e.length||!("string"!==(r=r)&&"url"!==r&&"hex"!==r&&"email"!==r&&"date"!==r&&"pattern"!==r||"string"!=typeof e||e))}function d(t,n,i){var a=0,s=t.length;!function e(r){r&&r.length?i(r):(r=a,a+=1,r<s?n(t[r],e):i([]))}([])}"undefined"!=typeof process&&process.env&&"production"!==process.env.NODE_ENV&&"undefined"!=typeof window&&"undefined"!=typeof document&&(e=function(e,r){"undefined"!=typeof console&&console.warn&&r.every(function(e){return"string"==typeof e})&&console.warn(e,r)});var h=function(n){var e,r;function t(e,r){var t=n.call(this,"Async Validation Error")||this;return t.errors=e,t.fields=r,t}return r=n,(e=t).prototype=Object.create(r.prototype),u(e.prototype.constructor=e,r),t}(r(Error));function m(f,e,l,a){if(e.first){var r=new Promise(function(r,t){var n,i;d((n=f,i=[],Object.keys(n).forEach(function(e){i.push.apply(i,n[e])}),i),l,function(e){return a(e),e.length?t(new h(e,y(e))):r()})});return r.catch(function(e){return e}),r}var c=e.firstFields||[];!0===c&&(c=Object.keys(f));var n=Object.keys(f),i=n.length,s=0,u=[],e=new Promise(function(r,t){function o(e){if(u.push.apply(u,e),++s===i)return a(u),u.length?t(new h(u,y(u))):r()}n.length||(a(u),r()),n.forEach(function(e){var r,t,n,i,a,s=f[e];function u(e){n.push.apply(n,e),++i===a&&t(n)}-1!==c.indexOf(e)?d(s,l,o):(r=l,t=o,n=[],i=0,a=s.length,s.forEach(function(e){r(e,u)}))})});return e.catch(function(e){return e}),e}function v(r){return function(e){return e&&e.message?(e.field=e.field||r.fullField,e):{message:"function"==typeof e?e():e,field:e.field||r.fullField}}}function b(e,r){if(r)for(var t in r){var n;r.hasOwnProperty(t)&&("object"==typeof(n=r[t])&&"object"==typeof e[t]?e[t]=p({},e[t],n):e[t]=n)}return e}function c(e,r,t,n,i,a){!e.required||t.hasOwnProperty(e.field)&&!l(r,a||e.type)||n.push(g(i.messages.required,e.fullField))}var t={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},w={integer:function(e){return w.number(e)&&parseInt(e,10)===e},float:function(e){return w.number(e)&&!w.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(e){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!w.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&!!e.match(t.email)&&e.length<255},url:function(e){return"string"==typeof e&&!!e.match(t.url)},hex:function(e){return"string"==typeof e&&!!e.match(t.hex)}};var q="enum";var O={required:c,whitespace:function(e,r,t,n,i){!/^\s+$/.test(r)&&""!==r||n.push(g(i.messages.whitespace,e.fullField))},type:function(e,r,t,n,i){e.required&&void 0===r?c(e,r,t,n,i):(t=e.type,-1<["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(t)?w[t](r)||n.push(g(i.messages.types[t],e.fullField,e.type)):t&&typeof r!==e.type&&n.push(g(i.messages.types[t],e.fullField,e.type)))},range:function(e,r,t,n,i){var a="number"==typeof e.len,s="number"==typeof e.min,u="number"==typeof e.max,o=r,f=null,l="number"==typeof r,c="string"==typeof r,d=Array.isArray(r);if(l?f="number":c?f="string":d&&(f="array"),!f)return!1;d&&(o=r.length),c&&(o=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?o!==e.len&&n.push(g(i.messages[f].len,e.fullField,e.len)):s&&!u&&o<e.min?n.push(g(i.messages[f].min,e.fullField,e.min)):u&&!s&&o>e.max?n.push(g(i.messages[f].max,e.fullField,e.max)):s&&u&&(o<e.min||o>e.max)&&n.push(g(i.messages[f].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,i){e[q]=Array.isArray(e[q])?e[q]:[],-1===e[q].indexOf(r)&&n.push(g(i.messages[q],e.fullField,e[q].join(", ")))},pattern:function(e,r,t,n,i){e.pattern&&(e.pattern instanceof RegExp?(e.pattern.lastIndex=0,e.pattern.test(r)||n.push(g(i.messages.pattern.mismatch,e.fullField,r,e.pattern))):"string"==typeof e.pattern&&(new RegExp(e.pattern).test(r)||n.push(g(i.messages.pattern.mismatch,e.fullField,r,e.pattern))))}};function x(e,r,t,n,i){var a=e.type,s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,a)&&!e.required)return t();O.required(e,r,n,s,i,a),l(r,a)||O.type(e,r,n,s,i)}t(s)}var A={string:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"string")&&!e.required)return t();O.required(e,r,n,a,i,"string"),l(r,"string")||(O.type(e,r,n,a,i),O.range(e,r,n,a,i),O.pattern(e,r,n,a,i),!0===e.whitespace&&O.whitespace(e,r,n,a,i))}t(a)},method:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();O.required(e,r,n,a,i),void 0!==r&&O.type(e,r,n,a,i)}t(a)},number:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r=""===r?void 0:r)&&!e.required)return t();O.required(e,r,n,a,i),void 0!==r&&(O.type(e,r,n,a,i),O.range(e,r,n,a,i))}t(a)},boolean:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();O.required(e,r,n,a,i),void 0!==r&&O.type(e,r,n,a,i)}t(a)},regexp:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();O.required(e,r,n,a,i),l(r)||O.type(e,r,n,a,i)}t(a)},integer:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();O.required(e,r,n,a,i),void 0!==r&&(O.type(e,r,n,a,i),O.range(e,r,n,a,i))}t(a)},float:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();O.required(e,r,n,a,i),void 0!==r&&(O.type(e,r,n,a,i),O.range(e,r,n,a,i))}t(a)},array:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();O.required(e,r,n,a,i,"array"),null!=r&&(O.type(e,r,n,a,i),O.range(e,r,n,a,i))}t(a)},object:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();O.required(e,r,n,a,i),void 0!==r&&O.type(e,r,n,a,i)}t(a)},enum:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();O.required(e,r,n,a,i),void 0!==r&&O.enum(e,r,n,a,i)}t(a)},pattern:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"string")&&!e.required)return t();O.required(e,r,n,a,i),l(r,"string")||O.pattern(e,r,n,a,i)}t(a)},date:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"date")&&!e.required)return t();O.required(e,r,n,a,i),l(r,"date")||(r=r instanceof Date?r:new Date(r),O.type(e,r,n,a,i),r&&O.range(e,r.getTime(),n,a,i))}t(a)},url:x,hex:x,email:x,required:function(e,r,t,n,i){var a=[],s=Array.isArray(r)?"array":typeof r;O.required(e,r,n,a,i,s),t(a)},any:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();O.required(e,r,n,a,i)}t(a)}};function P(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var j=P();function F(e){this.rules=null,this._messages=j,this.define(e)}F.prototype={messages:function(e){return e&&(this._messages=b(P(),e)),this._messages},define:function(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");var r,t;for(r in this.rules={},e)e.hasOwnProperty(r)&&(t=e[r],this.rules[r]=Array.isArray(t)?t:[t])},validate:function(t,e,r){var n,i,a=this,s=t,c=e=void 0===e?{}:e,u=r=void 0===r?function(){}:r;if("function"==typeof c&&(u=c,c={}),!this.rules||0===Object.keys(this.rules).length)return u&&u(),Promise.resolve();function o(e){var r,t,n=[],i={};for(r=0;r<e.length;r++)t=e[r],Array.isArray(t)?n=n.concat.apply(n,t):n.push(t);i=n.length?y(n):n=null,u(n,i)}c.messages?(b(r=(r=this.messages())===j?P():r,c.messages),c.messages=r):c.messages=this.messages();var f={};(c.keys||Object.keys(this.rules)).forEach(function(r){n=a.rules[r],i=s[r],n.forEach(function(e){"function"==typeof e.transform&&(s===t&&(s=p({},s)),i=s[r]=e.transform(i)),(e="function"==typeof e?{validator:e}:p({},e)).validator=a.getValidationMethod(e),e.field=r,e.fullField=e.fullField||r,e.type=a.getType(e),e.validator&&(f[r]=f[r]||[],f[r].push({rule:e,value:i,source:s,field:r}))})});var d={};return m(f,c,function(s,u){var o,e,f=s.rule;function l(e,r){return p({},r,{fullField:f.fullField+"."+e})}function r(e){var t=e=void 0===e?[]:e;if(Array.isArray(t)||(t=[t]),!c.suppressWarning&&t.length&&F.warning("async-validator:",t),t=(t=t.length&&void 0!==f.message?[].concat(f.message):t).map(v(f)),c.first&&t.length)return d[f.field]=1,u(t);if(o){if(f.required&&!s.value)return void 0!==f.message?t=[].concat(f.message).map(v(f)):c.error&&(t=[c.error(f,g(c.messages.required,f.field))]),u(t);var r,n,i={};if(f.defaultField)for(var a in s.value)s.value.hasOwnProperty(a)&&(i[a]=f.defaultField);for(r in i=p({},i,s.rule.fields))i.hasOwnProperty(r)&&(n=Array.isArray(i[r])?i[r]:[i[r]],i[r]=n.map(l.bind(null,r)));e=new F(i);e.messages(c.messages),s.rule.options&&(s.rule.options.messages=c.messages,s.rule.options.error=c.error),e.validate(s.value,s.rule.options||c,function(e){var r=[];t&&t.length&&r.push.apply(r,t),e&&e.length&&r.push.apply(r,e),u(r.length?r:null)})}else u(t)}o=(o=!("object"!==f.type&&"array"!==f.type||"object"!=typeof f.fields&&"object"!=typeof f.defaultField))&&(f.required||!f.required&&s.value),f.field=s.field,f.asyncValidator?e=f.asyncValidator(f,s.value,r,s.source,c):f.validator&&(!0===(e=f.validator(f,s.value,r,s.source,c))?r():!1===e?r(f.message||f.field+" fails"):e instanceof Array?r(e):e instanceof Error&&r(e.message)),e&&e.then&&e.then(function(){return r()},r)},function(e){o(e)})},getType:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!A.hasOwnProperty(e.type))throw new Error(g("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?A.required:A[this.getType(e)]||!1}},F.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");A[e]=r},F.warning=e,F.messages=j,F.validators=A;function E(e,r,t,n,i,a){var s;if((e.required||!e.required)&&n.hasOwnProperty(e.field))return null!=(n=r)&&("array"!==s||!Array.isArray(n)||n.length)&&("string"!==(s=s)&&"url"!==s&&"hex"!==s&&"email"!==s&&"date"!==s&&"pattern"!==s||"string"!=typeof n||n)||e.required?r&&a.value&&!a.value.test(r)?t(a.message||"%s is required"):void t():t()}var $={mixNumLetter:{value:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/,message:"请输入数字字母混合且不小于 6 位字符"},oneNine:{value:/^([1-9]){1}$/,message:"请输入数字1-9，任意一位数字"},phone:{value:/^1[34578][0-9]{9}$/,message:"请输入正确的手机号"},oneAndNineNine:{value:/^[1-9]{1,2}$/,message:"请输入1-99整数"},numberUppercaseLetter:{value:/^[0-9A-Z]+$/,message:"只能是数字与大写字母"},twoDecimalPlaces:{value:/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,message:"只能保留2位小数"},cn:{value:/^[u4e00-u9fa5]{0,}$/,message:"请输入中文"},AZazNumber:{value:/^[A-Za-z0-9]+$/,message:"请输入英文和数字"},EnglishAlphabet:{value:/^[A-Za-z]+$/,message:"请输入英文字母"},LowerLetters:{value:/^[a-z]+$/,message:"请输入小写字母"},uppercaseLetter:{value:/^[A-Z]+$/,message:"请输入大写字母"},email:{value:/^w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*$/,message:"请输入正确的邮箱"},url:{value:/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,message:"请输入正确的域名"},tel:{value:/^((d{3,4}-)|d{3.4}-)?d{7,8}$/,message:"请输入电话号码"},ip:{value:/d+.d+.d+.d+/,message:"请输入IP地址"},s:{value:/s/,message:"不能为空"},isDecimalPoint:{value:/^\d+\.\d+$/,message:"请输入带小数点的数字"},WeChat:{value:/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,message:"请输入微信号"},PostalCode:{value:/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,message:"请输入邮政编码"},cnAndNumber:{value:/^(([\u4E00-\u9FA5])|(\d))+$/,message:"只能包含中文和数字"},id:{value:/(^\d{15}$)|(^\d{17}([0-9]|X)$)/,message:"请输入身份证号码"}},_={create:function(e){Object.assign($,e);var r,t={};for(r in $)!function(e){var n=$[e];t[e]=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];s(E,r.concat([n]))}}(r);return t},regulars:$},z="[36m%s[0m";return function(){function n(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length?arguments[1]:void 0;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.debug=Boolean(r),r&&console.log(z,"messages ==>>",F.messages),r&&console.log(z,"validators ==>>",F.validators);var t=_.create,r=_.regulars,e=t(e);this.regulars=r,Object.assign(F.validators,e)}var e,r,t;return e=n,(r=[{key:"censor",value:function(e,r){var t,n=this;return e&&r?(this.debug&&console.log(r),this.debug&&console.log(e),new F(e).validate(r,function(e,r){return t=e,n.debug&&console.log(e,"===>errors"),!!e&&handleErrors(e,r)}),t):(console.error("[91m","censor 方法的 验证规则 与 验证参数 不能为空, censor(验证规则, 验证参数)"),!1)}}])&&i(e.prototype,r),t&&i(e,t),n}()});
