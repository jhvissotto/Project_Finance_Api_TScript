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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample_res = exports.sample_req = exports.initial = void 0;
exports.endpoint = endpoint;
exports.get = get;
const helpers_1 = require("./helpers");
const config_1 = require("./config");
const client_1 = require("./client");
// ================================================== //
// ==================== Endpoint ==================== //
// ================================================== //
exports.initial = {};
function endpoint({ TICKER }) {
    return helpers_1.builder.stringify([config_1.config.baseUrl, 'performance-annual', TICKER], {});
}
function get(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, client_1.client)(endpoint(params))
            .then(x => x.json())
            .catch(() => { });
    });
}
// ================================================ //
// ==================== Sample ==================== //
// ================================================ //
exports.sample_req = 'https://project-finance-backend.onrender.com/performance-annual/MSFT';
exports.sample_res = {
    "img_src64_cum": "...",
    "img_src64_var": "...",
};
