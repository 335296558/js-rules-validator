'use strict';
/**
 * @author 凡尘
 * @date 2021/05
 * @author 335296558@qq.com
 */
import AsyncValidator from 'async-validator';
import RulesConfig from './rules.js';
const successColor = '\u001B[32m✓\u001B[39m';
const red = '\x1b[91m';
const Blue = '\x1b[36m%s\x1b[0m';

export default class jsNvalidator {
    constructor(rules={}, debug){
        this.debug = Boolean(debug)
        debug && console.log(Blue, 'messages ==>>', AsyncValidator.messages)
        debug && console.log(Blue, 'validators ==>>', AsyncValidator.validators)
        const { create, regulars } = RulesConfig
        const RulesFunctions = create(rules)
        this.regulars = regulars
        Object.assign(AsyncValidator.validators, RulesFunctions)
    }
    /**
     * @param {*} rules
     * @param {*} query
     * @returns
     * @memberof jsNvalidator
     */
    censor(rules, query) {
        if (!rules || !query) {
            return console.log(red, 'censor 方法的 验证规则 与 验证参数 不能为空, censor(验证规则, 验证参数)');
        }
        this.debug && console.log('query===>',query);
        this.debug && console.log('rules===>',rules);
        const validator = new AsyncValidator(rules);
        let rs;
        validator.validate(query, (errors, fields) => {
            rs = errors;
            if (errors) {
                return handleErrors(errors, fields);
            }
            debug && console.log(successColor+' 验证通过')
            return false;
        })
        this.validator = validator
        return rs;
    }
};
