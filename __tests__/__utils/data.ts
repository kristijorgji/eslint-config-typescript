import * as fs from 'fs';
import * as path from 'path';

import Callsite from 'callsite';

const fixturesPath = (name: string, ext = '.json'): string => {
    const _ext = getExt(name);
    return path.resolve(__dirname, `../data/fixtures/${name}${_ext.length !== 0 ? '' : ext}`);
};

export const rawFixture = (name: string): string => {
    return fs.readFileSync(fixturesPath(name)).toString();
};

export const rawLocalFixture = (name: string, ext = '.json'): string => {
    const _ext = getExt(name);
    const fpath = `${path.dirname(Callsite()[2].getFileName())}/fixtures/${name}${_ext.length !== 0 ? '' : ext}`;
    return fs.readFileSync(fpath).toString();
};

export const readLocalFixture = <T>(name: string): T => {
    return JSON.parse(rawLocalFixture(name)) as unknown as T;
};

export const readFixture = <T>(name: string): T => {
    return JSON.parse(rawFixture(name)) as unknown as T;
};

function getExt(filename: string): string {
    const t = path.extname(filename || '').split('.');
    return t[t.length - 1];
}
