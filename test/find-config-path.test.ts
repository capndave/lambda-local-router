import fs from 'node:fs'
import { join } from 'node:path'
import { findConfigPath } from '../src/find-config-path'

// This test will fail if there are config files hanging out in parent dirs!
it('returns undefined if no config files exist', async () => {
	const result = await findConfigPath()
	expect(result).toBeUndefined()
})

it('finds a serverless.yaml if one exists', async () => {
	const filename = join(__dirname, '..', 'serverless.yaml')
	await fs.promises.writeFile(filename, 'hi')

	const path = await findConfigPath()
	expect(path).toBeTruthy()

	await fs.promises.unlink(path as string)
})

it('finds a lambda-local-router.config.json if one exists', async () => {
	const filename = join(__dirname, '..', 'lambda-local-router.config.json')
	await fs.promises.writeFile(filename, 'hi')

	const path = await findConfigPath()
	expect(path).toBeTruthy()

	await fs.promises.unlink(path as string)
})

it('returns the path for the json file if both a json and yaml file exist', async () => {
	const jsonFile = join(__dirname, '..', 'lambda-local-router.config.json')
	const yamlFile = join(__dirname, '..', 'serverless.yaml')
	await Promise.all([
		fs.promises.writeFile(jsonFile, 'hi'),
		fs.promises.writeFile(yamlFile, 'hi'),
	])

	const path = await findConfigPath()
	const result = path?.substring(path.length - 5)
	expect(result).toBe('.json')

	await Promise.all([
		fs.promises.unlink(jsonFile),
		fs.promises.unlink(yamlFile),
	])
})
