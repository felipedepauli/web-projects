"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const URLControllers_1 = require("./src/controller/URLControllers");
const MongoConnection_1 = require("./src/database/MongoConnection");
const api = (0, express_1.default)();
api.use(express_1.default.json());
const urlController = new URLControllers_1.URLController();
const database = new MongoConnection_1.MongoConnection();
database.connect();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);
api.get("/", (req, res) => {
    res.send("<h1>Crazy Title</h1>");
});
api.listen(5000, () => {
    console.log('Express listening');
});
