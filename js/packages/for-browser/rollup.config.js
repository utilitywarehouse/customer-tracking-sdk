import typescript from '@rollup/plugin-typescript';
// rollup.config.cjs
module.exports = {
    input: 'index.ts',
    output: {
        dir: 'lib',
        format: 'iife'
    },
    plugins: [typescript()]
}