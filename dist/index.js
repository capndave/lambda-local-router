"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findup_sync_1 = __importDefault(require("findup-sync"));
const json_1 = require("./parsers/json");
const yaml_1 = require("./parsers/yaml");
const yamlPath = (0, findup_sync_1.default)('serverless.y?aml', { nocase: true }); // match .yaml and .yml
// TODO: add support for jsonc and js config files
const jsonPath = (0, findup_sync_1.default)('lambda-local-router.config.json', {
    nocase: true,
});
let config = undefined;
if (!(yamlPath || jsonPath)) {
    console.warn(`
		No config file for lambda-local-router was found.
		Please include a lambda-local-router.config.json file or
		a serverless.yaml file in your project root.
    `);
}
else if (jsonPath) {
    config = (0, json_1.parseJson)(jsonPath);
}
else {
    config = (0, yaml_1.parseYaml)(yamlPath);
}
console.log(config);
// TODO: convert config into routes
// TODO: create a local web server with node using routes
//# sourceMappingURL=index.js.map