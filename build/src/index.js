"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var app_constants_1 = require("./constants/app.constants");
dotenv_1.default.config();
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.get('/', function (req, res) {
    res.send('Hello World!');
});
exports.app.listen(app_constants_1.APP_PORT, function () {
    return console.log("Express is listening at http://localhost:".concat(app_constants_1.APP_PORT));
});
//# sourceMappingURL=index.js.map