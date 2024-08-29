import { findConfigPath } from './find-config-path';
import { parseJson } from './parsers/json';
import { parseYaml } from './parsers/yaml';

let config = undefined;
if (!(yamlPath || jsonPath)) {
	console.warn(`
		No config file for lambda-local-router was found.
		Please include a lambda-local-router.config.json file or
		a serverless.yaml file in your project root.
    `);
} else if (jsonPath) {
	config = parseJson(jsonPath as string);
} else {
	config = parseYaml(yamlPath as string);
}

console.log(config);

// TODO: convert config into routes
// TODO: create a local web server with node using routes
