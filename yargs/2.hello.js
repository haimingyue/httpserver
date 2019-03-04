let yargs = require('yargs');

// let argv = yargs.argv;

let argv = yargs.options('n', {
  alias: 'name', // 别名
  demand: true, // 必填
  default: 'zfpx',
  description: '请输入姓名'
})
.usage('hellp [opitons]')
.help()//指定帮助信息
.example('hello -name zfpx', '执行hello命令，然后传入name参数为zfpx')
.alias('h', 'help')
.argv

console.log(argv)

console.log(argv);