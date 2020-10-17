"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = 3333 || process.env.PORT;
app.get('/', function (req, res) {
    return res.json({ ok: 'Hello world 🌎' });
});
app.listen(3333, function () {
    console.log("\uD83D\uDE80 Server running on PORT " + PORT + " \uD83D\uDE0E");
});
