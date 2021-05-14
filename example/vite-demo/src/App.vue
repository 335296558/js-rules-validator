<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue';
import jsNvalidator from 'js-n-validator';

const rules = {
    aa: [
        { required: true, message: '请填写活动形式' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符' },
    ],
    bb: [
        { type:"oneNine2", required: false },
    ],
};

const rules2 = {
    desc: [
        { required: true, message: '请填写活动形式' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符' },
    ],
    pass: [
        { 
            required: true,
            validator: (rule, value, callback) => {
                if (!value) {
                    return callback({ message: '密码不能为空' });
                }
                callback();
            }, 
        },
        {
            validator: (rule, value, callback, a, b) => {
                if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(value)) {
                    callback({ message: '请输入不小于 6 位的数字 字母混合密码' });
                    return;
                }
                callback();
            },
        },
    ],
};

const valid = new jsNvalidator({
    // 可扩展正则
    oneNine2: {
        value: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
        message: '请输入身份证号码'
    },
})

// console.log(valid, 'valid')
const rs = valid.censor(rules,{
    aa:'1234', 
    bb: '1bb234',
})
if (!rs) {
    console.log(`\u001B[32m✓\u001B[39m 第1组参数验证通过`, 'rs1===>'+rs1+' 返回结果为空则是验证通过')
} else {
    console.log(rs, '第1组参数验证 没能通过 返回一个Array')
}

const rs2 = valid.censor(rules2,{
    desc:'98676', 
    pass: 'pa',
})
if (!rs2) {
    console.log(`\u001B[32m✓\u001B[39m 第2组参数验证通过`, 'rs2===>'+rs2+' 返回结果为空则是验证通过')
} else {
    console.log(rs2, '第2组参数验证 没能通过 返回一个Array')
}

const rs3 = valid.censor(rules2,{
    desc:'233', 
    pass: 'pafds3243',
})
if (!rs3) {
    console.log(`\u001B[32m✓\u001B[39m 第3组参数验证通过`, 'rs3===>'+rs3+' 返回结果为空则是验证通过')
} else {
    console.log(rs3, '第3组参数验证 没能通过 返回一个Array')
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
