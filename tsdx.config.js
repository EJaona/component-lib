const postcss = require('rollup-plugin-postcss')
const json = require('@rollup/plugin-json');
module.exports = {
    rollup(config, options){
        config.plugins.push(
            postcss({
                config:{
                    path: './postcss.config.js',
                },
                extension: ['.css'],
                minimize: true,
                inject:{
                    insertAt:'top',
                },
            }),
            json()
        )

        return config;
    }
}