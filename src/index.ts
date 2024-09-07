import { findConfigPath } from './find-config-path'
import { parseJson } from './parsers/json'
import { parseYaml } from './parsers/yaml'
import { extname } from 'node:path'
import { start } from './server/server'

const configPath = await findConfigPath()

let config = undefined
if (!configPath) {
	console.warn(`
		No config file for lambda-local-router was found.
		Please include a lambda-local-router.config.json file or
		a serverless.yaml file in your project root.
    `)
} else if (extname(configPath) === 'json') {
	config = parseJson(configPath)
} else {
	config = parseYaml(configPath)
}

const endpoints = [
	{ method: 'GET', route: '/puppies', handler: './src/get.handler' },
	{ method: 'PUT', route: '/puppies', handler: './src/put.handler' },
	{ method: 'ANY', route: '*', handler: './src/index.handler' },
]

start(endpoints)

console.log(config)

// TODO: convert config into routes
// TODO: create a local web server with node using routes
