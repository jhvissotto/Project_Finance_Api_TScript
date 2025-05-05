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
const _1 = require(".");
function api_resources() {
    return __awaiter(this, void 0, void 0, function* () {
        const mock_url = _1.api.info.sample_req;
        const mock_data = _1.api.info.sample_res;
        const endpoint = _1.api.info.endpoint({ TICKER: 'MSFT' });
        const res = yield _1.api.info.get({ TICKER: 'MSFT' });
    });
}
function api_consume() {
    return __awaiter(this, void 0, void 0, function* () {
        yield _1.api.info.get({ TICKER: 'MSFT' });
        yield _1.api.performance_annual.get({ TICKER: 'MSFT' });
        yield _1.api.market_history.get({ TICKER: 'MSFT', period: '1mo', until: 'max' });
        yield _1.api.financial_list.get({ pages: 1 });
        yield _1.api.financial_raw.get({ slug: 'microsoft' });
        yield _1.api.financial_ratios.get({ slug: 'microsoft' });
        yield _1.api.options_stack.get({ TICKER: 'MSFT' });
    });
}
