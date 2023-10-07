import express from "express";
import { URLController } from "./src/controller/URLControllers";
import { MongoConnection } from "./src/database/MongoConnection";

const api = express();
api.use(express.json())

const urlController = new URLController();
const database = new MongoConnection();

database.connect()

api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.get("/", (req, res) => {
    res.send("<h1>Crazy Title</h1>");
})

api.listen(5000, () => {
    console.log('Express listening');
})
