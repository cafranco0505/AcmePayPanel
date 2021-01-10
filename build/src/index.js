"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const app = express_1.default();
app.use(cors_1.default);
// objetos json
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// rutas
app.use(indexRoutes_1.default);
app.listen(3000);
console.log('Server on port', 3000);
