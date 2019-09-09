const { override, fixBabelImports, addLessLoader,addDecoratorsLegacy ,addWebpackAlias} = require('customize-cra');

module.exports = override(

    //按需加载组件代码和样式
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',

        style: true,
    }),

    //自定义颜色
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),

    //添加装饰器
    addDecoratorsLegacy(),

    //配置路径别名
    addWebpackAlias({

    })
);