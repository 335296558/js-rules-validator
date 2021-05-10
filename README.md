### js-n-validator 规则验证插件, 内置应用常用的规则验证方法、条件判断、正则, 持续扩展中，以扩展正则为主

基于 async-validator 库 https://github.com/yiminghe/async-validator
封装的规则验证插件js-n-validator，支持浏览器与node

> 兼容低版本JS，基于rollup/babel build/minify；
> 支持CMD、AMD、commonJS、ES6方式引入使用；

#### 功能：与 element-ui 的表单验证相同

#### 内置规则的用法，type="内置方法名"， 如：type: 'oneNine'
```
  import validator from 'js-n-validator';

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
  const rs = valid.censor(rules,{
      p: '3243rf324343',
      b: '3243rf324343',
  })
  // 验证不通过 rs == [{ message: '请输入正确的手机号', field: 'p' }， { message: '请输入1-9 任意一个数字', field: 'b' }]
  // 如果 rs 为空 null 则是验证通过
  if (rs) {
    // 处理你验证不通过的逻辑吧...
    return
  }
  // ... 处理你验证通过后的逻辑吧...
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

  const rs = valid.censor(rules,{
      c: 'xxxx',
      d: 'xxxx',
      by: 'xxxx',
      test: '3243rf324343'
  })

  // rs == [{ message: '请输入不小于 6 位的数字 字母混合', field: 'by' },{ message: '请输入身份证号码', field: 'test' }]
  // 如果 rs 为空 null 则是验证通过
</script>
```
#### 浏览器用法
```
<script src="../lib/js-n-validator/index.js"></script>
请看DEMO示例 ./demo/index.html

```

##### 版本日志
###### v1.0.0

## License
ISC
