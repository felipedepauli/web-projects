"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLController = void 0;
const shortid_1 = __importDefault(require("shortid"));
const Constant_1 = require("../config/Constant");
const URL_1 = require("../model/URL");
class URLController {
    shorten(req, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { originURL } = req.body;
            const url = yield URL_1.URLModel.findOne({ originURL });
            if (url) {
                response.json(url);
                return;
            }
            const hash = shortid_1.default.generate();
            const shortURL = `${Constant_1.config.API_URL}/${hash}`;
            const newUrl = yield URL_1.URLModel.create({ hash, shortURL, originURL });
            response.json({ originURL, hash, shortURL });
        });
    }
    redirect(req, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { hash } = req.params;
            const url = {
                originURL: "https://cloud.mongodb.com/v2/62265b85cc0f7c5a9f2c7215#clusters",
                hash: 'IPMDvhS_D',
                shortURL: "http://localhost:5000/IPMDvhS_D"
            };
            response.redirect(url.originURL);
        });
    }
}
exports.URLController = URLController;
