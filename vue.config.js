/*
 * @Author: DevZhang
 * @Date: 2019-06-29 13:18:36
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-06-29 13:20:22
 */

const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('pages',resolve('src/pages'))
    }
}
