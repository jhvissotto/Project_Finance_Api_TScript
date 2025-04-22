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
exports.sample_res = exports.sample_req = void 0;
exports.get = get;
const config_1 = require("./config");
const client_1 = require("./client");
// ================================================== //
// ==================== Endpoint ==================== //
// ================================================== //
const endpoint = ({ TICKER }) => (0, config_1.baseUrl)(`/performance-annual/${TICKER}`);
function get(_a) {
    return __awaiter(this, arguments, void 0, function* ({ TICKER }) {
        return yield (0, client_1.client)(endpoint({ TICKER }))
            .then(x => x.json())
            .catch(x => { });
    });
}
// ================================================ //
// ==================== Sample ==================== //
// ================================================ //
exports.sample_req = 'https://proj-finance-backend.onrender.com/performance-annual/MSFT';
exports.sample_res = {
    "img_src64_cum": "...",
    "img_src64_var": "...",
};
