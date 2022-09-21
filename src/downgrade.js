import assert from "assert";
import path from "path";

console.log(`Current Node Version: ${process.version}`)

const importer1 = './src/demo.ts';
const importer2 = './src/demo.mts';
const importer3 = './src/demo.mjs';
const importer4 = './src/demo.js';


const importers = [
    import(path.resolve(importer1)),
    import(path.resolve(importer2)),
    import(path.resolve(importer3)),
    import(path.resolve(importer4)),
]

const expected  =[
    'here is .ts extension',
    'here is .mts extension',
    'here is .mjs extension',
    'here is .js extension'
]

Promise
    .all(importers)
    .then(mods => {
        mods.forEach((mod, ind) => {
            assert.equal(mod.default(), expected[ind])
        })
    })
    .catch(err => {
        console.error(err)
        process.exit(-1);
    })

export {};
