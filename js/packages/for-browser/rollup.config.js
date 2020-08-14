// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

export default [
    {
        input: './src/index.ts',
        plugins: [typescript()],
        output: [
            // this builds commonjs for use with node, typescript and old bundlers, no deps included
            {format: 'cjs', file: pkg.main},
            // this builds for new bundlers, webpack2+ will use this instead of commonjs by following pkg.module
            // no deps included
            {format: 'es', file: pkg.module}
        ],
    },
    {
        input: pkg.module,
        output: {
            // this builds for browser use via <script>
            name: 'uwTracking',
            file: pkg.browser,
            format: 'umd',
            sourcemap: true,
            sourcemapExcludeSources: true,
        },
        plugins: [
            // injects node events into the bundle
            nodePolyfills(),
            // injects dependencies into the bundle
            resolve(),
            // required to convert cjs deps into esm before bundling (for mixpanel-browser)
            commonjs(),
            // minifying
            terser({
                ecma: 2020
            }),
        ]
    }
]