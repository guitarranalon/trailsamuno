import terser from '@rollup/plugin-terser';

export default {
    input: 'src/scripts/index.js',
	output: [
		{
			file: 'public/scripts/bundle.js',
			format: 'cjs'
		},
		{
			file: 'public/scripts/bundle.min.js',
			format: 'cjs',
			name: 'version',
			plugins: [terser({
				output: {
					comments: false,
				}
			})]
		}
	],
	context: "this",
  };