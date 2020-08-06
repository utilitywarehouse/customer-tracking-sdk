// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import pkg from "./package.json";

export default {
    input: './src/index.ts',
    plugins: [typescript()],
    output: [
        // this builds commonjs for use with node, typescript and old bundlers, no deps included
        {format: 'cjs', file: pkg.main},
        // this builds for new bundlers, webpack2+ will use this instead of commonjs by following pkg.module
        // no deps included
        {format: 'es', file: pkg.module}
    ],
}