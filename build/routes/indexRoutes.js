"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const indexController_1 = require("../controllers/indexController");
router.get('/getEmployees', indexController_1.getEmployees);
exports.default = router;
