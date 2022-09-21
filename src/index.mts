import assert from "assert";
import path from "path";

console.log(`Current Node Version: ${process.version}`)

let importer = './src/demo.ts';
let mod = await import(path.resolve(importer))
mod.default()
assert.equal(mod.default(), 'here is .ts extension')


importer = './src/demo.mts';
mod = await import(path.resolve(importer))
assert.equal(mod.default(), 'here is .mts extension')

importer = './src/demo.mjs';
mod = await import(path.resolve(importer))
mod.default()
assert.equal(mod.default(), 'here is .mts extension')

importer = './src/demo.js';
mod = await import(path.resolve(importer))
mod.default()
assert.equal(mod.default(), 'here is .ts extension')

export {};
