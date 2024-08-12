"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yaml_1 = require("yaml");
const fs_1 = __importDefault(require("fs"));
const file = fs_1.default.readFileSync('./serverless.yaml', 'utf8');
const result = (0, yaml_1.parse)(file);
if (!result.functions) {
    console.log('Your .yaml file is missing a functions declaration. Please include one');
}
else if (!result.functions) {
    // null
}
//# sourceMappingURL=index.js.map