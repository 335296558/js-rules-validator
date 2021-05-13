const rules = {
    aa: [
        { required: true, message: '请填写活动形式' },
    ],
    bb: [
        { type:"oneNine2", required: false },
    ],

};

const rules2 = {
    desc: [
        { required: true, message: '请填写活动形式' },
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

export default function init(jsNvalidator) {
    const valid = new jsNvalidator({
        // 可扩展正则
        oneNine2: {
            value: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
            message: '请输入身份证号码22'
        },
    })

    // console.log(valid, 'valid')
    const rs = valid.censor(rules,{
        aa: null, 
        bb: '',
    })
    console.log(rs,rules, '第一个参数验证')

    // const rs2 = valid.censor(rules2,{
    //     desc:'98676', 
    //     pass: 'pa22222',
    // })
    // console.log(rs2, '第二个参数验证')
}