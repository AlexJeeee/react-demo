const { override, fixBabelImports,addDecoratorsLegacy } = require('customize-cra');


module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
         style: 'css',
       }),
    addDecoratorsLegacy()
    );
// const { override, addDecoratorsLegacy } = require('customize-cra');
// module.exports = override(
//     addDecoratorsLegacy()
// );