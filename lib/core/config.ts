import {join} from "path";
import {config} from 'dotenv-defaults';
const {path} = require('app-root-path');

config({
    path: join(path, ".env"),
    defaults: join(path, ".env.defaults"),
    encoding: 'utf8'
});

export const HOST: string = process.env.HOST || "0.0.0.0";
export const PORT: number = Number(process.env.PORT || 8080);

export const DEVELOPMENT: boolean = process.env.MODE === "development";
export const PRODUCTION: boolean = process.env.MODE === "production";

export const DB_DIALECT = process.env.DB_DIALECT || 'sqlite';
export const DB_STORAGE = process.env.DB_STORAGE || ':memory:';
export const DB_MODELS = process.env.DB_MODELS || `${__dirname}/../model/**/*.ts`;
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;
export const DB_NAME = process.env.DB_NAME;
export const DB_POOL = process.env.DB_POOL;
export const DB_PORT = asNumber(process.env.DB_PORT);
export const DB_POOL_MAX = asNumber(process.env.DB_POOL_MAX);
export const DB_POOL_MIN = asNumber(process.env.DB_POOL_MAX);
export const DB_POOL_IDLE = asNumber(process.env.DB_POOL_IDLE);
export const DB_POOL_ACQUIRE = asNumber(process.env.DB_POOL_ACQUIRE);
export const DB_LOGGING = !!process.env.DB_LOGGING;
export const DB_SYNC = !PRODUCTION && (`${process.env.DB_SYNC}`.toLowerCase() === "true");

function asNumber(value) {
    if (typeof value === "undefined"
        || value === null
        || !`${value}`.length) {
        return undefined;
    }
    return Number(value);
}