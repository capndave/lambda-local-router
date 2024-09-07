import { createServer } from 'node:http'
import lambdaLocal from 'lambda-local'

const hostname = '127.0.0.1'
const port = 3000

export function start(endpoints) {
	const server = createServer(async (req, res) => {
		res.statusCode = 200
		res.setHeader('Content-Type', 'text/plain')

		const route = getRoute(endpoints, req)

		try {
			const response = await lambdaLocal.execute({
				event: req,
				lambdaPath: route.handler.replace(/\.[^/.]+$/, ''), // remove the ".handler" from filename if it's there
			})
			res.end(response)
		} catch (error) {
			console.error(error)
			res.writeHead(500)
			res.end(
				`Lambda execution failed with the following response: ${response}`,
			)
		}
	})

	server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/`)
	})
}

function getRoute(endpoints, req) {
	const { url, method } = req
	return endpoints.find(
		(endpoint) => endpoint.method === method && endpoint.route === url,
	)
}
