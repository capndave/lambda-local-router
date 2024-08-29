// import fs from 'node:fs';
// import { parse } from 'yaml';

/**
 * TODO: Write YAML parser
 * Change readfilesync to async
 * Make this function async
 */

export function parseYaml(path: string) {
	console.log('Parsing YAML', path);

	// const file = fs.readFileSync(path, 'utf8');
	// const result = parse(file);

	// if (!result?.functions) {
	// 	console.log(
	// 		'Your .yaml file is missing a functions declaration. Please include one',
	// 	);
	// }

	return 'parsedYaml';
}
