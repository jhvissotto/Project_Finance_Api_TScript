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
function endpoint({ TICKER }, query) {
    return helpers_1.builder.stringify([config_1.config.baseUrl, 'equity-logomark', TICKER], query);
}
function get(params_1) {
    return __awaiter(this, arguments, void 0, function* (params, query = exports.initial) {
        return yield (0, client_1.client)(endpoint(params, query))
            .then(x => x.json())
            .catch(() => { });
    });
}
// ================================================ //
// ==================== Sample ==================== //
// ================================================ //
exports.sample_req = 'https://project-finance-backend.onrender.com/equity-logomark/MSFT?dim=128';
exports.sample_res = {
    "imgB64": "UklGRqQAAABXRUJQVlA4TJgAAAAvf8AfEBK3AduGzYs8kk+A72lkkraT1bkdBAKEc88GCASSWPZ3WwFpbSs5JPiZxNbsQGQIUJfQ7CBMgGqqVaXC7m5k0Y2mOfrHf2co0etSdbPqqFzFI9Iooh11b7SiVKFaxSoaEUUSofm7H38zqs1spsGICUPz39zN5mP232DKgm3WvWyxNE+1ucwYzNhj08z+JbB7/Hd4Ag=="
};
