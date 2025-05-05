"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initial = void 0;
exports.endpoint = endpoint;
const helpers_1 = require("./helpers");
const config_1 = require("./config");
// ================================================== //
// ==================== Endpoint ==================== //
// ================================================== //
exports.initial = {};
function endpoint({ TICKER }, query = exports.initial) {
    return helpers_1.builder.stringify([config_1.config.baseUrl, 'equity-renderlogo', TICKER], query);
}
