import terser from '@rollup/plugin-terser';

export default {
    input: 'src/scripts/index.js',  // Archivo de entrada
	output: [
		{
			file: 'public/scripts/bundle.js',
			format: 'cjs'
		},
		{
			file: 'public/scripts/bundle.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
	],
	context: "this"
  };