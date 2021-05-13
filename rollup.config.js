import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { uglify } from "rollup-plugin-uglify";
import pkg from './package.json';

const plugins = [
    resolve(),  // so Rollup can find `ms`
    commonjs(), // so Rollup can convert `ms` to an ES module
    babel({ 
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
    }),
    uglify()
] 
const name = 'jsNvalidator'
export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: name,
			file: pkg.browser,
			format: 'umd',
            // sourcemap: true
		},
		plugins
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	{
		input: 'src/index.js',
		external: ['ms', 'async-validator'],
		output: [
			{ file: pkg.main,name, format: 'cjs' },
			{ file: pkg.module,name, format: 'es' }
		],
        plugins
	}
];
