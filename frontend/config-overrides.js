const {override, fixBabelImports, addLessLoader} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', { // 针对 antd，使用 babel-plugin-import 来按需加载 css 样式
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({ // 对源码的 less 文件进行变量覆盖
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#409eff'},
    }),
);
