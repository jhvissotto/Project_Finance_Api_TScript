"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.baseUrl = baseUrl;
exports.config = {
    baseUrl: 'https://project-finance-backend.onrender.com',
};
function baseUrl(endpoint) {
    return exports.config.baseUrl + endpoint;
}
