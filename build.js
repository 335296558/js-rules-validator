const shell = require('shelljs');
const path = require('path');

function getPath(...query) {
    return path.resolve(__dirname, ...query)
}

const dir = getPath('./','pkg')
const new_dir_name = 'js-n-validator'
const new_dir = dir+'/'+new_dir_name

// 注意、注意、如果看到报这句： find: no such file or directory 你要先确定该目录是否存在,

function init() {
    if (!shell.find([dir])[0]) { // 不存在、pkg目录，或者没权限，
        // 不存在那就没必要执行下去了
        return false
    }
    // 删除  dist-src
    shell.rm('-rf',dir+'/dist-src');

    // 在pkg目录 创建一个 js-n-validator 目录
    shell.mkdir(new_dir)

    // 给它读、写、执行权限
    shell.chmod('r+w+x', dir+'/')

    // 读取目录内的 目录与文件
    shell.ls(path.join(dir)).forEach(name => {
        if (name!==new_dir_name) { // 其它文件全部移入 pkg/js-n-validator/ 目录下
            shell.mv(dir+'/'+name, new_dir+'/');
            console.log(`\u001B[32m✓\u001B[39m `+name+' 迁移成功')
        }
    })
}

init()
