import { join } from 'path';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: join(__dirname, '../index.ts'),
  output: [
    {
      format: 'cjs',
      file: join(__dirname, '../dist/telenoty.js'),
    },
  ],
  plugins: [json(), commonjs(), typescript()],
  external: ['fs', 'arg', 'axios'],
};
