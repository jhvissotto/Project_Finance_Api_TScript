"use strict";
// import { config } from './config'
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = client;
function client(endpoint) {
    return fetch(endpoint);
}
