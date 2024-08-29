import { findUpMultiple } from 'find-up';

export async function findConfigPath() {
	const [jsonPath, yamlPath] = await findUpMultiple([
		'serverless.y?aml',
		'lambda-local-router.config.json',
	]); // match .yaml and .yml

	return { jsonPath, yamlPath };
}
