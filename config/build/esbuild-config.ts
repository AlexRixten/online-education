import ESBuild, {BuildOptions} from 'esbuild'
import path from 'path'
import {CleanPlugin} from './plugins/CleanPlugin';
import {HTMLPlugin} from "./plugins/HTMLPlugin";
import ScssModulesPlugin from "esbuild-scss-modules-plugin/index";

const mode = process.env.MODE || 'development';

const isDev = mode === 'development';
const isProd = mode === 'production';

function resolveRoot(...segments: string[]) {
    return path.resolve(__dirname, '..', '..', ...segments)
}

const config: BuildOptions = {
    outdir: resolveRoot('build'),
    entryPoints: [resolveRoot( 'src', 'index.jsx')],
    entryNames: '[dir]/bundle.[name]-[hash]',
    allowOverwrite: true,
    bundle: true,
    tsconfig: resolveRoot('tsconfig.json'),
    minify: isProd,
    sourcemap: isDev,
    metafile: true,
    loader: {
        '.png': 'file',
        '.svg': 'file',
        '.jpg': 'file',
        '.scss': 'file',
    },
    plugins: [
        CleanPlugin,
        HTMLPlugin({
            title: 'Online School',
        }),
        ScssModulesPlugin({
            inject: false,
            minify: true,
            cssCallback: (css) => console.log(css),
        })
    ],
}

export default config;

