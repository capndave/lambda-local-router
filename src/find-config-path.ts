import { findUp } from 'find-up'

export async function findConfigPath() {
	const jsonPath = await findUp('lambda-local-router.config.json')

	if (jsonPath) {
		const jsonPath = await findUp('lambda-local-router.config.json')
		return jsonPath
	}

	return findUp('serverless.yaml')
}
