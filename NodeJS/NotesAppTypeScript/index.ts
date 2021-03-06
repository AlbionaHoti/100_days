const yargs = require('yargs/yargs');

/*
    The TypeScript definitions take into account yargs' `type`
    key and the presence of `demandOption` / `default` 
*/

const argv = yargs(process.argv.slice(2)).options({
    a: { type: 'boolean', default: false },
    b: { type: 'string', demandOption: true },
    c: { type: 'number', alias: 'chill' },
    d: { type: 'array' },
    e: { type: 'count' },
    f: { choices: ['1', '2', '3'] }
}).argv;

/*
    The result in an `argv` that's typed like so:


{
    [x: string]: unknown;
    a: boolean;
    b: string;
    c: number | undefined;
    d: (string | number)[] | undefined;
    e: number;
    f: string | undefined;
    _: string[];
    $0: string;
}

*/

// You will likely want to define an interface for your application,
// describing the form that the parsed `argv` will take:

interface Arguments {
    [x: string]: unknown;
    a: boolean;
    b: string;
    c: number | undefined;
    d: [string | number][] | undefined;
    e: number;
    f: string | undefined;
}

// To improve the `choices` option typing can also specify its types:

type Difficulty = 'normal' | 'nightmare' | 'hell';
const difficulties: ReadonlyArray<Difficulty> = ['normal', 'nightmare', 'hell'];

const argv = yargs.option('difficulyy', {
    choices: difficulties,
    demandOption: true
}).argv;