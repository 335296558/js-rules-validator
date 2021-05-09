// rollup配置 https://www.rollupjs.com/guide/tutorial
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import cleaner from 'rollup-plugin-cleaner';
import { main } from './package.json';
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

export default {
    input: main,
    output: {
        file: `lib/RuleValidator.js`,
        format: 'umd',
        name: 'RuleValidator',
        sourcemap: true,
        exports: 'default'
    },
    context: 'this',
    plugins: [
        process.env.ENV !== 'prod' && livereload(),
        process.env.ENV !== 'prod' && serve(), 
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        json(),
        cleaner({
            targets: [
                './lib/'
            ]
        }),
        process.env.ENV === 'prod' && uglify()
    ]
};
