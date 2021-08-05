"use strict";

// 扩展规则方法 搬运原库的
const isNativeStringType = (type)=>{
    return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

// isEmptyValue  搬运原库的
const isEmptyValue = (val, type)=> {
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
}

// 字段验证
const fieldValidate = (rule, value, callback, source, options, obj)=> {
    let validate = (rule.required || !rule.required) && source.hasOwnProperty(rule.field);
    if (validate) {
        if (isEmptyValue(value) && !rule.required) {
            return callback();
        }
        if (value && obj['value']) {
            if (typeof obj['value'] === 'object' && !obj['value'].test(value)) {
                return callback(obj.message || '%s is required')
            }
            if (typeof obj['value'] === 'function' && !obj['value'](value)) {
                return callback(obj.message || '%s is required')
            }
        }
        return callback();
    }
}

// 正则规则配置
const regulars = {
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
        message: '请输入邮政编码',
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
        value: (str)=> {
            if (typeof str == 'string') {
                try {
                    var obj = JSON.parse(str);
                    if(obj && typeof obj == 'object'){
                        return true;
                    }else{
                        return false;
                    }
                } catch(e) {
                    return false;
                }
            }
            return false;
        },
        message: '请输入正确的JSON格式 String'
    },
}

const create = (rules)=> {
    Object.assign(regulars, rules)
    let functions = {} 
    for (let k in regulars) {
        const obj = regulars[k]
        functions[k] = (...options) => {
            return new fieldValidate(...options, obj)
        }
    }
    return functions
}

export default {
    create,
    regulars
}

