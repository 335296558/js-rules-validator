#### js-rules-validator 规则验证插件, 内置应用常用的规则验证方法、条件判断、正则, 持续扩展中

基于 async-validator 库 https://github.com/yiminghe/async-validator
扩展封装的规则验证插件js-rules-validator

>
>
> 支持CMD、AMD、commonJS、ES6方式引入使用；
>
>
#### 功能：与 element-ui 的表单验证相同


<!--
简单、易用、可扩展的 js-rules-validator 参数验证插件, 与element-ui 的表单验证相同
-->

### install
```
npm i js-rules-validator


yarn add js-rules-validator

```

### 构建工具环境, Vite示例 ./example/vite-demo/src/App.vue
```
import jsNvalidator from 'js-rules-validator';
...
```

### node 环境
```
const jsNvalidator = require('js-rules-validator');
...
```

#### 浏览器用法，引用index.umd.js
```
<script src="../index.umd.js"></script>
请看DEMO示例 ./example/browser/index.html

```

#### 内置规则的用法，type="内置方法名"， 如：type: 'oneNine'
```
  import validator from 'js-rules-validator';

  // 内置用法，message 优先使用外部定义，如果外部没有定义则使用内置 message

  // 定义字段规则
  const rules = {
      p: [
          { type:"phone", required: true },
      ],
      b: [
          { type:"oneNine", required: true, message: '请输入1-9 任意一个数字' },
      ],
  };

  const valid = new validator()
  valid.censor(rules,{
      p: '3243rf324343',
      b: '3243rf324343',
  }).then((rs)=>{
        if (rs){
            console.log(` 参数验证不通过 DEMO1`, rs)
            return
        }
        console.log(`\u001B[32m✓\u001B[39m 参数验证通过`, rs)
  }).catch((err)=>{
        console.log('err', err)
  })
```

#### 多种方法定义规则验证，trigger事件方式， validator方法 请看 async-validator库 https://github.com/yiminghe/async-validator
```
  // 定义规则
  const rules = {
      c: [
          { required: true, message: '请填写活动形式' },
      ],
      d: [
          { type:"oneNine", required: false, trigger: 'blur' },
      ],
      by: [
          { 
              required: true,
              validator: (rule, value, callback) => {
                  if (!value) {
                      return callback({ message: 'by 不能为空' });
                  }
                  callback();
              }, 
          },
          {
              validator: (rule, value, callback) => {
                  if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(value)) {
                      callback({ message: '请输入不小于 6 位的数字 字母混合' });
                      return;
                  }
                  callback();
              },
          },
      ],
      // 使用自已扩展的正则, 如下设置 test 必填字段，
      test: [
          { type:"idd", required: true },
      ],
  };

  // 可扩展正则, 
  const valid = new validator({
      idd: {
          value: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
          message: '请输入身份证号码'
      },
  }, true)

  valid.censor(rules,{
      c: 'xxxx',
      d: 'xxxx',
      by: 'xxxx',
      test: '3243rf324343'
  }).then((rs)=>{
        if (rs){
            console.log(` 参数验证不通过 DEMO1`, rs)
            return
        }
        console.log(`\u001B[32m✓\u001B[39m 参数验证通过`, rs)
  }).catch((err)=>{
        console.log('err', err)
  })
</script>
```


##### 版本日志
###### v1.0.0

ISC
