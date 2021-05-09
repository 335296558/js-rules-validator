# validator 规则验证插件

基于 async-validator 库 https://github.com/yiminghe/async-validator 封装的规则验证插件，支持浏览器与node

> 兼容低版本JS，基于rollup/babel build/minify；
> 支持CMD、AMD、commonJS、ES6方式引入使用；

## 功能：与 element-ui 的表单验证相同

## 用法
```
<script>
  import validator from 'RuleValidator';
  const rules = {
      aa: [
          { required: true, message: '请填写活动形式', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
      ],
      bb: [
          { type:"oneNine", required: false, trigger: 'change' },
      ],
  };

  const rules2 = {
      desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
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

  const valid = new RuleValidator({
      // 可扩展正则
      idd: {
          value: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
          message: '请输入身份证号码'
      },
  }, true)

  console.log(valid, 'valid')
  const rs = valid.censor(rules,{
      aa:'1234', 
      bb: '1bb234',
  })
  if (!rs) { // rs 不存在就是 验证通过，验证不通过会返回 规则提示

  }
  console.log(rs, 'rs')

  const rs2 = valid.censor(rules2,{
      desc:'98676', 
      pass: 'pa',
  })
  console.log(rs2, 'rs2')
</script>
```
## 浏览器用法
```
<script src="../lib/RuleValidator.js"></script>

```

## 最后，DEMO示例请看 ./demo/index.html
## 版本日志
#### v1.0.0

## License
ISC
