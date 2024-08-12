import { parse } from 'yaml';
import fs from 'node:fs';

console.log(require.main);

// exit if no serverless.yaml exists
if (fs.existsSync('../serverless.yaml')) {
	const file = fs.readFileSync('../serverless.yaml', 'utf8');
	const result = parse(file);

	if (!result?.functions) {
		console.log(
			'Your .yaml file is missing a functions declaration. Please include one',
		);
	}
}
