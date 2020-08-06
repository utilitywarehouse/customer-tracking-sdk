// rollup.config.js
import typescript from 'rollup-plugin-typescript2';

export default {
    input: './src/index.ts',
    output: {
        dir: './lib/esm',
    },

    plugins: [
        typescript({tsconfig: "./tsconfig.esm.json"})
    ]
}