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
exports.sample_res = exports.sample_req = exports.endpoint = void 0;
exports.get = get;
const config_1 = require("./config");
const client_1 = require("./client");
// ================================================== //
// ==================== Endpoint ==================== //
// ================================================== //
const endpoint = ({ pages }) => (0, config_1.baseUrl)(`/financial-list?pages=${pages}`);
exports.endpoint = endpoint;
function get(_a) {
    return __awaiter(this, arguments, void 0, function* ({ pages = 1 }) {
        return yield (0, client_1.client)((0, exports.endpoint)({ pages }))
            .then(x => x.json())
            .catch(() => []);
    });
}
// ================================================ //
// ==================== Sample ==================== //
// ================================================ //
exports.sample_req = 'https://proj-finance-backend.onrender.com/financial-list?pages=1';
exports.sample_res = [
    {
        "Country": "USA",
        "Ticker": "AAPL",
        "Name": "Apple",
        "Slug": "apple"
    },
    {
        "Country": "USA",
        "Ticker": "MSFT",
        "Name": "Microsoft",
        "Slug": "microsoft"
    },
    {
        "Country": "USA",
        "Ticker": "NVDA",
        "Name": "NVIDIA",
        "Slug": "nvidia"
    },
    {
        "Country": "USA",
        "Ticker": "AMZN",
        "Name": "Amazon",
        "Slug": "amazon"
    },
    {
        "Country": "USA",
        "Ticker": "GOOG",
        "Name": "Alphabet (Google)",
        "Slug": "alphabet-google"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "2222.SR",
        "Name": "Saudi Aramco",
        "Slug": "saudi-aramco"
    },
    {
        "Country": "USA",
        "Ticker": "META",
        "Name": "Meta Platforms (Facebook)",
        "Slug": "meta-platforms"
    },
    {
        "Country": "USA",
        "Ticker": "BRK-B",
        "Name": "Berkshire Hathaway",
        "Slug": "berkshire-hathaway"
    },
    {
        "Country": "Taiwan",
        "Ticker": "TSM",
        "Name": "TSMC",
        "Slug": "tsmc"
    },
    {
        "Country": "USA",
        "Ticker": "TSLA",
        "Name": "Tesla",
        "Slug": "tesla"
    },
    {
        "Country": "USA",
        "Ticker": "AVGO",
        "Name": "Broadcom",
        "Slug": "broadcom"
    },
    {
        "Country": "USA",
        "Ticker": "LLY",
        "Name": "Eli Lilly",
        "Slug": "eli-lilly"
    },
    {
        "Country": "USA",
        "Ticker": "WMT",
        "Name": "Walmart",
        "Slug": "walmart"
    },
    {
        "Country": "USA",
        "Ticker": "JPM",
        "Name": "JPMorgan Chase",
        "Slug": "jp-morgan-chase"
    },
    {
        "Country": "USA",
        "Ticker": "V",
        "Name": "Visa",
        "Slug": "visa"
    },
    {
        "Country": "China",
        "Ticker": "TCEHY",
        "Name": "Tencent",
        "Slug": "tencent"
    },
    {
        "Country": "USA",
        "Ticker": "XOM",
        "Name": "Exxon Mobil",
        "Slug": "exxon-mobil"
    },
    {
        "Country": "USA",
        "Ticker": "MA",
        "Name": "Mastercard",
        "Slug": "mastercard"
    },
    {
        "Country": "USA",
        "Ticker": "UNH",
        "Name": "UnitedHealth",
        "Slug": "united-health"
    },
    {
        "Country": "USA",
        "Ticker": "COST",
        "Name": "Costco",
        "Slug": "costco"
    },
    {
        "Country": "USA",
        "Ticker": "JNJ",
        "Name": "Johnson & Johnson",
        "Slug": "johnson-and-johnson"
    },
    {
        "Country": "USA",
        "Ticker": "PG",
        "Name": "Procter & Gamble",
        "Slug": "procter-and-gamble"
    },
    {
        "Country": "USA",
        "Ticker": "NFLX",
        "Name": "Netflix",
        "Slug": "netflix"
    },
    {
        "Country": "USA",
        "Ticker": "ORCL",
        "Name": "Oracle",
        "Slug": "oracle"
    },
    {
        "Country": "USA",
        "Ticker": "ABBV",
        "Name": "AbbVie",
        "Slug": "abbvie"
    },
    {
        "Country": "USA",
        "Ticker": "HD",
        "Name": "Home Depot",
        "Slug": "home-depot"
    },
    {
        "Country": "China",
        "Ticker": "BABA",
        "Name": "Alibaba",
        "Slug": "alibaba"
    },
    {
        "Country": "USA",
        "Ticker": "BAC",
        "Name": "Bank of America",
        "Slug": "bank-of-america"
    },
    {
        "Country": "Germany",
        "Ticker": "SAP",
        "Name": "SAP",
        "Slug": "sap"
    },
    {
        "Country": "France",
        "Ticker": "MC.PA",
        "Name": "LVMH",
        "Slug": "lvmh"
    },
    {
        "Country": "USA",
        "Ticker": "KO",
        "Name": "Coca-Cola",
        "Slug": "coca-cola"
    },
    {
        "Country": "USA",
        "Ticker": "TMUS",
        "Name": "T-Mobile US",
        "Slug": "t-mobile-us"
    },
    {
        "Country": "China",
        "Ticker": "1398.HK",
        "Name": "ICBC",
        "Slug": "icbc"
    },
    {
        "Country": "Denmark",
        "Ticker": "NVO",
        "Name": "Novo Nordisk",
        "Slug": "novo-nordisk"
    },
    {
        "Country": "USA",
        "Ticker": "CVX",
        "Name": "Chevron",
        "Slug": "chevron"
    },
    {
        "Country": "France",
        "Ticker": "RMS.PA",
        "Name": "Hermès",
        "Slug": "hermes-international"
    },
    {
        "Country": "China",
        "Ticker": "600519.SS",
        "Name": "Kweichow Moutai",
        "Slug": "kweichow-moutai"
    },
    {
        "Country": "Switzerland",
        "Ticker": "ROG.SW",
        "Name": "Roche",
        "Slug": "roche"
    },
    {
        "Country": "Netherlands",
        "Ticker": "ASML",
        "Name": "ASML",
        "Slug": "asml"
    },
    {
        "Country": "Switzerland",
        "Ticker": "NESN.SW",
        "Name": "Nestlé",
        "Slug": "nestle"
    },
    {
        "Country": "S. Korea",
        "Ticker": "005930.KS",
        "Name": "Samsung",
        "Slug": "samsung"
    },
    {
        "Country": "USA",
        "Ticker": "CRM",
        "Name": "Salesforce",
        "Slug": "salesforce"
    },
    {
        "Country": "China",
        "Ticker": "601288.SS",
        "Name": "Agricultural Bank of China",
        "Slug": "agricultural-bank-of-china"
    },
    {
        "Country": "USA",
        "Ticker": "PM",
        "Name": "Philip Morris International",
        "Slug": "philip-morris"
    },
    {
        "Country": "USA",
        "Ticker": "CSCO",
        "Name": "Cisco",
        "Slug": "cisco"
    },
    {
        "Country": "China",
        "Ticker": "601939.SS",
        "Name": "China Construction Bank",
        "Slug": "china-construction-bank"
    },
    {
        "Country": "UAE",
        "Ticker": "IHC.AE",
        "Name": "International Holding Company",
        "Slug": "international-holding-company"
    },
    {
        "Country": "China",
        "Ticker": "0941.HK",
        "Name": "China Mobile",
        "Slug": "china-mobile"
    },
    {
        "Country": "USA",
        "Ticker": "WFC",
        "Name": "Wells Fargo",
        "Slug": "wells-fargo"
    },
    {
        "Country": "Japan",
        "Ticker": "TM",
        "Name": "Toyota",
        "Slug": "toyota"
    },
    {
        "Country": "USA",
        "Ticker": "IBM",
        "Name": "IBM",
        "Slug": "ibm"
    },
    {
        "Country": "USA",
        "Ticker": "ABT",
        "Name": "Abbott Laboratories",
        "Slug": "abbott-laboratories"
    },
    {
        "Country": "UK",
        "Ticker": "AZN",
        "Name": "AstraZeneca",
        "Slug": "astrazeneca"
    },
    {
        "Country": "USA",
        "Ticker": "MRK",
        "Name": "Merck",
        "Slug": "merck"
    },
    {
        "Country": "USA",
        "Ticker": "MCD",
        "Name": "McDonald",
        "Slug": "mcdonald"
    },
    {
        "Country": "UK",
        "Ticker": "LIN",
        "Name": "Linde",
        "Slug": "linde"
    },
    {
        "Country": "UK",
        "Ticker": "SHEL",
        "Name": "Shell",
        "Slug": "shell"
    },
    {
        "Country": "Switzerland",
        "Ticker": "NVS",
        "Name": "Novartis",
        "Slug": "novartis"
    },
    {
        "Country": "China",
        "Ticker": "601988.SS",
        "Name": "Bank of China",
        "Slug": "bank-of-china"
    },
    {
        "Country": "USA",
        "Ticker": "GE",
        "Name": "General Electric",
        "Slug": "general-electric"
    },
    {
        "Country": "USA",
        "Ticker": "PEP",
        "Name": "Pepsico",
        "Slug": "pepsico"
    },
    {
        "Country": "UK",
        "Ticker": "HSBC",
        "Name": "HSBC",
        "Slug": "hsbc"
    },
    {
        "Country": "USA",
        "Ticker": "T",
        "Name": "AT&T",
        "Slug": "att"
    },
    {
        "Country": "India",
        "Ticker": "RELIANCE.NS",
        "Name": "Reliance Industries",
        "Slug": "reliance-industries"
    },
    {
        "Country": "Netherlands",
        "Ticker": "PRX.AS",
        "Name": "Prosus",
        "Slug": "prosus"
    },
    {
        "Country": "France",
        "Ticker": "OR.PA",
        "Name": "L'Oréal",
        "Slug": "l-oreal"
    },
    {
        "Country": "USA",
        "Ticker": "PLTR",
        "Name": "Palantir",
        "Slug": "palantir"
    },
    {
        "Country": "Ireland",
        "Ticker": "ACN",
        "Name": "Accenture",
        "Slug": "accenture"
    },
    {
        "Country": "USA",
        "Ticker": "VZ",
        "Name": "Verizon",
        "Slug": "verizon"
    },
    {
        "Country": "China",
        "Ticker": "0857.HK",
        "Name": "PetroChina",
        "Slug": "petro-china"
    },
    {
        "Country": "USA",
        "Ticker": "AXP",
        "Name": "American Express",
        "Slug": "american-express"
    },
    {
        "Country": "USA",
        "Ticker": "MS",
        "Name": "Morgan Stanley",
        "Slug": "morgan-stanley"
    },
    {
        "Country": "USA",
        "Ticker": "TMO",
        "Name": "Thermo Fisher Scientific",
        "Slug": "thermo-fisher-scientific"
    },
    {
        "Country": "Germany",
        "Ticker": "DTE.DE",
        "Name": "Deutsche Telekom",
        "Slug": "deutsche-telekom"
    },
    {
        "Country": "Germany",
        "Ticker": "SIE.DE",
        "Name": "Siemens",
        "Slug": "siemens"
    },
    {
        "Country": "USA",
        "Ticker": "DIS",
        "Name": "Walt Disney",
        "Slug": "walt-disney"
    },
    {
        "Country": "USA",
        "Ticker": "ISRG",
        "Name": "Intuitive Surgical",
        "Slug": "intuitive-surgical"
    },
    {
        "Country": "USA",
        "Ticker": "RTX",
        "Name": "RTX",
        "Slug": "raytheon-technologies"
    },
    {
        "Country": "Mexico",
        "Ticker": "FMX",
        "Name": "Fomento Económico Mexicano",
        "Slug": "fomento-economico-mexicano"
    },
    {
        "Country": "USA",
        "Ticker": "INTU",
        "Name": "Intuit",
        "Slug": "intuit"
    },
    {
        "Country": "India",
        "Ticker": "HDB",
        "Name": "HDFC Bank",
        "Slug": "hdfc-bank"
    },
    {
        "Country": "USA",
        "Ticker": "GS",
        "Name": "Goldman Sachs",
        "Slug": "goldman-sachs"
    },
    {
        "Country": "USA",
        "Ticker": "BX",
        "Name": "Blackstone Group",
        "Slug": "blackstone-group"
    },
    {
        "Country": "USA",
        "Ticker": "AMGN",
        "Name": "Amgen",
        "Slug": "amgen"
    },
    {
        "Country": "USA",
        "Ticker": "QCOM",
        "Name": "QUALCOMM",
        "Slug": "qualcomm"
    },
    {
        "Country": "USA",
        "Ticker": "PGR",
        "Name": "Progressive",
        "Slug": "progressive"
    },
    {
        "Country": "China",
        "Ticker": "PDD",
        "Name": "PDD Holdings (Pinduoduo)",
        "Slug": "pinduoduo"
    },
    {
        "Country": "USA",
        "Ticker": "AMD",
        "Name": "AMD",
        "Slug": "amd"
    },
    {
        "Country": "USA",
        "Ticker": "ADBE",
        "Name": "Adobe",
        "Slug": "adobe"
    },
    {
        "Country": "China",
        "Ticker": "XIACF",
        "Name": "Xiaomi",
        "Slug": "xiaomi"
    },
    {
        "Country": "USA",
        "Ticker": "NOW",
        "Name": "ServiceNow",
        "Slug": "servicenow"
    },
    {
        "Country": "China",
        "Ticker": "002594.SZ",
        "Name": "BYD",
        "Slug": "byd"
    },
    {
        "Country": "USA",
        "Ticker": "TXN",
        "Name": "Texas Instruments",
        "Slug": "texas-instruments"
    },
    {
        "Country": "Canada",
        "Ticker": "RY",
        "Name": "Royal Bank Of Canada",
        "Slug": "royal-bank-of-canada"
    },
    {
        "Country": "Australia",
        "Ticker": "CBA.AX",
        "Name": "Commonwealth Bank",
        "Slug": "commonwealth-bank"
    },
    {
        "Country": "USA",
        "Ticker": "CAT",
        "Name": "Caterpillar",
        "Slug": "caterpillar"
    },
    {
        "Country": "Japan",
        "Ticker": "MUFG",
        "Name": "Mitsubishi UFJ Financial",
        "Slug": "mitsubishi-ufj-financial"
    },
    {
        "Country": "Spain",
        "Ticker": "IDEXY",
        "Name": "Inditex",
        "Slug": "inditex"
    },
    {
        "Country": "USA",
        "Ticker": "SPGI",
        "Name": "S&P Global",
        "Slug": "sp-global"
    },
    {
        "Country": "Japan",
        "Ticker": "SONY",
        "Name": "Sony",
        "Slug": "sony"
    },
    {
        "Country": "China",
        "Ticker": "300750.SZ",
        "Name": "CATL",
        "Slug": "catl"
    },
    {
        "Country": "India",
        "Ticker": "TCS.NS",
        "Name": "Tata Consultancy Services",
        "Slug": "tata-consultancy-services"
    },
    {
        "Country": "USA",
        "Ticker": "UBER",
        "Name": "Uber",
        "Slug": "uber"
    },
    {
        "Country": "USA",
        "Ticker": "BSX",
        "Name": "Boston Scientific",
        "Slug": "boston-scientific"
    },
    {
        "Country": "USA",
        "Ticker": "BKNG",
        "Name": "Booking Holdings (Booking.com)",
        "Slug": "booking-holdings"
    },
    {
        "Country": "Germany",
        "Ticker": "ALV.DE",
        "Name": "Allianz SE",
        "Slug": "allianz"
    },
    {
        "Country": "UK",
        "Ticker": "UL",
        "Name": "Unilever",
        "Slug": "unilever"
    },
    {
        "Country": "France",
        "Ticker": "TTE",
        "Name": "TotalEnergies",
        "Slug": "totalenergies"
    },
    {
        "Country": "USA",
        "Ticker": "NEE",
        "Name": "Nextera Energy",
        "Slug": "nextera-energy"
    },
    {
        "Country": "USA",
        "Ticker": "DHR",
        "Name": "Danaher",
        "Slug": "danaher"
    },
    {
        "Country": "USA",
        "Ticker": "BLK",
        "Name": "BlackRock",
        "Slug": "blackrock"
    },
    {
        "Country": "China",
        "Ticker": "3968.HK",
        "Name": "CM Bank",
        "Slug": "cm-bank"
    },
    {
        "Country": "USA",
        "Ticker": "PFE",
        "Name": "Pfizer",
        "Slug": "pfizer"
    },
    {
        "Country": "USA",
        "Ticker": "SCHW",
        "Name": "Charles Schwab",
        "Slug": "charles-schwab"
    },
    {
        "Country": "USA",
        "Ticker": "SYK",
        "Name": "Stryker Corporation",
        "Slug": "stryker-corporation"
    },
    {
        "Country": "Netherlands",
        "Ticker": "AIR.PA",
        "Name": "Airbus",
        "Slug": "airbus"
    },
    {
        "Country": "USA",
        "Ticker": "UNP",
        "Name": "Union Pacific Corporation",
        "Slug": "union-pacific-corporation"
    },
    {
        "Country": "USA",
        "Ticker": "CMCSA",
        "Name": "Comcast",
        "Slug": "comcast"
    },
    {
        "Country": "USA",
        "Ticker": "GILD",
        "Name": "Gilead Sciences",
        "Slug": "gilead-sciences"
    },
    {
        "Country": "USA",
        "Ticker": "HON",
        "Name": "Honeywell",
        "Slug": "honeywell"
    },
    {
        "Country": "USA",
        "Ticker": "TJX",
        "Name": "TJX Companies",
        "Slug": "tjx-companies"
    },
    {
        "Country": "France",
        "Ticker": "SNY",
        "Name": "Sanofi",
        "Slug": "sanofi"
    },
    {
        "Country": "USA",
        "Ticker": "COP",
        "Name": "ConocoPhillips",
        "Slug": "conocophillips"
    },
    {
        "Country": "France",
        "Ticker": "SU.PA",
        "Name": "Schneider Electric",
        "Slug": "schneider-electric"
    },
    {
        "Country": "France",
        "Ticker": "EL.PA",
        "Name": "EssilorLuxottica",
        "Slug": "essilor-luxottica"
    },
    {
        "Country": "USA",
        "Ticker": "C",
        "Name": "Citigroup",
        "Slug": "citigroup"
    },
    {
        "Country": "USA",
        "Ticker": "LOW",
        "Name": "Lowe's Companies",
        "Slug": "lowes-companies"
    },
    {
        "Country": "USA",
        "Ticker": "BA",
        "Name": "Boeing",
        "Slug": "boeing"
    },
    {
        "Country": "USA",
        "Ticker": "DE",
        "Name": "Deere & Company (John Deere)",
        "Slug": "deere-company"
    },
    {
        "Country": "China",
        "Ticker": "601318.SS",
        "Name": "Ping An Insurance",
        "Slug": "ping-an-insurance"
    },
    {
        "Country": "USA",
        "Ticker": "BMY",
        "Name": "Bristol-Myers Squibb",
        "Slug": "bristol-myers-squibb"
    },
    {
        "Country": "China",
        "Ticker": "601628.SS",
        "Name": "China Life Insurance",
        "Slug": "china-life-insurance"
    },
    {
        "Country": "China",
        "Ticker": "0883.HK",
        "Name": "CNOOC",
        "Slug": "cnooc"
    },
    {
        "Country": "USA",
        "Ticker": "ADP",
        "Name": "Automatic Data Processing",
        "Slug": "automatic-data-processing"
    },
    {
        "Country": "USA",
        "Ticker": "VRTX",
        "Name": "Vertex Pharmaceuticals",
        "Slug": "vertex-pharmaceuticals"
    },
    {
        "Country": "China",
        "Ticker": "3690.HK",
        "Name": "Meituan",
        "Slug": "meituan-dianping"
    },
    {
        "Country": "USA",
        "Ticker": "FI",
        "Name": "Fiserv",
        "Slug": "fiserv"
    },
    {
        "Country": "Canada",
        "Ticker": "SHOP",
        "Name": "Shopify",
        "Slug": "shopify"
    },
    {
        "Country": "Australia",
        "Ticker": "BHP",
        "Name": "BHP Group",
        "Slug": "bhp-group"
    },
    {
        "Country": "India",
        "Ticker": "BHARTIARTL.NS",
        "Name": "Bharti Airtel",
        "Slug": "bharti-airtel"
    },
    {
        "Country": "Switzerland",
        "Ticker": "CB",
        "Name": "Chubb",
        "Slug": "chubb"
    },
    {
        "Country": "USA",
        "Ticker": "MMC",
        "Name": "Marsh & McLennan Companies",
        "Slug": "marsh-and-mclennan-companies"
    },
    {
        "Country": "Belgium",
        "Ticker": "BUD",
        "Name": "Anheuser-Busch Inbev",
        "Slug": "anheuser-busch-inbev"
    },
    {
        "Country": "USA",
        "Ticker": "AMAT",
        "Name": "Applied Materials",
        "Slug": "applied-materials"
    },
    {
        "Country": "Ireland",
        "Ticker": "MDT",
        "Name": "Medtronic",
        "Slug": "medtronic"
    },
    {
        "Country": "India",
        "Ticker": "IBN",
        "Name": "ICICI Bank",
        "Slug": "icici-bank"
    },
    {
        "Country": "USA",
        "Ticker": "PANW",
        "Name": "Palo Alto Networks",
        "Slug": "palo-alto-networks"
    },
    {
        "Country": "USA",
        "Ticker": "SBUX",
        "Name": "Starbucks",
        "Slug": "starbucks"
    },
    {
        "Country": "Sweden",
        "Ticker": "SPOT",
        "Name": "Spotify",
        "Slug": "spotify"
    },
    {
        "Country": "UK",
        "Ticker": "ARM",
        "Name": "Arm Holdings",
        "Slug": "arm-holdings"
    },
    {
        "Country": "France",
        "Ticker": "SAF.PA",
        "Name": "Safran",
        "Slug": "safran"
    },
    {
        "Country": "France",
        "Ticker": "AI.PA",
        "Name": "Air Liquide",
        "Slug": "air-liquide"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "1120.SR",
        "Name": "Al Rajhi Bank",
        "Slug": "al-rajhi-bank"
    },
    {
        "Country": "UAE",
        "Ticker": "TAQA.AE",
        "Name": "TAQA",
        "Slug": "taqa"
    },
    {
        "Country": "USA",
        "Ticker": "KKR",
        "Name": "KKR & Co.",
        "Slug": "kohlberg-kravis-roberts"
    },
    {
        "Country": "Japan",
        "Ticker": "6501.T",
        "Name": "Hitachi",
        "Slug": "hitachi"
    },
    {
        "Country": "Ireland",
        "Ticker": "ETN",
        "Name": "Eaton",
        "Slug": "eaton"
    },
    {
        "Country": "Canada",
        "Ticker": "TD",
        "Name": "Toronto Dominion Bank",
        "Slug": "toronto-dominion-bank"
    },
    {
        "Country": "USA",
        "Ticker": "LMT",
        "Name": "Lockheed Martin",
        "Slug": "lockheed-martin"
    },
    {
        "Country": "France",
        "Ticker": "CDI.PA",
        "Name": "Dior",
        "Slug": "dior"
    },
    {
        "Country": "USA",
        "Ticker": "PLD",
        "Name": "Prologis",
        "Slug": "prologis"
    },
    {
        "Country": "China",
        "Ticker": "601088.SS",
        "Name": "China Shenhua Energy",
        "Slug": "china-shenhua-energy"
    },
    {
        "Country": "Switzerland",
        "Ticker": "CFR.SW",
        "Name": "Compagnie Financière Richemont",
        "Slug": "compagnie-financiere-richemont"
    },
    {
        "Country": "USA",
        "Ticker": "AMT",
        "Name": "American Tower",
        "Slug": "american-tower"
    },
    {
        "Country": "Spain",
        "Ticker": "IBE.MC",
        "Name": "Iberdrola",
        "Slug": "iberdrola"
    },
    {
        "Country": "Spain",
        "Ticker": "SAN",
        "Name": "Santander",
        "Slug": "santander"
    },
    {
        "Country": "USA",
        "Ticker": "MO",
        "Name": "Altria Group",
        "Slug": "altria-group"
    },
    {
        "Country": "USA",
        "Ticker": "SO",
        "Name": "Southern Company",
        "Slug": "southern-company"
    },
    {
        "Country": "Japan",
        "Ticker": "SMFG",
        "Name": "Sumitomo Mitsui Financial Group",
        "Slug": "sumitomo-mitsui-financial-group"
    },
    {
        "Country": "Switzerland",
        "Ticker": "ZURN.SW",
        "Name": "Zurich Insurance Group",
        "Slug": "zurich-insurance-group"
    },
    {
        "Country": "USA",
        "Ticker": "ICE",
        "Name": "Intercontinental Exchange",
        "Slug": "intercontinental-exchange"
    },
    {
        "Country": "Singapore",
        "Ticker": "D05.SI",
        "Name": "DBS Group",
        "Slug": "dbs"
    },
    {
        "Country": "USA",
        "Ticker": "ELV",
        "Name": "Elevance Health",
        "Slug": "elevance-health"
    },
    {
        "Country": "USA",
        "Ticker": "ADI",
        "Name": "Analog Devices",
        "Slug": "analog-devices"
    },
    {
        "Country": "Argentina",
        "Ticker": "MELI",
        "Name": "MercadoLibre",
        "Slug": "mercadolibre"
    },
    {
        "Country": "USA",
        "Ticker": "WELL",
        "Name": "Welltower",
        "Slug": "welltower"
    },
    {
        "Country": "UK",
        "Ticker": "RIO",
        "Name": "Rio Tinto",
        "Slug": "rio-tinto"
    },
    {
        "Country": "Switzerland",
        "Ticker": "UBS",
        "Name": "UBS",
        "Slug": "ubs"
    },
    {
        "Country": "USA",
        "Ticker": "INTC",
        "Name": "Intel",
        "Slug": "intel"
    },
    {
        "Country": "USA",
        "Ticker": "ANET",
        "Name": "Arista Networks",
        "Slug": "arista-networks"
    },
    {
        "Country": "Canada",
        "Ticker": "ENB",
        "Name": "Enbridge",
        "Slug": "enbridge"
    },
    {
        "Country": "USA",
        "Ticker": "MU",
        "Name": "Micron Technology",
        "Slug": "micron-technology"
    },
    {
        "Country": "France",
        "Ticker": "BNP.PA",
        "Name": "BNP Paribas",
        "Slug": "bnp-paribas"
    },
    {
        "Country": "Japan",
        "Ticker": "6861.T",
        "Name": "Keyence",
        "Slug": "keyence"
    },
    {
        "Country": "USA",
        "Ticker": "CME",
        "Name": "CME Group",
        "Slug": "cme-group"
    },
    {
        "Country": "Switzerland",
        "Ticker": "ABBN.SW",
        "Name": "ABB",
        "Slug": "abb"
    },
    {
        "Country": "USA",
        "Ticker": "DUK",
        "Name": "Duke Energy",
        "Slug": "duke-energy"
    },
    {
        "Country": "China",
        "Ticker": "600900.SS",
        "Name": "China Yangtze Power",
        "Slug": "china-yangtze-power"
    },
    {
        "Country": "USA",
        "Ticker": "NKE",
        "Name": "Nike",
        "Slug": "nike"
    },
    {
        "Country": "USA",
        "Ticker": "UPS",
        "Name": "United Parcel Service",
        "Slug": "ups"
    },
    {
        "Country": "France",
        "Ticker": "CS.PA",
        "Name": "AXA",
        "Slug": "axa"
    },
    {
        "Country": "Italy",
        "Ticker": "ISP.MI",
        "Name": "Intesa Sanpaolo",
        "Slug": "intesa-sanpaolo"
    },
    {
        "Country": "UK",
        "Ticker": "RELX",
        "Name": "RELX",
        "Slug": "relx"
    },
    {
        "Country": "USA",
        "Ticker": "WM",
        "Name": "Waste Management",
        "Slug": "waste-management"
    },
    {
        "Country": "USA",
        "Ticker": "LRCX",
        "Name": "Lam Research",
        "Slug": "lam-research"
    },
    {
        "Country": "Sweden",
        "Ticker": "INVE-B.ST",
        "Name": "Investor AB",
        "Slug": "investor-ab"
    },
    {
        "Country": "China",
        "Ticker": "600028.SS",
        "Name": "Sinopec",
        "Slug": "sinopec"
    },
    {
        "Country": "UK",
        "Ticker": "BTI",
        "Name": "British American Tobacco",
        "Slug": "british-american-tobacco"
    },
    {
        "Country": "Japan",
        "Ticker": "9983.T",
        "Name": "Fast Retailing",
        "Slug": "fast-retailing"
    },
    {
        "Country": "Brazil",
        "Ticker": "PBR",
        "Name": "Petrobras",
        "Slug": "petrobras"
    },
    {
        "Country": "S. Korea",
        "Ticker": "000660.KS",
        "Name": "SK Hynix",
        "Slug": "sk-hynix"
    },
    {
        "Country": "USA",
        "Ticker": "APP",
        "Name": "AppLovin",
        "Slug": "applovin"
    },
    {
        "Country": "Italy",
        "Ticker": "UCG.MI",
        "Name": "UniCredit",
        "Slug": "unicredit"
    },
    {
        "Country": "UK",
        "Ticker": "BP",
        "Name": "BP",
        "Slug": "bp"
    },
    {
        "Country": "USA",
        "Ticker": "CI",
        "Name": "Cigna",
        "Slug": "cigna"
    },
    {
        "Country": "USA",
        "Ticker": "KLAC",
        "Name": "KLA",
        "Slug": "kla"
    },
    {
        "Country": "USA",
        "Ticker": "AJG",
        "Name": "Arthur J. Gallagher & Co.",
        "Slug": "arthur-gallagher"
    },
    {
        "Country": "China",
        "Ticker": "0728.HK",
        "Name": "China Telecom",
        "Slug": "china-telecom"
    },
    {
        "Country": "USA",
        "Ticker": "MDLZ",
        "Name": "Mondelez",
        "Slug": "mondelez"
    },
    {
        "Country": "USA",
        "Ticker": "SHW",
        "Name": "Sherwin-Williams",
        "Slug": "sherwin-williams"
    },
    {
        "Country": "USA",
        "Ticker": "CRWD",
        "Name": "CrowdStrike",
        "Slug": "crowdstrike"
    },
    {
        "Country": "UK",
        "Ticker": "AON",
        "Name": "Aon",
        "Slug": "aon"
    },
    {
        "Country": "USA",
        "Ticker": "CVS",
        "Name": "CVS Health",
        "Slug": "cvs-health"
    },
    {
        "Country": "USA",
        "Ticker": "HCA",
        "Name": "HCA Healthcare",
        "Slug": "hca-healthcare"
    },
    {
        "Country": "Canada",
        "Ticker": "BN",
        "Name": "Brookfield Corporation",
        "Slug": "brookfield-corporation"
    },
    {
        "Country": "UK",
        "Ticker": "RR.L",
        "Name": "Rolls-Royce Holdings",
        "Slug": "rolls-royce-holdings"
    },
    {
        "Country": "USA",
        "Ticker": "MCK",
        "Name": "McKesson",
        "Slug": "mckesson"
    },
    {
        "Country": "USA",
        "Ticker": "MCO",
        "Name": "Moody's",
        "Slug": "moodys"
    },
    {
        "Country": "China",
        "Ticker": "000333.SZ",
        "Name": "Midea",
        "Slug": "midea"
    },
    {
        "Country": "Germany",
        "Ticker": "MUV2.DE",
        "Name": "Munich RE (Münchener Rück)",
        "Slug": "munich-re"
    },
    {
        "Country": "USA",
        "Ticker": "GEV",
        "Name": "GE Vernova",
        "Slug": "ge-vernova"
    },
    {
        "Country": "USA",
        "Ticker": "CTAS",
        "Name": "Cintas",
        "Slug": "cintas"
    },
    {
        "Country": "Italy",
        "Ticker": "ENEL.MI",
        "Name": "Enel",
        "Slug": "enel"
    },
    {
        "Country": "USA",
        "Ticker": "ORLY",
        "Name": "O'Reilly Automotive",
        "Slug": "o-reilly-automotive"
    },
    {
        "Country": "India",
        "Ticker": "SBIN.NS",
        "Name": "State Bank of India",
        "Slug": "state-bank-of-india"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "1299.HK",
        "Name": "AIA",
        "Slug": "aia"
    },
    {
        "Country": "Japan",
        "Ticker": "9432.T",
        "Name": "NTT (Nippon Telegraph & Telephone)",
        "Slug": "nippon-telegraph-and-telephone"
    },
    {
        "Country": "USA",
        "Ticker": "APH",
        "Name": "Amphenol",
        "Slug": "amphenol"
    },
    {
        "Country": "USA",
        "Ticker": "EQIX",
        "Name": "Equinix",
        "Slug": "equinix"
    },
    {
        "Country": "Japan",
        "Ticker": "7974.T",
        "Name": "Nintendo",
        "Slug": "nintendo"
    },
    {
        "Country": "Canada",
        "Ticker": "BAM",
        "Name": "Brookfield Asset Management",
        "Slug": "brookfield-asset-management"
    },
    {
        "Country": "USA",
        "Ticker": "MMM",
        "Name": "3M",
        "Slug": "3m"
    },
    {
        "Country": "UK",
        "Ticker": "LSEG.L",
        "Name": "London Stock Exchange",
        "Slug": "london-stock-exchange"
    },
    {
        "Country": "Russia",
        "Ticker": "SBER.ME",
        "Name": "Sberbank",
        "Slug": "sberbank"
    },
    {
        "Country": "Spain",
        "Ticker": "BBVA",
        "Name": "Banco Bilbao Vizcaya Argentaria",
        "Slug": "bbva"
    },
    {
        "Country": "UK",
        "Ticker": "GSK",
        "Name": "GlaxoSmithKline",
        "Slug": "glaxo-smith-kline"
    },
    {
        "Country": "USA",
        "Ticker": "TDG",
        "Name": "TransDigm",
        "Slug": "transdigm"
    },
    {
        "Country": "USA",
        "Ticker": "PH",
        "Name": "Parker-Hannifin",
        "Slug": "parker-hannifin"
    },
    {
        "Country": "Canada",
        "Ticker": "TRI",
        "Name": "Thomson Reuters",
        "Slug": "thomson-reuters"
    },
    {
        "Country": "USA",
        "Ticker": "APO",
        "Name": "Apollo Global Management",
        "Slug": "apollo-global-management"
    },
    {
        "Country": "Italy",
        "Ticker": "RACE",
        "Name": "Ferrari",
        "Slug": "ferrari"
    },
    {
        "Country": "USA",
        "Ticker": "CL",
        "Name": "Colgate-Palmolive",
        "Slug": "colgate-palmolive"
    },
    {
        "Country": "USA",
        "Ticker": "MSTR",
        "Name": "Strategy \n (MicroStrategy)",
        "Slug": "microstrategy"
    },
    {
        "Country": "Japan",
        "Ticker": "6098.T",
        "Name": "Recruit",
        "Slug": "recruit"
    },
    {
        "Country": "India",
        "Ticker": "INFY",
        "Name": "Infosys",
        "Slug": "infosys"
    },
    {
        "Country": "Australia",
        "Ticker": "CSL.AX",
        "Name": "CSL",
        "Slug": "csl"
    },
    {
        "Country": "USA",
        "Ticker": "RSG",
        "Name": "Republic Services",
        "Slug": "republic-services"
    },
    {
        "Country": "USA",
        "Ticker": "DASH",
        "Name": "DoorDash",
        "Slug": "doordash"
    },
    {
        "Country": "Japan",
        "Ticker": "4519.T",
        "Name": "Chugai Pharmaceutical",
        "Slug": "chugai-pharmaceutical"
    },
    {
        "Country": "Ireland",
        "Ticker": "TT",
        "Name": "Trane Technologies",
        "Slug": "trane-technologies"
    },
    {
        "Country": "Singapore",
        "Ticker": "SE",
        "Name": "Sea Limited",
        "Slug": "sea"
    },
    {
        "Country": "China",
        "Ticker": "601328.SS",
        "Name": "Bank of Communications",
        "Slug": "bank-of-communications"
    },
    {
        "Country": "USA",
        "Ticker": "SCCO",
        "Name": "Southern Copper",
        "Slug": "southern-copper"
    },
    {
        "Country": "USA",
        "Ticker": "NOC",
        "Name": "Northrop Grumman",
        "Slug": "northrop-grumman"
    },
    {
        "Country": "Sweden",
        "Ticker": "ATCO-B.ST",
        "Name": "Atlas Copco",
        "Slug": "atlas-copco"
    },
    {
        "Country": "USA",
        "Ticker": "EPD",
        "Name": "Enterprise Products",
        "Slug": "enterprise-products"
    },
    {
        "Country": "Japan",
        "Ticker": "8766.T",
        "Name": "Tokio Marine",
        "Slug": "tokio-marine"
    },
    {
        "Country": "USA",
        "Ticker": "GD",
        "Name": "General Dynamics",
        "Slug": "general-dynamics"
    },
    {
        "Country": "USA",
        "Ticker": "FTNT",
        "Name": "Fortinet",
        "Slug": "fortinet"
    },
    {
        "Country": "USA",
        "Ticker": "ABNB",
        "Name": "Airbnb",
        "Slug": "airbnb"
    },
    {
        "Country": "USA",
        "Ticker": "ZTS",
        "Name": "Zoetis",
        "Slug": "zoetis"
    },
    {
        "Country": "USA",
        "Ticker": "MSI",
        "Name": "Motorola Solutions",
        "Slug": "motorola-solutions"
    },
    {
        "Country": "USA",
        "Ticker": "WMB",
        "Name": "Williams Companies",
        "Slug": "williams-companies"
    },
    {
        "Country": "USA",
        "Ticker": "ITW",
        "Name": "Illinois Tool Works",
        "Slug": "illinois-tool-works"
    },
    {
        "Country": "Japan",
        "Ticker": "9984.T",
        "Name": "SoftBank",
        "Slug": "softbank"
    },
    {
        "Country": "Norway",
        "Ticker": "EQNR",
        "Name": "Equinor",
        "Slug": "equinor"
    },
    {
        "Country": "USA",
        "Ticker": "EOG",
        "Name": "EOG Resources",
        "Slug": "eog-resources"
    },
    {
        "Country": "USA",
        "Ticker": "ECL",
        "Name": "Ecolab",
        "Slug": "ecolab"
    },
    {
        "Country": "France",
        "Ticker": "DG.PA",
        "Name": "Vinci",
        "Slug": "vinci"
    },
    {
        "Country": "China",
        "Ticker": "601658.SS",
        "Name": "Postal Savings Bank of China",
        "Slug": "postal-savings-bank-of-china"
    },
    {
        "Country": "China",
        "Ticker": "000858.SZ",
        "Name": "Wuliangye Yibin",
        "Slug": "wuliangye-yibin"
    },
    {
        "Country": "Japan",
        "Ticker": "8058.T",
        "Name": "Mitsubishi Corporation",
        "Slug": "mitsubishi-corporation"
    },
    {
        "Country": "USA",
        "Ticker": "IBKR",
        "Name": "Interactive Brokers",
        "Slug": "interactive-brokers"
    },
    {
        "Country": "Canada",
        "Ticker": "BMO",
        "Name": "Bank of Montreal",
        "Slug": "bank-of-montreal"
    },
    {
        "Country": "USA",
        "Ticker": "PNC",
        "Name": "PNC Financial Services",
        "Slug": "pnc-financial-services"
    },
    {
        "Country": "Japan",
        "Ticker": "MFG",
        "Name": "Mizuho Financial Group",
        "Slug": "mizuho-financial-group"
    },
    {
        "Country": "USA",
        "Ticker": "REGN",
        "Name": "Regeneron Pharmaceuticals",
        "Slug": "regeneron-pharmaceuticals"
    },
    {
        "Country": "USA",
        "Ticker": "CDNS",
        "Name": "Cadence Design Systems",
        "Slug": "cadence-design-systems"
    },
    {
        "Country": "USA",
        "Ticker": "COF",
        "Name": "Capital One",
        "Slug": "capital-one"
    },
    {
        "Country": "Australia",
        "Ticker": "WBC.AX",
        "Name": "Westpac Banking",
        "Slug": "westpac-banking"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "2082.SR",
        "Name": "ACWA POWER Company",
        "Slug": "acwa-power"
    },
    {
        "Country": "UAE",
        "Ticker": "ADNOCGAS.AE",
        "Name": "ADNOC Gas",
        "Slug": "adnoc-gas"
    },
    {
        "Country": "USA",
        "Ticker": "CMG",
        "Name": "Chipotle Mexican Grill",
        "Slug": "chipotle-mexican-grill"
    },
    {
        "Country": "Taiwan",
        "Ticker": "2454.TW",
        "Name": "MediaTek",
        "Slug": "mediatek"
    },
    {
        "Country": "China",
        "Ticker": "NTES",
        "Name": "NetEase",
        "Slug": "netease"
    },
    {
        "Country": "Canada",
        "Ticker": "CSU.TO",
        "Name": "Constellation Software",
        "Slug": "constellation-software"
    },
    {
        "Country": "China",
        "Ticker": "601899.SS",
        "Name": "Zijin Mining",
        "Slug": "zijin-mining"
    },
    {
        "Country": "USA",
        "Ticker": "SNPS",
        "Name": "Synopsys",
        "Slug": "synopsys"
    },
    {
        "Country": "Canada",
        "Ticker": "CP",
        "Name": "Canadian Pacific Railway",
        "Slug": "canadian-pacific-railway"
    },
    {
        "Country": "Japan",
        "Ticker": "8001.T",
        "Name": "Itōchū Shōji",
        "Slug": "itochu-shoji"
    },
    {
        "Country": "USA",
        "Ticker": "USB",
        "Name": "U.S. Bancorp",
        "Slug": "us-bancorp"
    },
    {
        "Country": "USA",
        "Ticker": "BDX",
        "Name": "Becton Dickinson",
        "Slug": "becton-dickinson"
    },
    {
        "Country": "Australia",
        "Ticker": "NAB.AX",
        "Name": "National Australia Bank",
        "Slug": "national-australia-bank"
    },
    {
        "Country": "India",
        "Ticker": "BAJFINANCE.NS",
        "Name": "Bajaj Finance",
        "Slug": "bajaj-finance"
    },
    {
        "Country": "Canada",
        "Ticker": "CNQ",
        "Name": "Canadian Natural Resources",
        "Slug": "canadian-natural-resources"
    },
    {
        "Country": "USA",
        "Ticker": "APD",
        "Name": "Air Products and Chemicals",
        "Slug": "air-products-and-chemicals"
    },
    {
        "Country": "USA",
        "Ticker": "MAR",
        "Name": "Marriott International",
        "Slug": "marriott-international"
    },
    {
        "Country": "USA",
        "Ticker": "PYPL",
        "Name": "PayPal",
        "Slug": "paypal"
    },
    {
        "Country": "China",
        "Ticker": "JD",
        "Name": "Jingdong Mall",
        "Slug": "jingdong-mall"
    },
    {
        "Country": "UK",
        "Ticker": "NGG",
        "Name": "National Grid",
        "Slug": "national-grid"
    },
    {
        "Country": "USA",
        "Ticker": "AZO",
        "Name": "AutoZone",
        "Slug": "autozone"
    },
    {
        "Country": "USA",
        "Ticker": "ET",
        "Name": "Energy Transfer Partners",
        "Slug": "energy-transfer-partners"
    },
    {
        "Country": "Indonesia",
        "Ticker": "BBCA.JK",
        "Name": "Bank Central Asia",
        "Slug": "bank-central-asia"
    },
    {
        "Country": "USA",
        "Ticker": "KMI",
        "Name": "Kinder Morgan",
        "Slug": "kinder-morgan"
    },
    {
        "Country": "Japan",
        "Ticker": "9433.T",
        "Name": "KDDI",
        "Slug": "kddi"
    },
    {
        "Country": "USA",
        "Ticker": "CEG",
        "Name": "Constellation Energy",
        "Slug": "constellation-energy"
    },
    {
        "Country": "USA",
        "Ticker": "DELL",
        "Name": "Dell",
        "Slug": "dell"
    },
    {
        "Country": "USA",
        "Ticker": "ROP",
        "Name": "Roper Technologies",
        "Slug": "roper-technologies"
    },
    {
        "Country": "India",
        "Ticker": "HINDUNILVR.NS",
        "Name": "Hindustan Unilever",
        "Slug": "hindustan-unilever"
    },
    {
        "Country": "USA",
        "Ticker": "SPG",
        "Name": "Simon Property Group",
        "Slug": "simon-property"
    },
    {
        "Country": "China",
        "Ticker": "601166.SS",
        "Name": "Industrial Bank",
        "Slug": "industrial-bank"
    },
    {
        "Country": "Germany",
        "Ticker": "RHM.F",
        "Name": "Rheinmetall",
        "Slug": "rheinmetall"
    },
    {
        "Country": "USA",
        "Ticker": "OKE",
        "Name": "Oneok",
        "Slug": "oneok"
    },
    {
        "Country": "USA",
        "Ticker": "WDAY",
        "Name": "Workday",
        "Slug": "workday"
    },
    {
        "Country": "Japan",
        "Ticker": "8035.T",
        "Name": "Tokyo Electron",
        "Slug": "tokyo-electron"
    },
    {
        "Country": "Canada",
        "Ticker": "CNI",
        "Name": "Canadian National Railway",
        "Slug": "canadian-national-railway"
    },
    {
        "Country": "Taiwan",
        "Ticker": "2317.TW",
        "Name": "Foxconn (Hon Hai Precision Industry)",
        "Slug": "foxconn"
    },
    {
        "Country": "USA",
        "Ticker": "EMR",
        "Name": "Emerson",
        "Slug": "emerson"
    },
    {
        "Country": "Russia",
        "Ticker": "ROSN.ME",
        "Name": "Rosneft",
        "Slug": "rosneft"
    },
    {
        "Country": "USA",
        "Ticker": "AFL",
        "Name": "Aflac",
        "Slug": "aflac"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "7010.SR",
        "Name": "Saudi Telecom Company",
        "Slug": "saudi-telecom-company"
    },
    {
        "Country": "India",
        "Ticker": "ITC.NS",
        "Name": "ITC",
        "Slug": "itc"
    },
    {
        "Country": "Netherlands",
        "Ticker": "ING",
        "Name": "ING",
        "Slug": "ing"
    },
    {
        "Country": "Germany",
        "Ticker": "SHL.DE",
        "Name": "Siemens Healthineers",
        "Slug": "siemens-healthineers"
    },
    {
        "Country": "UK",
        "Ticker": "BA.L",
        "Name": "BAE Systems",
        "Slug": "bae-systems"
    },
    {
        "Country": "USA",
        "Ticker": "TRV",
        "Name": "The Travelers Companies",
        "Slug": "the-travelers-companies"
    },
    {
        "Country": "USA",
        "Ticker": "BK",
        "Name": "BNY Mellon (Bank of New York Mellon)",
        "Slug": "bny-mellon"
    },
    {
        "Country": "Germany",
        "Ticker": "MRK.DE",
        "Name": "Merck KGaA",
        "Slug": "merck-kgaa"
    },
    {
        "Country": "Sweden",
        "Ticker": "VOLV-A.ST",
        "Name": "Volvo Group",
        "Slug": "volvo"
    },
    {
        "Country": "India",
        "Ticker": "LICI.NS",
        "Name": "Life Insurance Corporation of India (LIC)",
        "Slug": "life-insurance-corporation-of-india"
    },
    {
        "Country": "Switzerland",
        "Ticker": "HOLN.SW",
        "Name": "Holcim Group",
        "Slug": "lafargeholcim"
    },
    {
        "Country": "USA",
        "Ticker": "FMCCT",
        "Name": "Freddie Mac",
        "Slug": "freddie-mac"
    },
    {
        "Country": "Canada",
        "Ticker": "BNS",
        "Name": "Scotiabank",
        "Slug": "scotiabank"
    },
    {
        "Country": "Ireland",
        "Ticker": "CRH",
        "Name": "Cement Roadstone Holding",
        "Slug": "crh"
    },
    {
        "Country": "USA",
        "Ticker": "FDX",
        "Name": "FedEx",
        "Slug": "fedex"
    },
    {
        "Country": "USA",
        "Ticker": "AEP",
        "Name": "American Electric Power",
        "Slug": "american-electric-power"
    },
    {
        "Country": "Singapore",
        "Ticker": "O39.SI",
        "Name": "OCBC Bank",
        "Slug": "ocbc-bank"
    },
    {
        "Country": "UK",
        "Ticker": "DEO",
        "Name": "Diageo",
        "Slug": "diageo"
    },
    {
        "Country": "China",
        "Ticker": "0981.HK",
        "Name": "SMIC",
        "Slug": "smic"
    },
    {
        "Country": "UK",
        "Ticker": "LYG",
        "Name": "Lloyds Banking Group",
        "Slug": "lloyds-banking-group"
    },
    {
        "Country": "Russia",
        "Ticker": "LKOH.ME",
        "Name": "Lukoil",
        "Slug": "lukoil"
    },
    {
        "Country": "USA",
        "Ticker": "SLB",
        "Name": "Schlumberger",
        "Slug": "schlumberger"
    },
    {
        "Country": "USA",
        "Ticker": "MNST",
        "Name": "Monster Beverage",
        "Slug": "monster-beverage"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "1180.SR",
        "Name": "The Saudi National Bank",
        "Slug": "the-saudi-national-bank"
    },
    {
        "Country": "Japan",
        "Ticker": "7011.T",
        "Name": "Mitsubishi Heavy Industries",
        "Slug": "mitsubishi-heavy-industries"
    },
    {
        "Country": "Brazil",
        "Ticker": "ITUB",
        "Name": "Itaú Unibanco",
        "Slug": "itau-unibanco"
    },
    {
        "Country": "Germany",
        "Ticker": "MBG.DE",
        "Name": "Mercedes-Benz",
        "Slug": "mercedes-benz-group"
    },
    {
        "Country": "India",
        "Ticker": "LT.NS",
        "Name": "Larsen & Toubro",
        "Slug": "larsen-and-toubro"
    },
    {
        "Country": "UK",
        "Ticker": "CPG.L",
        "Name": "Compass Group",
        "Slug": "compass-group"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "0388.HK",
        "Name": "Hong Kong Exchanges & Clearing",
        "Slug": "hong-kong-exchanges-and-clearing"
    },
    {
        "Country": "UK",
        "Ticker": "BCS",
        "Name": "Barclays",
        "Slug": "barclays"
    },
    {
        "Country": "Japan",
        "Ticker": "4063.T",
        "Name": "Shin-Etsu Chemical",
        "Slug": "shin-etsu-chemical"
    },
    {
        "Country": "France",
        "Ticker": "ACA.PA",
        "Name": "Crédit Agricole",
        "Slug": "credit-agricole"
    },
    {
        "Country": "France",
        "Ticker": "HO.PA",
        "Name": "Thales",
        "Slug": "thales"
    },
    {
        "Country": "USA",
        "Ticker": "CSX",
        "Name": "CSX Corporation",
        "Slug": "csx-corporation"
    },
    {
        "Country": "USA",
        "Ticker": "ADSK",
        "Name": "Autodesk",
        "Slug": "autodesk"
    },
    {
        "Country": "USA",
        "Ticker": "PAYX",
        "Name": "Paychex",
        "Slug": "paychex"
    },
    {
        "Country": "Spain",
        "Ticker": "CABK.MC",
        "Name": "CaixaBank",
        "Slug": "caixabank"
    },
    {
        "Country": "USA",
        "Ticker": "ALL",
        "Name": "Allstate",
        "Slug": "allstate"
    },
    {
        "Country": "Australia",
        "Ticker": "TEAM",
        "Name": "Atlassian",
        "Slug": "atlassian"
    },
    {
        "Country": "USA",
        "Ticker": "RCL",
        "Name": "Royal Caribbean Group",
        "Slug": "royal-caribbean"
    },
    {
        "Country": "USA",
        "Ticker": "MPLX",
        "Name": "MPLX",
        "Slug": "mplx"
    },
    {
        "Country": "China",
        "Ticker": "601138.SS",
        "Name": "Foxconn Industrial Internet",
        "Slug": "foxconn-industrial-internet"
    },
    {
        "Country": "Canada",
        "Ticker": "AEM",
        "Name": "Agnico Eagle Mines",
        "Slug": "agnico-eagle-mines"
    },
    {
        "Country": "USA",
        "Ticker": "CPRT",
        "Name": "Copart",
        "Slug": "copart"
    },
    {
        "Country": "USA",
        "Ticker": "MET",
        "Name": "MetLife",
        "Slug": "metlife"
    },
    {
        "Country": "USA",
        "Ticker": "NEM",
        "Name": "Newmont",
        "Slug": "newmont"
    },
    {
        "Country": "USA",
        "Ticker": "FCX",
        "Name": "Freeport-McMoRan",
        "Slug": "freeport-mcmoran"
    },
    {
        "Country": "USA",
        "Ticker": "CARR",
        "Name": "Carrier",
        "Slug": "carrier"
    },
    {
        "Country": "Germany",
        "Ticker": "DB1.DE",
        "Name": "Deutsche Börse",
        "Slug": "deutsche-boerse"
    },
    {
        "Country": "USA",
        "Ticker": "HLT",
        "Name": "Hilton Worldwide",
        "Slug": "hilton-hotels"
    },
    {
        "Country": "Australia",
        "Ticker": "ANZ.AX",
        "Name": "ANZ Bank",
        "Slug": "anz-bank"
    },
    {
        "Country": "Japan",
        "Ticker": "8031.T",
        "Name": "Mitsui Bussan",
        "Slug": "mitsui-bussan"
    },
    {
        "Country": "USA",
        "Ticker": "COR",
        "Name": "Cencora",
        "Slug": "cencora"
    },
    {
        "Country": "USA",
        "Ticker": "TFC",
        "Name": "Truist Financial",
        "Slug": "truist-financial"
    },
    {
        "Country": "Canada",
        "Ticker": "MFC",
        "Name": "Manulife Financial",
        "Slug": "manulife-financial"
    },
    {
        "Country": "Italy",
        "Ticker": "G.MI",
        "Name": "Generali",
        "Slug": "generali"
    },
    {
        "Country": "S. Korea",
        "Ticker": "373220.KS",
        "Name": "LG Energy Solution",
        "Slug": "lg-energy-solution"
    },
    {
        "Country": "USA",
        "Ticker": "NSC",
        "Name": "Norfolk Southern",
        "Slug": "norfolk-southern"
    },
    {
        "Country": "Canada",
        "Ticker": "CM",
        "Name": "CIBC",
        "Slug": "cibc"
    },
    {
        "Country": "Ireland",
        "Ticker": "JCI",
        "Name": "Johnson Controls",
        "Slug": "johnson-controls"
    },
    {
        "Country": "China",
        "Ticker": "601998.SS",
        "Name": "CITIC Bank",
        "Slug": "citic-bank"
    },
    {
        "Country": "USA",
        "Ticker": "PSA",
        "Name": "Public Storage",
        "Slug": "public-storage"
    },
    {
        "Country": "USA",
        "Ticker": "MRVL",
        "Name": "Marvell Technology Group",
        "Slug": "marvell"
    },
    {
        "Country": "USA",
        "Ticker": "HWM",
        "Name": "Howmet Aerospace",
        "Slug": "howmet-aerospace"
    },
    {
        "Country": "China",
        "Ticker": "600030.SS",
        "Name": "CITIC Securities",
        "Slug": "citic-securities"
    },
    {
        "Country": "USA",
        "Ticker": "CHTR",
        "Name": "Charter Communications",
        "Slug": "charter-communications"
    },
    {
        "Country": "Germany",
        "Ticker": "VOW3.DE",
        "Name": "Volkswagen",
        "Slug": "volkswagen"
    },
    {
        "Country": "USA",
        "Ticker": "AIG",
        "Name": "American International Group",
        "Slug": "aig"
    },
    {
        "Country": "USA",
        "Ticker": "LNG",
        "Name": "Cheniere Energy",
        "Slug": "cheniere-energy"
    },
    {
        "Country": "USA",
        "Ticker": "O",
        "Name": "Realty Income",
        "Slug": "realty-income"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "2010.SR",
        "Name": "SABIC",
        "Slug": "sabic"
    },
    {
        "Country": "Australia",
        "Ticker": "WES.AX",
        "Name": "Wesfarmers",
        "Slug": "wesfarmers"
    },
    {
        "Country": "USA",
        "Ticker": "PCAR",
        "Name": "Paccar",
        "Slug": "paccar"
    },
    {
        "Country": "India",
        "Ticker": "KOTAKBANK.NS",
        "Name": "Kotak Mahindra Bank",
        "Slug": "kotak-mahindra-bank"
    },
    {
        "Country": "France",
        "Ticker": "DSY.PA",
        "Name": "Dassault Systèmes",
        "Slug": "dassault-systemes"
    },
    {
        "Country": "India",
        "Ticker": "HCLTECH.NS",
        "Name": "HCL Technologies",
        "Slug": "hcl-technologies"
    },
    {
        "Country": "USA",
        "Ticker": "PSX",
        "Name": "Phillips 66",
        "Slug": "phillips-66"
    },
    {
        "Country": "Netherlands",
        "Ticker": "UMG.AS",
        "Name": "Universal Music Group",
        "Slug": "universal-music-group"
    },
    {
        "Country": "France",
        "Ticker": "SGO.PA",
        "Name": "Compagnie de Saint-Gobain",
        "Slug": "compagnie-de-saint-gobain"
    },
    {
        "Country": "Switzerland",
        "Ticker": "SREN.SW",
        "Name": "Swiss Re",
        "Slug": "swiss-re"
    },
    {
        "Country": "Germany",
        "Ticker": "DHL.DE",
        "Name": "DHL Group (Deutsche Post)",
        "Slug": "deutsche-post"
    },
    {
        "Country": "USA",
        "Ticker": "WCN",
        "Name": "Waste Connections",
        "Slug": "waste-connections"
    },
    {
        "Country": "USA",
        "Ticker": "HES",
        "Name": "Hess",
        "Slug": "hess"
    },
    {
        "Country": "France",
        "Ticker": "BN.PA",
        "Name": "Danone",
        "Slug": "danone"
    },
    {
        "Country": "Germany",
        "Ticker": "BMW.DE",
        "Name": "BMW",
        "Slug": "bmw"
    },
    {
        "Country": "China",
        "Ticker": "300059.SZ",
        "Name": "East Money Information",
        "Slug": "east-money"
    },
    {
        "Country": "Brazil",
        "Ticker": "NU",
        "Name": "Nu Holdings",
        "Slug": "nu-holdings"
    },
    {
        "Country": "Mexico",
        "Ticker": "WMMVF",
        "Name": "Walmex",
        "Slug": "walmex"
    },
    {
        "Country": "Canada",
        "Ticker": "TRP",
        "Name": "TC Energy",
        "Slug": "tc-energy"
    },
    {
        "Country": "S. Korea",
        "Ticker": "207940.KS",
        "Name": "Samsung Biologics",
        "Slug": "samsung-biologics"
    },
    {
        "Country": "USA",
        "Ticker": "DLR",
        "Name": "Digital Realty",
        "Slug": "digital-realty"
    },
    {
        "Country": "China",
        "Ticker": "9633.HK",
        "Name": "Nongfu Spring",
        "Slug": "nongfu-spring"
    },
    {
        "Country": "Japan",
        "Ticker": "2914.T",
        "Name": "Japan Tobacco",
        "Slug": "japan-tobacco"
    },
    {
        "Country": "India",
        "Ticker": "SUNPHARMA.NS",
        "Name": "Sun Pharmaceutical",
        "Slug": "sun-pharmaceutical"
    },
    {
        "Country": "USA",
        "Ticker": "SNOW",
        "Name": "Snowflake",
        "Slug": "snowflake"
    },
    {
        "Country": "Germany",
        "Ticker": "ENR.F",
        "Name": "Siemens Energy",
        "Slug": "siemens-energy"
    },
    {
        "Country": "Canada",
        "Ticker": "SU",
        "Name": "Suncor Energy",
        "Slug": "suncor-energy"
    },
    {
        "Country": "UK",
        "Ticker": "NWG",
        "Name": "NatWest Group",
        "Slug": "natwest-group"
    },
    {
        "Country": "Netherlands",
        "Ticker": "ADYEN.AS",
        "Name": "Adyen",
        "Slug": "adyen"
    },
    {
        "Country": "Italy",
        "Ticker": "E",
        "Name": "ENI",
        "Slug": "eni"
    },
    {
        "Country": "USA",
        "Ticker": "D",
        "Name": "Dominion Energy",
        "Slug": "dominion-energy"
    },
    {
        "Country": "Singapore",
        "Ticker": "U11.SI",
        "Name": "UOB",
        "Slug": "uob"
    },
    {
        "Country": "USA",
        "Ticker": "TGT",
        "Name": "Target",
        "Slug": "target"
    },
    {
        "Country": "France",
        "Ticker": "ENGI.PA",
        "Name": "ENGIE",
        "Slug": "engie"
    },
    {
        "Country": "Germany",
        "Ticker": "DB",
        "Name": "Deutsche Bank",
        "Slug": "deutsche-bank"
    },
    {
        "Country": "Australia",
        "Ticker": "MQG.AX",
        "Name": "Macquarie",
        "Slug": "macquarie"
    },
    {
        "Country": "USA",
        "Ticker": "GWW",
        "Name": "W. W. Grainger",
        "Slug": "ww-grainger"
    },
    {
        "Country": "Netherlands",
        "Ticker": "NXPI",
        "Name": "NXP Semiconductors",
        "Slug": "nxp-semiconductors"
    },
    {
        "Country": "USA",
        "Ticker": "KMB",
        "Name": "Kimberly-Clark",
        "Slug": "kimberly-clark"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "1211.SR",
        "Name": "Ma'aden",
        "Slug": "maaden"
    },
    {
        "Country": "Japan",
        "Ticker": "TAK",
        "Name": "Takeda Pharmaceutical",
        "Slug": "takeda-pharmaceutical"
    },
    {
        "Country": "USA",
        "Ticker": "GM",
        "Name": "General Motors",
        "Slug": "general-motors"
    },
    {
        "Country": "USA",
        "Ticker": "FANG",
        "Name": "Diamondback Energy",
        "Slug": "diamondback-energy"
    },
    {
        "Country": "USA",
        "Ticker": "OXY",
        "Name": "Occidental Petroleum",
        "Slug": "occidental-petroleum"
    },
    {
        "Country": "Switzerland",
        "Ticker": "ALC",
        "Name": "Alcon",
        "Slug": "alcon"
    },
    {
        "Country": "USA",
        "Ticker": "KDP",
        "Name": "Keurig Dr Pepper",
        "Slug": "keurig-dr-pepper"
    },
    {
        "Country": "Canada",
        "Ticker": "ATD.TO",
        "Name": "Alimentation Couche-Tard",
        "Slug": "alimentation-couche-tard"
    },
    {
        "Country": "UK",
        "Ticker": "HLN",
        "Name": "Haleon",
        "Slug": "haleon"
    },
    {
        "Country": "UK",
        "Ticker": "RKT.L",
        "Name": "Reckitt Benckiser",
        "Slug": "reckitt-benckiser"
    },
    {
        "Country": "USA",
        "Ticker": "AMP",
        "Name": "Ameriprise Financial",
        "Slug": "ameriprise-financial"
    },
    {
        "Country": "USA",
        "Ticker": "EXC",
        "Name": "Exelon Corporation",
        "Slug": "exelon-corporation"
    },
    {
        "Country": "Germany",
        "Ticker": "P911.DE",
        "Name": "Porsche",
        "Slug": "porsche"
    },
    {
        "Country": "Netherlands",
        "Ticker": "HEIA.AS",
        "Name": "Heineken",
        "Slug": "heineken"
    },
    {
        "Country": "USA",
        "Ticker": "SRE",
        "Name": "Sempra Energy",
        "Slug": "sempra-energy"
    },
    {
        "Country": "USA",
        "Ticker": "GBTC",
        "Name": "Grayscale Bitcoin Trust",
        "Slug": "grayscale-bitcoin-trust"
    },
    {
        "Country": "UK",
        "Ticker": "III.L",
        "Name": "3i Group",
        "Slug": "3i"
    },
    {
        "Country": "USA",
        "Ticker": "ARES",
        "Name": "Ares Management",
        "Slug": "ares-management"
    },
    {
        "Country": "Denmark",
        "Ticker": "DSV.VI",
        "Name": "DSV",
        "Slug": "dsv"
    },
    {
        "Country": "USA",
        "Ticker": "KVUE",
        "Name": "Kenvue",
        "Slug": "kenvue"
    },
    {
        "Country": "USA",
        "Ticker": "MPC",
        "Name": "Marathon Petroleum",
        "Slug": "marathon-petroleum"
    },
    {
        "Country": "USA",
        "Ticker": "CCI",
        "Name": "Crown Castle",
        "Slug": "crown-castle"
    },
    {
        "Country": "USA",
        "Ticker": "KR",
        "Name": "Kroger",
        "Slug": "kroger"
    },
    {
        "Country": "USA",
        "Ticker": "FICO",
        "Name": "FICO",
        "Slug": "fico"
    },
    {
        "Country": "Switzerland",
        "Ticker": "GLCNF",
        "Name": "Glencore",
        "Slug": "glencore"
    },
    {
        "Country": "Switzerland",
        "Ticker": "LONN.SW",
        "Name": "Lonza",
        "Slug": "lonza"
    },
    {
        "Country": "Germany",
        "Ticker": "BAS.DE",
        "Name": "BASF",
        "Slug": "basf"
    },
    {
        "Country": "Finland",
        "Ticker": "NDA-FI.HE",
        "Name": "Nordea Bank",
        "Slug": "nordea-bank"
    },
    {
        "Country": "Japan",
        "Ticker": "4568.T",
        "Name": "Daiichi Sankyō",
        "Slug": "daiichi-sankyo"
    },
    {
        "Country": "USA",
        "Ticker": "FAST",
        "Name": "Fastenal",
        "Slug": "fastenal"
    },
    {
        "Country": "Mexico",
        "Ticker": "AMX",
        "Name": "America Movil",
        "Slug": "america-movil"
    },
    {
        "Country": "USA",
        "Ticker": "YUM",
        "Name": "Yum! Brands",
        "Slug": "yum"
    },
    {
        "Country": "USA",
        "Ticker": "MSCI",
        "Name": "MSCI",
        "Slug": "msci"
    },
    {
        "Country": "USA",
        "Ticker": "COIN",
        "Name": "Coinbase",
        "Slug": "coinbase"
    },
    {
        "Country": "USA",
        "Ticker": "TRGP",
        "Name": "Targa Resources",
        "Slug": "targa-resources"
    },
    {
        "Country": "Russia",
        "Ticker": "NVTK.ME",
        "Name": "Novatek",
        "Slug": "novatek"
    },
    {
        "Country": "USA",
        "Ticker": "NDAQ",
        "Name": "Nasdaq",
        "Slug": "nasdaq"
    },
    {
        "Country": "China",
        "Ticker": "600276.SS",
        "Name": "Jiangsu Hengrui Medicine",
        "Slug": "jiangsu-hengrui-medicine"
    },
    {
        "Country": "USA",
        "Ticker": "BKR",
        "Name": "Baker Hughes",
        "Slug": "baker-hughes"
    },
    {
        "Country": "China",
        "Ticker": "TCOM",
        "Name": "Trip.com",
        "Slug": "trip-dot-com"
    },
    {
        "Country": "Brazil",
        "Ticker": "VALE",
        "Name": "Vale",
        "Slug": "vale"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "2388.HK",
        "Name": "Bank of China (Hong Kong)",
        "Slug": "boc-hong-kong"
    },
    {
        "Country": "Germany",
        "Ticker": "IFX.DE",
        "Name": "Infineon",
        "Slug": "infineon"
    },
    {
        "Country": "USA",
        "Ticker": "CMI",
        "Name": "Cummins",
        "Slug": "cummins"
    },
    {
        "Country": "USA",
        "Ticker": "CTVA",
        "Name": "Corteva",
        "Slug": "corteva"
    },
    {
        "Country": "Ireland",
        "Ticker": "EXPGF",
        "Name": "Experian",
        "Slug": "experian"
    },
    {
        "Country": "USA",
        "Ticker": "DFS",
        "Name": "Discover Financial Services",
        "Slug": "discover-financial-services"
    },
    {
        "Country": "India",
        "Ticker": "MARUTI.NS",
        "Name": "Maruti Suzuki India",
        "Slug": "maruti-suzuki-india"
    },
    {
        "Country": "USA",
        "Ticker": "EW",
        "Name": "Edwards Lifesciences",
        "Slug": "edwards-lifesciences"
    },
    {
        "Country": "China",
        "Ticker": "600000.SS",
        "Name": "Shanghai Pudong Development Bank",
        "Slug": "shanghai-pudong-development-bank"
    },
    {
        "Country": "Singapore",
        "Ticker": "Z74.SI",
        "Name": "Singtel",
        "Slug": "singtel"
    },
    {
        "Country": "Canada",
        "Ticker": "L.TO",
        "Name": "Loblaw Companies",
        "Slug": "loblaw-companies"
    },
    {
        "Country": "Switzerland",
        "Ticker": "TEL",
        "Name": "TE Connectivity",
        "Slug": "te-connectivity"
    },
    {
        "Country": "Germany",
        "Ticker": "ADS.DE",
        "Name": "Adidas",
        "Slug": "adidas"
    },
    {
        "Country": "USA",
        "Ticker": "ROST",
        "Name": "Ross Stores",
        "Slug": "ross-stores"
    },
    {
        "Country": "Switzerland",
        "Ticker": "GRMN",
        "Name": "Garmin",
        "Slug": "garmin"
    },
    {
        "Country": "USA",
        "Ticker": "VLO",
        "Name": "Valero Energy",
        "Slug": "valero"
    },
    {
        "Country": "UAE",
        "Ticker": "FAB.AE",
        "Name": "First Abu Dhabi Bank",
        "Slug": "first-abu-dhabi-bank"
    },
    {
        "Country": "USA",
        "Ticker": "VRSK",
        "Name": "Verisk Analytics",
        "Slug": "verisk-analytics"
    },
    {
        "Country": "Kuwait",
        "Ticker": "KFH.KW",
        "Name": "Kuwait Finance House",
        "Slug": "kuwait-finance-house"
    },
    {
        "Country": "Qatar",
        "Ticker": "QNBK.QA",
        "Name": "QNB (Qatar National Bank)",
        "Slug": "qnb-qatar-national-bank"
    },
    {
        "Country": "China",
        "Ticker": "002475.SZ",
        "Name": "Luxshare Precision",
        "Slug": "luxshare-precision"
    },
    {
        "Country": "South Africa",
        "Ticker": "NPSNY",
        "Name": "Naspers",
        "Slug": "naspers"
    },
    {
        "Country": "USA",
        "Ticker": "PEG",
        "Name": "PSEG",
        "Slug": "pseg"
    },
    {
        "Country": "India",
        "Ticker": "NTPC.NS",
        "Name": "NTPC Limited",
        "Slug": "ntpc-limited"
    },
    {
        "Country": "USA",
        "Ticker": "DHI",
        "Name": "D. R. Horton",
        "Slug": "dr-horton"
    },
    {
        "Country": "USA",
        "Ticker": "OTIS",
        "Name": "Otis Worldwide",
        "Slug": "otis-worldwide"
    },
    {
        "Country": "Russia",
        "Ticker": "GAZP.ME",
        "Name": "Gazprom",
        "Slug": "gazprom"
    },
    {
        "Country": "USA",
        "Ticker": "XEL",
        "Name": "Xcel Energy",
        "Slug": "xcel-energy"
    },
    {
        "Country": "USA",
        "Ticker": "AXON",
        "Name": "Axon Enterprise",
        "Slug": "axon"
    },
    {
        "Country": "Indonesia",
        "Ticker": "BYAN.JK",
        "Name": "Bayan Resources",
        "Slug": "bayan-resources"
    },
    {
        "Country": "USA",
        "Ticker": "URI",
        "Name": "United Rentals",
        "Slug": "united-rentals"
    },
    {
        "Country": "Japan",
        "Ticker": "HMC",
        "Name": "Honda",
        "Slug": "honda"
    },
    {
        "Country": "UAE",
        "Ticker": "EAND.AE",
        "Name": "Emirates Telecom (Etisalat Group)",
        "Slug": "emirates-telecom-etisalat-group"
    },
    {
        "Country": "UK",
        "Ticker": "CCEP",
        "Name": "Coca-Cola European Partners",
        "Slug": "coca-cola-european-partners"
    },
    {
        "Country": "India",
        "Ticker": "AXISBANK.BO",
        "Name": "Axis Bank",
        "Slug": "axis-bank"
    },
    {
        "Country": "China",
        "Ticker": "601601.SS",
        "Name": "China Pacific Insurance",
        "Slug": "china-pacific-insurance"
    },
    {
        "Country": "Switzerland",
        "Ticker": "GIVN.SW",
        "Name": "Givaudan",
        "Slug": "givaudan"
    },
    {
        "Country": "USA",
        "Ticker": "F",
        "Name": "Ford",
        "Slug": "ford"
    },
    {
        "Country": "India",
        "Ticker": "ULTRACEMCO.NS",
        "Name": "UltraTech Cement",
        "Slug": "ultratech-cement"
    },
    {
        "Country": "Germany",
        "Ticker": "EOAN.DE",
        "Name": "E.ON",
        "Slug": "e-on"
    },
    {
        "Country": "USA",
        "Ticker": "CPNG",
        "Name": "Coupang",
        "Slug": "coupang"
    },
    {
        "Country": "USA",
        "Ticker": "VST",
        "Name": "Vistra",
        "Slug": "vistra"
    },
    {
        "Country": "USA",
        "Ticker": "PRU",
        "Name": "Prudential Financial",
        "Slug": "prudential-financial"
    },
    {
        "Country": "USA",
        "Ticker": "FIS",
        "Name": "Fidelity National Information Services",
        "Slug": "fidelity-national-information-services"
    },
    {
        "Country": "USA",
        "Ticker": "AME",
        "Name": "Ametek",
        "Slug": "ametek"
    },
    {
        "Country": "Ireland",
        "Ticker": "FLUT",
        "Name": "Flutter Entertainment",
        "Slug": "flutter-entertainment"
    },
    {
        "Country": "China",
        "Ticker": "300760.SZ",
        "Name": "Mindray",
        "Slug": "mindray"
    },
    {
        "Country": "China",
        "Ticker": "002415.SZ",
        "Name": "Hikvision",
        "Slug": "hikvision"
    },
    {
        "Country": "USA",
        "Ticker": "LHX",
        "Name": "L3Harris Technologies",
        "Slug": "l3harris-technologies"
    },
    {
        "Country": "China",
        "Ticker": "601211.SS",
        "Name": "Guotai Junan Securities",
        "Slug": "guotai-junan-securities"
    },
    {
        "Country": "USA",
        "Ticker": "CBRE",
        "Name": "CBRE Group",
        "Slug": "cbre-group"
    },
    {
        "Country": "USA",
        "Ticker": "ED",
        "Name": "Consolidated Edison",
        "Slug": "consolidated-edison"
    },
    {
        "Country": "Switzerland",
        "Ticker": "SIKA.SW",
        "Name": "Sika",
        "Slug": "sika"
    },
    {
        "Country": "USA",
        "Ticker": "RBLX",
        "Name": "Roblox",
        "Slug": "roblox"
    },
    {
        "Country": "Norway",
        "Ticker": "DNB.OL",
        "Name": "DNB",
        "Slug": "dnb"
    },
    {
        "Country": "Japan",
        "Ticker": "7741.T",
        "Name": "Hoya",
        "Slug": "hoya"
    },
    {
        "Country": "Mexico",
        "Ticker": "GMBXF",
        "Name": "Grupo México",
        "Slug": "grupo-mexico"
    },
    {
        "Country": "China",
        "Ticker": "601319.SS",
        "Name": "The People's Insurance Company (PICC)",
        "Slug": "peoples-insurance-company-picc"
    },
    {
        "Country": "USA",
        "Ticker": "GLW",
        "Name": "Corning",
        "Slug": "corning"
    },
    {
        "Country": "USA",
        "Ticker": "NET",
        "Name": "Cloudflare",
        "Slug": "cloudflare"
    },
    {
        "Country": "Japan",
        "Ticker": "6503.T",
        "Name": "Mitsubishi Electric",
        "Slug": "mitsubishi-electric"
    },
    {
        "Country": "Indonesia",
        "Ticker": "TPIA.JK",
        "Name": "Chandra Asri Petrochemical",
        "Slug": "chandra-asri-petrochemical"
    },
    {
        "Country": "Japan",
        "Ticker": "3382.T",
        "Name": "7-Eleven",
        "Slug": "7-eleven"
    },
    {
        "Country": "Brazil",
        "Ticker": "ABEV",
        "Name": "Ambev",
        "Slug": "ambev"
    },
    {
        "Country": "USA",
        "Ticker": "VEEV",
        "Name": "Veeva Systems",
        "Slug": "veeva-systems"
    },
    {
        "Country": "Belgium",
        "Ticker": "KBCSF",
        "Name": "KBC",
        "Slug": "kbc"
    },
    {
        "Country": "India",
        "Ticker": "BAJAJFINSV.NS",
        "Name": "Bajaj Finserv",
        "Slug": "bajaj-finserv"
    },
    {
        "Country": "USA",
        "Ticker": "CTSH",
        "Name": "Cognizant Technology Solutions",
        "Slug": "cognizant-technology-solutions"
    },
    {
        "Country": "USA",
        "Ticker": "EA",
        "Name": "Electronic Arts",
        "Slug": "electronic-arts"
    },
    {
        "Country": "USA",
        "Ticker": "PCG",
        "Name": "Pacific Gas and Electric",
        "Slug": "pacific-gas-and-electric"
    },
    {
        "Country": "India",
        "Ticker": "M&M.NS",
        "Name": "Mahindra & Mahindra",
        "Slug": "mahindra-mahindra"
    },
    {
        "Country": "USA",
        "Ticker": "PWR",
        "Name": "Quanta Services",
        "Slug": "quanta-services"
    },
    {
        "Country": "Indonesia",
        "Ticker": "BBRI.JK",
        "Name": "Bank Rakyat Indonesia",
        "Slug": "bank-rakyat-indonesia"
    },
    {
        "Country": "USA",
        "Ticker": "GEHC",
        "Name": "GE HealthCare Technologies",
        "Slug": "ge-healthcare-technologies"
    },
    {
        "Country": "Canada",
        "Ticker": "IMO",
        "Name": "Imperial Oil",
        "Slug": "imperial-oil"
    },
    {
        "Country": "USA",
        "Ticker": "HOOD",
        "Name": "Robinhood",
        "Slug": "robinhood"
    },
    {
        "Country": "Switzerland",
        "Ticker": "PGHN.SW",
        "Name": "Partners Group",
        "Slug": "partners-group"
    },
    {
        "Country": "Canada",
        "Ticker": "GWO.TO",
        "Name": "Great-West Lifeco",
        "Slug": "great-west-lifeco"
    },
    {
        "Country": "USA",
        "Ticker": "SYY",
        "Name": "Sysco",
        "Slug": "sysco"
    },
    {
        "Country": "USA",
        "Ticker": "ETR",
        "Name": "Entergy",
        "Slug": "entergy"
    },
    {
        "Country": "India",
        "Ticker": "ONGC.NS",
        "Name": "Oil & Natural Gas",
        "Slug": "oil-and-natural-gas"
    },
    {
        "Country": "Canada",
        "Ticker": "IFC.TO",
        "Name": "Intact Financial",
        "Slug": "intact-financial"
    },
    {
        "Country": "USA",
        "Ticker": "KHC",
        "Name": "Kraft Heinz",
        "Slug": "kraft-heinz"
    },
    {
        "Country": "Japan",
        "Ticker": "7182.T",
        "Name": "Japan Post Bank",
        "Slug": "japan-post-bank"
    },
    {
        "Country": "Netherlands",
        "Ticker": "WKL.AS",
        "Name": "Wolters Kluwer",
        "Slug": "wolters-kluwer"
    },
    {
        "Country": "USA",
        "Ticker": "TTWO",
        "Name": "Take 2 Interactive",
        "Slug": "take-2-interactive"
    },
    {
        "Country": "Bermuda",
        "Ticker": "ACGL",
        "Name": "Arch Capital",
        "Slug": "arch-capital"
    },
    {
        "Country": "Australia",
        "Ticker": "GMG.AX",
        "Name": "Goodman Group",
        "Slug": "goodman"
    },
    {
        "Country": "China",
        "Ticker": "0267.HK",
        "Name": "CITIC limited",
        "Slug": "citic"
    },
    {
        "Country": "France",
        "Ticker": "GLE.PA",
        "Name": "Société Générale",
        "Slug": "societe-generale"
    },
    {
        "Country": "Germany",
        "Ticker": "HNR1.DE",
        "Name": "Hannover Rück",
        "Slug": "hannover-rueck"
    },
    {
        "Country": "Sweden",
        "Ticker": "EQT.ST",
        "Name": "EQT",
        "Slug": "eqt"
    },
    {
        "Country": "Netherlands",
        "Ticker": "ARGX",
        "Name": "Argenx",
        "Slug": "argenx"
    },
    {
        "Country": "UK",
        "Ticker": "STAN.L",
        "Name": "Standard Chartered",
        "Slug": "standard-chartered"
    },
    {
        "Country": "USA",
        "Ticker": "BRO",
        "Name": "Brown & Brown",
        "Slug": "brown-and-brown"
    },
    {
        "Country": "Malaysia",
        "Ticker": "MLYBY",
        "Name": "Maybank",
        "Slug": "maybank"
    },
    {
        "Country": "USA",
        "Ticker": "HIG",
        "Name": "The Hartford",
        "Slug": "the-hartford"
    },
    {
        "Country": "Japan",
        "Ticker": "6702.T",
        "Name": "Fujitsu",
        "Slug": "fujitsu"
    },
    {
        "Country": "Canada",
        "Ticker": "WPM",
        "Name": "Wheaton Precious Metals",
        "Slug": "wheaton-precious-metals"
    },
    {
        "Country": "Taiwan",
        "Ticker": "2881.TW",
        "Name": "Fubon Financial",
        "Slug": "fubon-financial"
    },
    {
        "Country": "Spain",
        "Ticker": "AENA.MC",
        "Name": "Aena",
        "Slug": "aena"
    },
    {
        "Country": "China",
        "Ticker": "000651.SZ",
        "Name": "Gree Electric Appliances",
        "Slug": "gree-electric-appliances"
    },
    {
        "Country": "USA",
        "Ticker": "ODFL",
        "Name": "Old Dominion Freight Line",
        "Slug": "old-dominion-freight-line"
    },
    {
        "Country": "Brazil",
        "Ticker": "BSBR",
        "Name": "Banco Santander Brasil",
        "Slug": "banco-santander-brasil"
    },
    {
        "Country": "Japan",
        "Ticker": "6902.T",
        "Name": "Denso",
        "Slug": "denso"
    },
    {
        "Country": "UAE",
        "Ticker": "EMIRATESNBD.AE",
        "Name": "Emirates NBD Bank PJSC",
        "Slug": "emirates-nbd-bank"
    },
    {
        "Country": "UK",
        "Ticker": "AAL.L",
        "Name": "Anglo American",
        "Slug": "anglo-american"
    },
    {
        "Country": "France",
        "Ticker": "ORA.PA",
        "Name": "Orange",
        "Slug": "orange"
    },
    {
        "Country": "USA",
        "Ticker": "HSY",
        "Name": "The Hershey Company",
        "Slug": "hershey-company"
    },
    {
        "Country": "USA",
        "Ticker": "WEC",
        "Name": "WEC Energy Group",
        "Slug": "wec-energy"
    },
    {
        "Country": "Canada",
        "Ticker": "LULU",
        "Name": "lululemon athletica",
        "Slug": "lululemon-athletica"
    },
    {
        "Country": "USA",
        "Ticker": "VICI",
        "Name": "VICI Properties",
        "Slug": "vici-properties"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "0762.HK",
        "Name": "China Unicom",
        "Slug": "china-unicom"
    },
    {
        "Country": "USA",
        "Ticker": "ALNY",
        "Name": "Alnylam Pharmaceuticals",
        "Slug": "alnylam-pharmaceuticals"
    },
    {
        "Country": "Netherlands",
        "Ticker": "AD.AS",
        "Name": "Ahold Delhaize",
        "Slug": "ahold-delhaize"
    },
    {
        "Country": "USA",
        "Ticker": "IDXX",
        "Name": "IDEXX Laboratories",
        "Slug": "idexx-laboratories"
    },
    {
        "Country": "USA",
        "Ticker": "DDOG",
        "Name": "Datadog",
        "Slug": "datadog"
    },
    {
        "Country": "UAE",
        "Ticker": "DEWA.AE",
        "Name": "Dubai Electricity and Water Authority (DEWA)",
        "Slug": "dubai-electricity-and-water-authority"
    },
    {
        "Country": "S. Korea",
        "Ticker": "HYMTF",
        "Name": "Hyundai",
        "Slug": "hyundai"
    },
    {
        "Country": "UK",
        "Ticker": "WTW",
        "Name": "Willis Towers Watson",
        "Slug": "willis-wowers-watson"
    },
    {
        "Country": "USA",
        "Ticker": "XYZ",
        "Name": "Block",
        "Slug": "square"
    },
    {
        "Country": "Belgium",
        "Ticker": "UCB.VI",
        "Name": "UCB",
        "Slug": "ucb"
    },
    {
        "Country": "Canada",
        "Ticker": "GOLD",
        "Name": "Barrick Gold",
        "Slug": "barrick-gold"
    },
    {
        "Country": "China",
        "Ticker": "600690.SS",
        "Name": "Haier Smart Home",
        "Slug": "haier-smart-home"
    },
    {
        "Country": "Netherlands",
        "Ticker": "STLA",
        "Name": "Stellantis",
        "Slug": "stellantis"
    },
    {
        "Country": "USA",
        "Ticker": "CSGP",
        "Name": "CoStar Group",
        "Slug": "costar-group"
    },
    {
        "Country": "Spain",
        "Ticker": "AMS.MC",
        "Name": "Amadeus IT Group",
        "Slug": "amadeus-it-group"
    },
    {
        "Country": "USA",
        "Ticker": "A",
        "Name": "Agilent Technologies",
        "Slug": "agilent-technologies"
    },
    {
        "Country": "Sweden",
        "Ticker": "ASSA-B.ST",
        "Name": "Assa Abloy",
        "Slug": "assa-abloy"
    },
    {
        "Country": "USA",
        "Ticker": "CAH",
        "Name": "Cardinal Health",
        "Slug": "cardinal-health"
    },
    {
        "Country": "Brazil",
        "Ticker": "WEGE3.SA",
        "Name": "WEG ON",
        "Slug": "weg-on"
    },
    {
        "Country": "USA",
        "Ticker": "STZ",
        "Name": "Constellation Brands",
        "Slug": "constellation-brands"
    },
    {
        "Country": "Sweden",
        "Ticker": "SEB-A.ST",
        "Name": "Skandinaviska Enskilda Banken",
        "Slug": "skandinaviska-enskilda-banken"
    },
    {
        "Country": "Switzerland",
        "Ticker": "SCHN.SW",
        "Name": "Schindler Group",
        "Slug": "schindler-group"
    },
    {
        "Country": "India",
        "Ticker": "HAL.NS",
        "Name": "Hindustan Aeronautics",
        "Slug": "hindustan-aeronautics"
    },
    {
        "Country": "USA",
        "Ticker": "GIS",
        "Name": "General Mills",
        "Slug": "general-mills"
    },
    {
        "Country": "USA",
        "Ticker": "EXR",
        "Name": "Extra Space Storage",
        "Slug": "extra-space-storage"
    },
    {
        "Country": "Canada",
        "Ticker": "SLF",
        "Name": "Sun Life Financial",
        "Slug": "sun-life-financial"
    },
    {
        "Country": "Japan",
        "Ticker": "8725.T",
        "Name": "MS&AD Insurance",
        "Slug": "ms-ad-insurance"
    },
    {
        "Country": "USA",
        "Ticker": "RMD",
        "Name": "ResMed",
        "Slug": "resmed"
    },
    {
        "Country": "China",
        "Ticker": "BIDU",
        "Name": "Baidu",
        "Slug": "baidu"
    },
    {
        "Country": "Canada",
        "Ticker": "NA.TO",
        "Name": "National Bank of Canada",
        "Slug": "nbc-bank"
    },
    {
        "Country": "USA",
        "Ticker": "TW",
        "Name": "Tradeweb",
        "Slug": "tradeweb"
    },
    {
        "Country": "UAE",
        "Ticker": "INVESTB.AE",
        "Name": "Invest Bank",
        "Slug": "invest-bank-uae"
    },
    {
        "Country": "Japan",
        "Ticker": "4661.T",
        "Name": "Oriental Land",
        "Slug": "oriental-land"
    },
    {
        "Country": "USA",
        "Ticker": "HEI",
        "Name": "HEICO",
        "Slug": "heico"
    },
    {
        "Country": "Canada",
        "Ticker": "FFH.TO",
        "Name": "Fairfax Financial",
        "Slug": "fairfax-financial"
    },
    {
        "Country": "Spain",
        "Ticker": "FER.MC",
        "Name": "Ferrovial",
        "Slug": "ferrovial"
    },
    {
        "Country": "UAE",
        "Ticker": "EMAAR.AE",
        "Name": "Emaar Properties",
        "Slug": "emaar-properties"
    },
    {
        "Country": "USA",
        "Ticker": "IT",
        "Name": "Gartner",
        "Slug": "gartner"
    },
    {
        "Country": "India",
        "Ticker": "WIT",
        "Name": "Wipro",
        "Slug": "wipro"
    },
    {
        "Country": "Ireland",
        "Ticker": "IR",
        "Name": "Ingersoll Rand",
        "Slug": "ingersoll-rand"
    },
    {
        "Country": "UK",
        "Ticker": "FERG",
        "Name": "Ferguson",
        "Slug": "ferguson"
    },
    {
        "Country": "USA",
        "Ticker": "EQT",
        "Name": "EQT Corporation",
        "Slug": "eqt-corporation"
    },
    {
        "Country": "India",
        "Ticker": "TITAN.NS",
        "Name": "Titan Company",
        "Slug": "titan-company"
    },
    {
        "Country": "USA",
        "Ticker": "HUM",
        "Name": "Humana",
        "Slug": "humana"
    },
    {
        "Country": "Japan",
        "Ticker": "6857.T",
        "Name": "Advantest",
        "Slug": "advantest"
    },
    {
        "Country": "India",
        "Ticker": "POWERGRID.NS",
        "Name": "Powergrid Corporation of India",
        "Slug": "powergrid-india"
    },
    {
        "Country": "Japan",
        "Ticker": "6367.T",
        "Name": "Daikin",
        "Slug": "daikin"
    },
    {
        "Country": "Netherlands",
        "Ticker": "EXO.AS",
        "Name": "Exor",
        "Slug": "exor"
    },
    {
        "Country": "USA",
        "Ticker": "CQP",
        "Name": "Cheniere Energy\nPartners",
        "Slug": "cheniere-energy-partners"
    },
    {
        "Country": "Germany",
        "Ticker": "HEN3.DE",
        "Name": "Henkel",
        "Slug": "henkel"
    },
    {
        "Country": "Germany",
        "Ticker": "DTG.F",
        "Name": "Daimler Truck",
        "Slug": "daimler-truck"
    },
    {
        "Country": "India",
        "Ticker": "ADANIENT.NS",
        "Name": "Adani Enterprises",
        "Slug": "adani-enterprises"
    },
    {
        "Country": "USA",
        "Ticker": "EBAY",
        "Name": "eBay",
        "Slug": "ebay"
    },
    {
        "Country": "China",
        "Ticker": "603288.SS",
        "Name": "Foshan Haitian Flavouring and Food",
        "Slug": "foshan-haitian-flavouring-and-food"
    },
    {
        "Country": "USA",
        "Ticker": "DD",
        "Name": "Dupont De Nemours",
        "Slug": "dupont-de-nemours"
    },
    {
        "Country": "India",
        "Ticker": "DMART.NS",
        "Name": "DMart",
        "Slug": "dmart"
    },
    {
        "Country": "Brazil",
        "Ticker": "BPAC3.SA",
        "Name": "BTG Pactual",
        "Slug": "btg-pactual"
    },
    {
        "Country": "USA",
        "Ticker": "WAB",
        "Name": "Wabtec",
        "Slug": "wabtec"
    },
    {
        "Country": "USA",
        "Ticker": "IQV",
        "Name": "IQVIA",
        "Slug": "iqvia"
    },
    {
        "Country": "China",
        "Ticker": "2020.HK",
        "Name": "Anta Sports",
        "Slug": "anta-sports"
    },
    {
        "Country": "Switzerland",
        "Ticker": "LISP.SW",
        "Name": "Chocoladefabriken Lindt & Sprüngli",
        "Slug": "lindt"
    },
    {
        "Country": "UK",
        "Ticker": "IMB.L",
        "Name": "Imperial Brands",
        "Slug": "imperial-brands"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "J36.SI",
        "Name": "Jardine Matheson",
        "Slug": "jardine-matheson"
    },
    {
        "Country": "China",
        "Ticker": "601919.SS",
        "Name": "COSCO Shipping",
        "Slug": "cosco-shipping"
    },
    {
        "Country": "USA",
        "Ticker": "VMC",
        "Name": "Vulcan Materials",
        "Slug": "vulcan-materials"
    },
    {
        "Country": "USA",
        "Ticker": "TPL",
        "Name": "Texas Pacific Land Trust",
        "Slug": "texas-pacific-land-trust"
    },
    {
        "Country": "USA",
        "Ticker": "AVB",
        "Name": "AvalonBay Communities",
        "Slug": "avalonbay-communities"
    },
    {
        "Country": "Germany",
        "Ticker": "HEI.DE",
        "Name": "HeidelbergCement",
        "Slug": "heidelbergcement"
    },
    {
        "Country": "Taiwan",
        "Ticker": "CHT",
        "Name": "Chunghwa Telecom",
        "Slug": "chunghwa-telecom"
    },
    {
        "Country": "Australia",
        "Ticker": "TLS.AX",
        "Name": "Telstra",
        "Slug": "telstra"
    },
    {
        "Country": "USA",
        "Ticker": "ZS",
        "Name": "Zscaler",
        "Slug": "zscaler"
    },
    {
        "Country": "USA",
        "Ticker": "OWL",
        "Name": "Blue Owl Capital",
        "Slug": "blue-owl-capital"
    },
    {
        "Country": "India",
        "Ticker": "JSWSTEEL.NS",
        "Name": "JSW Steel",
        "Slug": "jsw-steel"
    },
    {
        "Country": "Canada",
        "Ticker": "QSR",
        "Name": "Restaurant Brands International",
        "Slug": "rbi"
    },
    {
        "Country": "China",
        "Ticker": "000001.SZ",
        "Name": "Ping An Bank",
        "Slug": "ping-an-bank"
    },
    {
        "Country": "Canada",
        "Ticker": "FNV",
        "Name": "Franco-Nevada",
        "Slug": "franco-nevada"
    },
    {
        "Country": "China",
        "Ticker": "1024.HK",
        "Name": "Kuaishou Technology",
        "Slug": "kuaishou-technology"
    },
    {
        "Country": "China",
        "Ticker": "601668.SS",
        "Name": "China State Construction Engineering",
        "Slug": "china-state-construction-engineering"
    },
    {
        "Country": "USA",
        "Ticker": "CNC",
        "Name": "Centene",
        "Slug": "centene"
    },
    {
        "Country": "Switzerland",
        "Ticker": "SCMN.SW",
        "Name": "Swisscom",
        "Slug": "swisscom"
    },
    {
        "Country": "USA",
        "Ticker": "VTR",
        "Name": "Ventas",
        "Slug": "ventas"
    },
    {
        "Country": "USA",
        "Ticker": "LEN",
        "Name": "Lennar",
        "Slug": "lennar"
    },
    {
        "Country": "USA",
        "Ticker": "EFX",
        "Name": "Equifax",
        "Slug": "equifax"
    },
    {
        "Country": "India",
        "Ticker": "ADANIPORTS.NS",
        "Name": "Adani Ports & SEZ",
        "Slug": "adani-ports-and-sez"
    },
    {
        "Country": "Japan",
        "Ticker": "6178.T",
        "Name": "Japan Post Holdings",
        "Slug": "japan-post"
    },
    {
        "Country": "USA",
        "Ticker": "LYV",
        "Name": "Live Nation",
        "Slug": "live-nation"
    },
    {
        "Country": "Canada",
        "Ticker": "DOL.TO",
        "Name": "Dollarama",
        "Slug": "dollarama"
    },
    {
        "Country": "Russia",
        "Ticker": "PLZL.ME",
        "Name": "Polyus",
        "Slug": "polyus"
    },
    {
        "Country": "China",
        "Ticker": "601818.SS",
        "Name": "China Everbright Bank",
        "Slug": "china-everbright-bank"
    },
    {
        "Country": "China",
        "Ticker": "002352.SZ",
        "Name": "S.F. Express",
        "Slug": "sf-express"
    },
    {
        "Country": "Australia",
        "Ticker": "FMG.AX",
        "Name": "Fortescue",
        "Slug": "fortescue"
    },
    {
        "Country": "Indonesia",
        "Ticker": "BMRI.JK",
        "Name": "Bank Mandiri",
        "Slug": "bank-mandiri"
    },
    {
        "Country": "UAE",
        "Ticker": "ALPHADHABI.AE",
        "Name": "Alpha Dhabi",
        "Slug": "alpha-dhabi"
    },
    {
        "Country": "USA",
        "Ticker": "HUBS",
        "Name": "HubSpot",
        "Slug": "hubspot"
    },
    {
        "Country": "China",
        "Ticker": "002714.SZ",
        "Name": "Muyuan Foods",
        "Slug": "muyuan-foods"
    },
    {
        "Country": "USA",
        "Ticker": "MTB",
        "Name": "M&T Bank",
        "Slug": "mt-bank"
    },
    {
        "Country": "China",
        "Ticker": "600309.SS",
        "Name": "Wanhua Chemical",
        "Slug": "wanhua-chemical"
    },
    {
        "Country": "India",
        "Ticker": "TATAMOTORS.NS",
        "Name": "Tata Motors",
        "Slug": "tata-motors"
    },
    {
        "Country": "USA",
        "Ticker": "TSCO",
        "Name": "Tractor Supply",
        "Slug": "tractor-supply"
    },
    {
        "Country": "USA",
        "Ticker": "MLM",
        "Name": "Martin Marietta",
        "Slug": "martin-marietta"
    },
    {
        "Country": "USA",
        "Ticker": "ROK",
        "Name": "Rockwell Automation",
        "Slug": "rockwell-automation"
    },
    {
        "Country": "Germany",
        "Ticker": "BEI.DE",
        "Name": "Beiersdorf",
        "Slug": "beiersdorf"
    },
    {
        "Country": "Japan",
        "Ticker": "7751.T",
        "Name": "Canon",
        "Slug": "canon"
    },
    {
        "Country": "UK",
        "Ticker": "TSCO.L",
        "Name": "Tesco",
        "Slug": "tesco"
    },
    {
        "Country": "USA",
        "Ticker": "XYL",
        "Name": "Xylem",
        "Slug": "xylem"
    },
    {
        "Country": "Italy",
        "Ticker": "LDO.MI",
        "Name": "Leonardo",
        "Slug": "leonardo"
    },
    {
        "Country": "Japan",
        "Ticker": "6981.T",
        "Name": "Murata Manufacturing (Murata Seisakusho)",
        "Slug": "murata-seisakusho"
    },
    {
        "Country": "USA",
        "Ticker": "AWK",
        "Name": "American Water Works",
        "Slug": "american-water-works"
    },
    {
        "Country": "India",
        "Ticker": "COALINDIA.NS",
        "Name": "Coal India",
        "Slug": "coal-india"
    },
    {
        "Country": "Finland",
        "Ticker": "NOK",
        "Name": "Nokia",
        "Slug": "nokia"
    },
    {
        "Country": "Japan",
        "Ticker": "8630.T",
        "Name": "Sompo Holdings",
        "Slug": "sompo-holdings"
    },
    {
        "Country": "Sweden",
        "Ticker": "HEXA-B.ST",
        "Name": "Hexagon AB",
        "Slug": "hexagon"
    },
    {
        "Country": "USA",
        "Ticker": "DTE",
        "Name": "DTE Energy",
        "Slug": "dte-energy"
    },
    {
        "Country": "USA",
        "Ticker": "K",
        "Name": "Kellanova \n (Kellogg's)",
        "Slug": "kellogg-company"
    },
    {
        "Country": "Finland",
        "Ticker": "KNEBV.HE",
        "Name": "KONE",
        "Slug": "kone"
    },
    {
        "Country": "Kuwait",
        "Ticker": "NBK.KW",
        "Name": "National Bank of Kuwait",
        "Slug": "national-bank-of-kuwait"
    },
    {
        "Country": "USA",
        "Ticker": "RJF",
        "Name": "Raymond James",
        "Slug": "raymond-james"
    },
    {
        "Country": "Taiwan",
        "Ticker": "2308.TW",
        "Name": "Delta Electronics",
        "Slug": "delta-electronics"
    },
    {
        "Country": "USA",
        "Ticker": "IP",
        "Name": "International Paper",
        "Slug": "international-paper"
    },
    {
        "Country": "Spain",
        "Ticker": "ELE.MC",
        "Name": "Endesa",
        "Slug": "endesa"
    },
    {
        "Country": "Japan",
        "Ticker": "6701.T",
        "Name": "NEC Corp",
        "Slug": "nec-corp"
    },
    {
        "Country": "UK",
        "Ticker": "PUK",
        "Name": "Prudential",
        "Slug": "prudential"
    },
    {
        "Country": "USA",
        "Ticker": "BR",
        "Name": "Broadridge Financial Solutions",
        "Slug": "broadridge-financial-solutions"
    },
    {
        "Country": "USA",
        "Ticker": "EQR",
        "Name": "Equity Residential",
        "Slug": "equity-residential"
    },
    {
        "Country": "Brazil",
        "Ticker": "BBAS3.SA",
        "Name": "Banco do Brasil",
        "Slug": "banco-do-brasil"
    },
    {
        "Country": "France",
        "Ticker": "LR.PA",
        "Name": "Legrand",
        "Slug": "legrand"
    },
    {
        "Country": "Australia",
        "Ticker": "WDS",
        "Name": "Woodside Energy",
        "Slug": "woodside-energy"
    },
    {
        "Country": "Japan",
        "Ticker": "8750.T",
        "Name": "Dai-ichi Life Holdings",
        "Slug": "dai-ichi-life"
    },
    {
        "Country": "Japan",
        "Ticker": "4578.T",
        "Name": "Otsuka Holdings",
        "Slug": "otsuka-holdings"
    },
    {
        "Country": "USA",
        "Ticker": "DAL",
        "Name": "Delta Air Lines",
        "Slug": "delta-air-lines"
    },
    {
        "Country": "Japan",
        "Ticker": "6752.T",
        "Name": "Panasonic",
        "Slug": "panasonic"
    },
    {
        "Country": "Japan",
        "Ticker": "4543.T",
        "Name": "Terumo",
        "Slug": "terumo"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "0016.HK",
        "Name": "Sun Hung Kai Properties",
        "Slug": "sun-hung-kai-properties"
    },
    {
        "Country": "USA",
        "Ticker": "LVS",
        "Name": "Las Vegas Sands",
        "Slug": "las-vegas-sands"
    },
    {
        "Country": "USA",
        "Ticker": "ANSS",
        "Name": "Ansys",
        "Slug": "ansys"
    },
    {
        "Country": "Switzerland",
        "Ticker": "KNIN.SW",
        "Name": "Kühne + Nagel",
        "Slug": "kuhne-nagel"
    },
    {
        "Country": "Japan",
        "Ticker": "5108.T",
        "Name": "Bridgestone",
        "Slug": "bridgestone"
    },
    {
        "Country": "Turkey",
        "Ticker": "QNBFB.IS",
        "Name": "QNB Finansbank",
        "Slug": "qnb-finansbank"
    },
    {
        "Country": "USA",
        "Ticker": "NUE",
        "Name": "Nucor",
        "Slug": "nucor"
    },
    {
        "Country": "Japan",
        "Ticker": "8053.T",
        "Name": "Sumitomo",
        "Slug": "sumitomo"
    },
    {
        "Country": "Denmark",
        "Ticker": "DANS.VI",
        "Name": "Danske Bank",
        "Slug": "danske-bank"
    },
    {
        "Country": "Austria",
        "Ticker": "EBO.F",
        "Name": "Erste Group Bank",
        "Slug": "erste-group-bank"
    },
    {
        "Country": "Taiwan",
        "Ticker": "2882.TW",
        "Name": "Cathay Financial Holding",
        "Slug": "cathay-financial-holding"
    },
    {
        "Country": "Germany",
        "Ticker": "HLAG.DE",
        "Name": "Hapag-Lloyd",
        "Slug": "hapag-lloyd"
    },
    {
        "Country": "USA",
        "Ticker": "AEE",
        "Name": "Ameren",
        "Slug": "ameren"
    },
    {
        "Country": "Denmark",
        "Ticker": "NZYM.VI",
        "Name": "Novozymes",
        "Slug": "novozymes"
    },
    {
        "Country": "China",
        "Ticker": "LI",
        "Name": "Li Auto",
        "Slug": "li-auto"
    },
    {
        "Country": "USA",
        "Ticker": "VRT",
        "Name": "Vertiv Holdings",
        "Slug": "vertiv-holdings"
    },
    {
        "Country": "Germany",
        "Ticker": "TLX.DE",
        "Name": "Talanx",
        "Slug": "talanx"
    },
    {
        "Country": "China",
        "Ticker": "601633.SS",
        "Name": "Great Wall Motors",
        "Slug": "great-wall-motors"
    },
    {
        "Country": "USA",
        "Ticker": "MPWR",
        "Name": "Monolithic Power Systems",
        "Slug": "monolithic-power-systems"
    },
    {
        "Country": "USA",
        "Ticker": "CHD",
        "Name": "Church & Dwight",
        "Slug": "church-and-dwight"
    },
    {
        "Country": "Thailand",
        "Ticker": "PTT-R.BK",
        "Name": "PTT PCL",
        "Slug": "ptt-pcl"
    },
    {
        "Country": "USA",
        "Ticker": "TTD",
        "Name": "The Trade Desk",
        "Slug": "the-trade-desk"
    },
    {
        "Country": "USA",
        "Ticker": "WRB",
        "Name": "W. R. Berkley",
        "Slug": "wr-berkley"
    },
    {
        "Country": "Denmark",
        "Ticker": "MAERSK-B.CO",
        "Name": "Maersk",
        "Slug": "maersk"
    },
    {
        "Country": "Spain",
        "Ticker": "NTGY.MC",
        "Name": "Naturgy",
        "Slug": "naturgy"
    },
    {
        "Country": "China",
        "Ticker": "9992.HK",
        "Name": "Pop Mart International Group",
        "Slug": "pop-mart-international-group"
    },
    {
        "Country": "Czech Republic",
        "Ticker": "CEZ.PR",
        "Name": "ČEZ Group",
        "Slug": "cez-group"
    },
    {
        "Country": "Japan",
        "Ticker": "6301.T",
        "Name": "Komatsu",
        "Slug": "komatsu"
    },
    {
        "Country": "USA",
        "Ticker": "PPL",
        "Name": "PPL",
        "Slug": "ppl"
    },
    {
        "Country": "USA",
        "Ticker": "DXCM",
        "Name": "DexCom",
        "Slug": "dexcom"
    },
    {
        "Country": "Spain",
        "Ticker": "TEF",
        "Name": "Telefónica",
        "Slug": "telefonica"
    },
    {
        "Country": "Germany",
        "Ticker": "RWE.DE",
        "Name": "RWE",
        "Slug": "rwe"
    },
    {
        "Country": "Japan",
        "Ticker": "8002.T",
        "Name": "Marubeni",
        "Slug": "marubeni"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "1010.SR",
        "Name": "Riyad Bank",
        "Slug": "riyad-bank"
    },
    {
        "Country": "China",
        "Ticker": "000568.SZ",
        "Name": "Luzhou Laojiao",
        "Slug": "luzhou-laojiao"
    },
    {
        "Country": "USA",
        "Ticker": "CCL",
        "Name": "Carnival Corporation",
        "Slug": "carnival-cruise-line"
    },
    {
        "Country": "France",
        "Ticker": "AM.PA",
        "Name": "Dassault Aviation",
        "Slug": "dassault-aviation"
    },
    {
        "Country": "Sweden",
        "Ticker": "SAND.ST",
        "Name": "Sandvik",
        "Slug": "sandvik"
    },
    {
        "Country": "China",
        "Ticker": "601127.SS",
        "Name": "Seres Group",
        "Slug": "seres-group"
    },
    {
        "Country": "Switzerland",
        "Ticker": "DSFIR.AS",
        "Name": "DSM-Firmenich",
        "Slug": "dsm-firmenich"
    },
    {
        "Country": "India",
        "Ticker": "ASIANPAINT.NS",
        "Name": "Asian Paints",
        "Slug": "asian-paints"
    },
    {
        "Country": "Taiwan",
        "Ticker": "2382.TW",
        "Name": "Quanta Computer",
        "Slug": "quanta-computer"
    },
    {
        "Country": "Germany",
        "Ticker": "CBK.F",
        "Name": "Commerzbank",
        "Slug": "commerzbank"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "4013.SR",
        "Name": "Dr. Sulaiman Al Habib Medical Services Group Company",
        "Slug": "dr-sulaiman-al-habib-medical-services-group"
    },
    {
        "Country": "USA",
        "Ticker": "EXE",
        "Name": "Expand Energy",
        "Slug": "expand-energy"
    },
    {
        "Country": "Switzerland",
        "Ticker": "SLHN.SW",
        "Name": "Swiss Life",
        "Slug": "swiss-life"
    },
    {
        "Country": "USA",
        "Ticker": "ROL",
        "Name": "Rollins",
        "Slug": "rollins"
    },
    {
        "Country": "Australia",
        "Ticker": "TCL.AX",
        "Name": "Transurban",
        "Slug": "transurban"
    },
    {
        "Country": "Sweden",
        "Ticker": "ERIC",
        "Name": "Ericsson",
        "Slug": "ericsson"
    },
    {
        "Country": "USA",
        "Ticker": "HPQ",
        "Name": "HP",
        "Slug": "hp"
    },
    {
        "Country": "USA",
        "Ticker": "FITB",
        "Name": "Fifth Third Bank",
        "Slug": "fifth-third-bank"
    },
    {
        "Country": "India",
        "Ticker": "BEL.NS",
        "Name": "Bharat Electronics",
        "Slug": "bharat-electronics"
    },
    {
        "Country": "Finland",
        "Ticker": "SAMPO.HE",
        "Name": "Sampo",
        "Slug": "sampo"
    },
    {
        "Country": "India",
        "Ticker": "BAJAJ-AUTO.NS",
        "Name": "Bajaj Auto",
        "Slug": "bajaj-auto"
    },
    {
        "Country": "France",
        "Ticker": "KER.PA",
        "Name": "Kering",
        "Slug": "kering"
    },
    {
        "Country": "Japan",
        "Ticker": "6201.T",
        "Name": "Toyota Industries",
        "Slug": "toyota-industries"
    },
    {
        "Country": "USA",
        "Ticker": "MCHP",
        "Name": "Microchip Technology",
        "Slug": "microchip-technology"
    },
    {
        "Country": "USA",
        "Ticker": "STT",
        "Name": "State Street Corporation",
        "Slug": "state-street-corporation"
    },
    {
        "Country": "Norway",
        "Ticker": "KOG.OL",
        "Name": "Kongsberg Gruppen",
        "Slug": "kongsberg-gruppen"
    },
    {
        "Country": "USA",
        "Ticker": "WBD",
        "Name": "Warner Bros. Discovery",
        "Slug": "warner-bros-discovery"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "0011.HK",
        "Name": "Hang Seng Bank",
        "Slug": "hang-seng-bank"
    },
    {
        "Country": "Canada",
        "Ticker": "CVE",
        "Name": "Cenovus Energy",
        "Slug": "cenovus-energy"
    },
    {
        "Country": "Sweden",
        "Ticker": "SWED-A.ST",
        "Name": "Swedbank",
        "Slug": "swedbank"
    },
    {
        "Country": "USA",
        "Ticker": "KEYS",
        "Name": "Keysight",
        "Slug": "keysight"
    },
    {
        "Country": "France",
        "Ticker": "CAP.PA",
        "Name": "Capgemini",
        "Slug": "capgemini"
    },
    {
        "Country": "India",
        "Ticker": "NESTLEIND.NS",
        "Name": "Nestlé India",
        "Slug": "nestle-india"
    },
    {
        "Country": "China",
        "Ticker": "300124.SZ",
        "Name": "Shenzhen Inovance",
        "Slug": "shenzhen-inovance"
    },
    {
        "Country": "Japan",
        "Ticker": "6954.T",
        "Name": "Fanuc",
        "Slug": "fanuc"
    },
    {
        "Country": "USA",
        "Ticker": "GDDY",
        "Name": "GoDaddy",
        "Slug": "godaddy"
    },
    {
        "Country": "USA",
        "Ticker": "VG",
        "Name": "Venture Global",
        "Slug": "venture-global"
    },
    {
        "Country": "China",
        "Ticker": "600104.SS",
        "Name": "SAIC Motor",
        "Slug": "saic-motor"
    },
    {
        "Country": "USA",
        "Ticker": "IRM",
        "Name": "Iron Mountain",
        "Slug": "iron-mountain"
    },
    {
        "Country": "Switzerland",
        "Ticker": "GALD.SW",
        "Name": "Galderma Group",
        "Slug": "galderma-group"
    },
    {
        "Country": "China",
        "Ticker": "2359.HK",
        "Name": "WuXi AppTec",
        "Slug": "wuxi-apptec"
    },
    {
        "Country": "Japan",
        "Ticker": "9613.T",
        "Name": "NTT Data",
        "Slug": "ntt-data"
    },
    {
        "Country": "France",
        "Ticker": "VIE.PA",
        "Name": "Veolia",
        "Slug": "veolia"
    },
    {
        "Country": "Australia",
        "Ticker": "ALL.AX",
        "Name": "Aristocrat",
        "Slug": "aristocrat"
    },
    {
        "Country": "France",
        "Ticker": "ML.PA",
        "Name": "Michelin",
        "Slug": "michelin"
    },
    {
        "Country": "S. Korea",
        "Ticker": "068270.KS",
        "Name": "Celltrion",
        "Slug": "celltrion"
    },
    {
        "Country": "Austria",
        "Ticker": "OEWA.F",
        "Name": "Verbund AG",
        "Slug": "verbund"
    },
    {
        "Country": "China",
        "Ticker": "TME",
        "Name": "Tencent Music",
        "Slug": "tencent-music"
    },
    {
        "Country": "France",
        "Ticker": "RI.PA",
        "Name": "Pernod Ricard",
        "Slug": "pernod-ricard"
    },
    {
        "Country": "S. Korea",
        "Ticker": "000270.KS",
        "Name": "Kia",
        "Slug": "kia"
    },
    {
        "Country": "Spain",
        "Ticker": "CLNX.MC",
        "Name": "Cellnex Telecom",
        "Slug": "cellnex-telecom"
    },
    {
        "Country": "USA",
        "Ticker": "TYL",
        "Name": "Tyler Technologies",
        "Slug": "tyler-technologies"
    },
    {
        "Country": "USA",
        "Ticker": "CVNA",
        "Name": "Carvana",
        "Slug": "carvana"
    },
    {
        "Country": "Japan",
        "Ticker": "8801.T",
        "Name": "Mitsui Fudosan",
        "Slug": "mitsui-fudosan"
    },
    {
        "Country": "China",
        "Ticker": "600887.SS",
        "Name": "Yili Group",
        "Slug": "yili-group"
    },
    {
        "Country": "China",
        "Ticker": "1766.HK",
        "Name": "CRRC",
        "Slug": "crrc"
    },
    {
        "Country": "USA",
        "Ticker": "FCNCA",
        "Name": "First Citizens BancShares",
        "Slug": "first-citizens-bancshares"
    },
    {
        "Country": "USA",
        "Ticker": "LPLA",
        "Name": "LPL Financial",
        "Slug": "lpl-financial"
    },
    {
        "Country": "USA",
        "Ticker": "DOW",
        "Name": "Dow",
        "Slug": "dow"
    },
    {
        "Country": "Israel",
        "Ticker": "CHKP",
        "Name": "Check Point Software",
        "Slug": "check-point-software"
    },
    {
        "Country": "China",
        "Ticker": "BEKE",
        "Name": "KE Holdings",
        "Slug": "ke-holdings"
    },
    {
        "Country": "USA",
        "Ticker": "FTV",
        "Name": "Fortive",
        "Slug": "fortive"
    },
    {
        "Country": "USA",
        "Ticker": "MTD",
        "Name": "Mettler-Toledo",
        "Slug": "mettler-toledo"
    },
    {
        "Country": "USA",
        "Ticker": "ATO",
        "Name": "Atmos Energy",
        "Slug": "atmos-energy"
    },
    {
        "Country": "USA",
        "Ticker": "FOX",
        "Name": "Fox Corporation",
        "Slug": "fox-corporation"
    },
    {
        "Country": "USA",
        "Ticker": "DVN",
        "Name": "Devon Energy",
        "Slug": "devon-energy"
    },
    {
        "Country": "USA",
        "Ticker": "PPG",
        "Name": "PPG Industries",
        "Slug": "ppg-industries"
    },
    {
        "Country": "Poland",
        "Ticker": "PKO.WA",
        "Name": "PKO Bank Polski",
        "Slug": "pko-bank-polski"
    },
    {
        "Country": "USA",
        "Ticker": "DRI",
        "Name": "Darden Restaurants",
        "Slug": "darden-restaurants"
    },
    {
        "Country": "Canada",
        "Ticker": "NTR",
        "Name": "Nutrien",
        "Slug": "nutrien"
    },
    {
        "Country": "USA",
        "Ticker": "CPAY",
        "Name": "Corpay",
        "Slug": "corpay"
    },
    {
        "Country": "Thailand",
        "Ticker": "DELTA.BK",
        "Name": "Delta Electronics (Thailand)",
        "Slug": "delta-electronics-thailand"
    },
    {
        "Country": "Japan",
        "Ticker": "4689.T",
        "Name": "Z Holdings",
        "Slug": "z-holdings"
    },
    {
        "Country": "Thailand",
        "Ticker": "ADVANC.BK",
        "Name": "Advanced Info Service (AIS)",
        "Slug": "advanced-info-service"
    },
    {
        "Country": "China",
        "Ticker": "600919.SS",
        "Name": "Bank of Jiangsu",
        "Slug": "bank-of-jiangsu"
    },
    {
        "Country": "Germany",
        "Ticker": "FRE.DE",
        "Name": "Fresenius",
        "Slug": "fresenius"
    },
    {
        "Country": "USA",
        "Ticker": "GPN",
        "Name": "Global Payments",
        "Slug": "global-payments"
    },
    {
        "Country": "USA",
        "Ticker": "DOV",
        "Name": "Dover",
        "Slug": "dover"
    },
    {
        "Country": "Japan",
        "Ticker": "6723.T",
        "Name": "Renesas Electronics",
        "Slug": "renesas-electronics"
    },
    {
        "Country": "USA",
        "Ticker": "VLTO",
        "Name": "Veralto",
        "Slug": "veralto"
    },
    {
        "Country": "USA",
        "Ticker": "VRSN",
        "Name": "VeriSign",
        "Slug": "verisign"
    },
    {
        "Country": "UK",
        "Ticker": "AHT.L",
        "Name": "Ashtead",
        "Slug": "ashtead"
    },
    {
        "Country": "USA",
        "Ticker": "MKL",
        "Name": "Markel",
        "Slug": "markel"
    },
    {
        "Country": "China",
        "Ticker": "0788.HK",
        "Name": "China Tower",
        "Slug": "china-tower"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "1109.HK",
        "Name": "China Resources Land",
        "Slug": "china-resources-land"
    },
    {
        "Country": "USA",
        "Ticker": "CNP",
        "Name": "CenterPoint Energy",
        "Slug": "centerpoint-energy"
    },
    {
        "Country": "USA",
        "Ticker": "EL",
        "Name": "Estee Lauder",
        "Slug": "estee-lauder"
    },
    {
        "Country": "Japan",
        "Ticker": "IX",
        "Name": "ORIX",
        "Slug": "orix"
    },
    {
        "Country": "Denmark",
        "Ticker": "COLO-B.CO",
        "Name": "Coloplast",
        "Slug": "coloplast"
    },
    {
        "Country": "France",
        "Ticker": "PUB.PA",
        "Name": "Publicis Groupe",
        "Slug": "publicis-groupe"
    },
    {
        "Country": "USA",
        "Ticker": "CBOE",
        "Name": "Cboe",
        "Slug": "cboe"
    },
    {
        "Country": "China",
        "Ticker": "002142.SZ",
        "Name": "Bank of Ningbo",
        "Slug": "bank-of-ningbo"
    },
    {
        "Country": "USA",
        "Ticker": "SBAC",
        "Name": "SBA Communications",
        "Slug": "sba-communications"
    },
    {
        "Country": "USA",
        "Ticker": "RKT",
        "Name": "Rocket Companies",
        "Slug": "rocket-companies"
    },
    {
        "Country": "Germany",
        "Ticker": "BAYN.DE",
        "Name": "Bayer",
        "Slug": "bayer"
    },
    {
        "Country": "UK",
        "Ticker": "VOD",
        "Name": "Vodafone",
        "Slug": "vodafone"
    },
    {
        "Country": "Taiwan",
        "Ticker": "2891.TW",
        "Name": "CTBC Financial Holding",
        "Slug": "ctbc-financial-holding"
    },
    {
        "Country": "Netherlands",
        "Ticker": "PHG",
        "Name": "Philips",
        "Slug": "philips"
    },
    {
        "Country": "Japan",
        "Ticker": "7269.T",
        "Name": "Suzuki Motor",
        "Slug": "suzuki-motor"
    },
    {
        "Country": "Ireland",
        "Ticker": "SW",
        "Name": "Smurfit Westrock",
        "Slug": "smurfit-westrock"
    },
    {
        "Country": "Canada",
        "Ticker": "PBA",
        "Name": "Pembina Pipeline",
        "Slug": "pembina-pipeline"
    },
    {
        "Country": "Sweden",
        "Ticker": "EPI-A.ST",
        "Name": "Epiroc",
        "Slug": "epiroc"
    },
    {
        "Country": "USA",
        "Ticker": "FE",
        "Name": "FirstEnergy",
        "Slug": "firstenergy"
    },
    {
        "Country": "China",
        "Ticker": "600016.SS",
        "Name": "China Minsheng Bank",
        "Slug": "china-minsheng-bank"
    },
    {
        "Country": "USA",
        "Ticker": "TDY",
        "Name": "Teledyne",
        "Slug": "teledyne"
    },
    {
        "Country": "India",
        "Ticker": "INDIGO.NS",
        "Name": "InterGlobe Aviation",
        "Slug": "interglobe-aviation"
    },
    {
        "Country": "South Africa",
        "Ticker": "FSR.JO",
        "Name": "FirstRand",
        "Slug": "firstrand"
    },
    {
        "Country": "USA",
        "Ticker": "CINF",
        "Name": "Cincinnati Financial",
        "Slug": "cincinnati-financial"
    },
    {
        "Country": "Italy",
        "Ticker": "PST.MI",
        "Name": "Poste Italiane",
        "Slug": "poste-italiane"
    },
    {
        "Country": "USA",
        "Ticker": "ADM",
        "Name": "Archer Daniels Midland (ADM)",
        "Slug": "archer-daniels-midland"
    },
    {
        "Country": "China",
        "Ticker": "DIDIY",
        "Name": "DiDi",
        "Slug": "didi"
    },
    {
        "Country": "India",
        "Ticker": "ADANIPOWER.NS",
        "Name": "Adani Power",
        "Slug": "adani-power"
    },
    {
        "Country": "Japan",
        "Ticker": "4901.T",
        "Name": "Fujifilm",
        "Slug": "fujifilm"
    },
    {
        "Country": "India",
        "Ticker": "HINDZINC.NS",
        "Name": "Hindustan Zinc",
        "Slug": "hindustan-zinc"
    },
    {
        "Country": "USA",
        "Ticker": "LYB",
        "Name": "LyondellBasell",
        "Slug": "lyondellbasell"
    },
    {
        "Country": "Luxembourg",
        "Ticker": "MT",
        "Name": "ArcelorMittal",
        "Slug": "arcelor-mittal"
    },
    {
        "Country": "UK",
        "Ticker": "SSE.L",
        "Name": "SSE",
        "Slug": "sse"
    },
    {
        "Country": "Canada",
        "Ticker": "FTS",
        "Name": "Fortis",
        "Slug": "fortis"
    },
    {
        "Country": "USA",
        "Ticker": "TSN",
        "Name": "Tyson Foods",
        "Slug": "tyson-foods"
    },
    {
        "Country": "Canada",
        "Ticker": "POW.TO",
        "Name": "Power Corporation of Canada",
        "Slug": "power-corp-canada"
    },
    {
        "Country": "Japan",
        "Ticker": "6273.T",
        "Name": "SMC corp",
        "Slug": "smc"
    },
    {
        "Country": "Netherlands",
        "Ticker": "ASM.AS",
        "Name": "ASM International",
        "Slug": "asm-international"
    },
    {
        "Country": "USA",
        "Ticker": "ES",
        "Name": "Eversource Energy",
        "Slug": "eversource-energy"
    },
    {
        "Country": "USA",
        "Ticker": "EIX",
        "Name": "Edison International",
        "Slug": "edison-international"
    },
    {
        "Country": "South Africa",
        "Ticker": "SBK.JO",
        "Name": "Standard Bank Group",
        "Slug": "standard-bank-group"
    },
    {
        "Country": "Australia",
        "Ticker": "WOW.AX",
        "Name": "Woolworths Group",
        "Slug": "woolworths-group"
    },
    {
        "Country": "Brazil",
        "Ticker": "BBD",
        "Name": "Banco Bradesco",
        "Slug": "banco-bradesco"
    },
    {
        "Country": "India",
        "Ticker": "TATASTEEL.NS",
        "Name": "Tata Steel",
        "Slug": "tata-steel"
    },
    {
        "Country": "Sweden",
        "Ticker": "SHB-A.ST",
        "Name": "Svenska Handelsbanken",
        "Slug": "svenska-handelsbanken"
    },
    {
        "Country": "Ireland",
        "Ticker": "RYAAY",
        "Name": "Ryanair",
        "Slug": "ryanair"
    },
    {
        "Country": "UAE",
        "Ticker": "ADNOCDRILL.AE",
        "Name": "ADNOC Drilling Company",
        "Slug": "adnoc-drilling-company"
    },
    {
        "Country": "USA",
        "Ticker": "ZBH",
        "Name": "Zimmer Biomet",
        "Slug": "zimmer-biomet"
    },
    {
        "Country": "USA",
        "Ticker": "ZM",
        "Name": "Zoom",
        "Slug": "zoom"
    },
    {
        "Country": "USA",
        "Ticker": "CMS",
        "Name": "CMS Energy",
        "Slug": "cms-energy"
    },
    {
        "Country": "Japan",
        "Ticker": "9020.T",
        "Name": "East Japan Railway",
        "Slug": "east-japan-railway"
    },
    {
        "Country": "Japan",
        "Ticker": "5401.T",
        "Name": "Nippon Steel",
        "Slug": "nippon-steel"
    },
    {
        "Country": "USA",
        "Ticker": "UAL",
        "Name": "United Airlines Holdings",
        "Slug": "united-airlines"
    },
    {
        "Country": "Brazil",
        "Ticker": "KLBN11.SA",
        "Name": "Klabin",
        "Slug": "klabin"
    },
    {
        "Country": "China",
        "Ticker": "600031.SS",
        "Name": "Sany Heavy Industry",
        "Slug": "sany-heavy-industry"
    },
    {
        "Country": "Canada",
        "Ticker": "GIB",
        "Name": "CGI",
        "Slug": "cgi"
    },
    {
        "Country": "Germany",
        "Ticker": "VNA.DE",
        "Name": "Vonovia",
        "Slug": "vonovia"
    },
    {
        "Country": "USA",
        "Ticker": "HAL",
        "Name": "Halliburton",
        "Slug": "halliburton"
    },
    {
        "Country": "India",
        "Ticker": "TRENT.NS",
        "Name": "Trent Limited",
        "Slug": "trent"
    },
    {
        "Country": "Ireland",
        "Ticker": "STE",
        "Name": "Steris",
        "Slug": "steris"
    },
    {
        "Country": "USA",
        "Ticker": "CTRA",
        "Name": "Coterra Energy",
        "Slug": "coterra-energy"
    },
    {
        "Country": "Canada",
        "Ticker": "WN.TO",
        "Name": "George Weston",
        "Slug": "george-weston"
    },
    {
        "Country": "USA",
        "Ticker": "MKC",
        "Name": "McCormick & Company",
        "Slug": "mc-cormick"
    },
    {
        "Country": "USA",
        "Ticker": "FWONK",
        "Name": "Formula One Group",
        "Slug": "formula-one-group"
    },
    {
        "Country": "Canada",
        "Ticker": "WSP.TO",
        "Name": "WSP Global",
        "Slug": "wsp-global"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "0669.HK",
        "Name": "Techtronic Industries",
        "Slug": "techtronic-industries"
    },
    {
        "Country": "Russia",
        "Ticker": "GMKN.ME",
        "Name": "Nornickel",
        "Slug": "nornickel"
    },
    {
        "Country": "India",
        "Ticker": "SIEMENS.NS",
        "Name": "Siemens India",
        "Slug": "siemens-india"
    },
    {
        "Country": "Colombia",
        "Ticker": "EC",
        "Name": "Ecopetrol",
        "Slug": "ecopetrol"
    },
    {
        "Country": "UK",
        "Ticker": "ANTO.L",
        "Name": "Antofagasta",
        "Slug": "antofagasta"
    },
    {
        "Country": "Japan",
        "Ticker": "7832.T",
        "Name": "Bandai Namco",
        "Slug": "bandai-namco"
    },
    {
        "Country": "UAE",
        "Ticker": "ADCB.AE",
        "Name": "Abu Dhabi Commercial Bank (ADCB)",
        "Slug": "abu-dhabi-commercial-bank-adcb"
    },
    {
        "Country": "Canada",
        "Ticker": "TU",
        "Name": "Telus",
        "Slug": "telus"
    },
    {
        "Country": "USA",
        "Ticker": "HBAN",
        "Name": "Huntington Bancshares",
        "Slug": "huntington-bancshares"
    },
    {
        "Country": "USA",
        "Ticker": "ERIE",
        "Name": "Erie Indemnity",
        "Slug": "erie-indemnity"
    },
    {
        "Country": "Japan",
        "Ticker": "6146.T",
        "Name": "Disco Corp.",
        "Slug": "disco-corp"
    },
    {
        "Country": "China",
        "Ticker": "601066.SS",
        "Name": "China Securities",
        "Slug": "china-securities"
    },
    {
        "Country": "USA",
        "Ticker": "WAT",
        "Name": "Waters Corporation",
        "Slug": "waters-corporation"
    },
    {
        "Country": "China",
        "Ticker": "0175.HK",
        "Name": "Geely",
        "Slug": "geely"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "0001.HK",
        "Name": "CK Hutchison Holdings",
        "Slug": "ck-hutchison-holdings"
    },
    {
        "Country": "China",
        "Ticker": "000063.SZ",
        "Name": "ZTE",
        "Slug": "zte"
    },
    {
        "Country": "USA",
        "Ticker": "IOT",
        "Name": "Samsara",
        "Slug": "samsara"
    },
    {
        "Country": "Japan",
        "Ticker": "8267.T",
        "Name": "Aeon",
        "Slug": "aeon"
    },
    {
        "Country": "USA",
        "Ticker": "NVR",
        "Name": "NVR",
        "Slug": "nvr"
    },
    {
        "Country": "Qatar",
        "Ticker": "IQCD.QA",
        "Name": "Industries Qatar",
        "Slug": "industries-qatar"
    },
    {
        "Country": "China",
        "Ticker": "000725.SZ",
        "Name": "BOE Technology",
        "Slug": "boe-tech"
    },
    {
        "Country": "India",
        "Ticker": "VBL.NS",
        "Name": "Varun Beverages",
        "Slug": "varun-beverages"
    },
    {
        "Country": "India",
        "Ticker": "ZOMATO.NS",
        "Name": "Zomato",
        "Slug": "zomato"
    },
    {
        "Country": "USA",
        "Ticker": "INVH",
        "Name": "Invitation Homes",
        "Slug": "invitation-homes"
    },
    {
        "Country": "India",
        "Ticker": "VEDL.NS",
        "Name": "Vedanta",
        "Slug": "vedanta"
    },
    {
        "Country": "USA",
        "Ticker": "EXPE",
        "Name": "Expedia Group",
        "Slug": "expedia"
    },
    {
        "Country": "Canada",
        "Ticker": "BCE",
        "Name": "BCE",
        "Slug": "bce"
    },
    {
        "Country": "Germany",
        "Ticker": "BNTX",
        "Name": "BioNTech",
        "Slug": "biontech"
    },
    {
        "Country": "USA",
        "Ticker": "CDW",
        "Name": "CDW Corporation",
        "Slug": "cdw-corporation"
    },
    {
        "Country": "USA",
        "Ticker": "ESS",
        "Name": "Essex Property Trust",
        "Slug": "essex-property-trust"
    },
    {
        "Country": "Luxembourg",
        "Ticker": "TS",
        "Name": "Tenaris",
        "Slug": "tenaris"
    },
    {
        "Country": "India",
        "Ticker": "IOC.NS",
        "Name": "Indian Oil",
        "Slug": "indian-oil"
    },
    {
        "Country": "USA",
        "Ticker": "WY",
        "Name": "Weyerhaeuser",
        "Slug": "weyerhaeuser"
    },
    {
        "Country": "Germany",
        "Ticker": "EBK.DE",
        "Name": "EnBW Energie",
        "Slug": "enbw-energie"
    },
    {
        "Country": "Sweden",
        "Ticker": "HM-B.ST",
        "Name": "H&M",
        "Slug": "h-m"
    },
    {
        "Country": "Sweden",
        "Ticker": "SAAB-B.ST",
        "Name": "SAAB AB",
        "Slug": "saab"
    },
    {
        "Country": "UK",
        "Ticker": "BT-A.L",
        "Name": "BT Group",
        "Slug": "bt-group"
    },
    {
        "Country": "USA",
        "Ticker": "PINS",
        "Name": "Pinterest",
        "Slug": "pinterest"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "7203.SR",
        "Name": "Elm Company",
        "Slug": "elm-company"
    },
    {
        "Country": "Australia",
        "Ticker": "QBE.AX",
        "Name": "QBE Insurance",
        "Slug": "qbe-insurance"
    },
    {
        "Country": "China",
        "Ticker": "600999.SS",
        "Name": "China Merchants Securities",
        "Slug": "china-merchants-securities"
    },
    {
        "Country": "South Africa",
        "Ticker": "CPI.JO",
        "Name": "Capitec Bank",
        "Slug": "capitec-bank"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "0002.HK",
        "Name": "CLP Group",
        "Slug": "clp-group"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "1060.SR",
        "Name": "The Saudi British Bank",
        "Slug": "sabb"
    },
    {
        "Country": "USA",
        "Ticker": "PHM",
        "Name": "PulteGroup",
        "Slug": "pultegroup"
    },
    {
        "Country": "Switzerland",
        "Ticker": "GEBN.SW",
        "Name": "Geberit",
        "Slug": "geberit"
    },
    {
        "Country": "Japan",
        "Ticker": "1925.T",
        "Name": "Daiwa House",
        "Slug": "daiwa-house"
    },
    {
        "Country": "Poland",
        "Ticker": "PKN.WA",
        "Name": "PKN Orlen",
        "Slug": "pkn-orlen"
    },
    {
        "Country": "USA",
        "Ticker": "WSO",
        "Name": "Watsco",
        "Slug": "watsco"
    },
    {
        "Country": "S. Arabia",
        "Ticker": "1150.SR",
        "Name": "Alinma Bank",
        "Slug": "alinma-bank"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "0066.HK",
        "Name": "MTR Corporation",
        "Slug": "mtr-corporation"
    },
    {
        "Country": "USA",
        "Ticker": "SYF",
        "Name": "Synchrony",
        "Slug": "synchrony"
    },
    {
        "Country": "USA",
        "Ticker": "HPE",
        "Name": "Hewlett Packard Enterprise",
        "Slug": "hewlett-packard-enterprise"
    },
    {
        "Country": "USA",
        "Ticker": "TROW",
        "Name": "T. Rowe Price",
        "Slug": "t-rowe-price"
    },
    {
        "Country": "Japan",
        "Ticker": "8802.T",
        "Name": "Mitsubishi Estate",
        "Slug": "mitsubishi-estate"
    },
    {
        "Country": "S. Korea",
        "Ticker": "KB",
        "Name": "KB Financial Group",
        "Slug": "kb-financial-group"
    },
    {
        "Country": "China",
        "Ticker": "BGNE",
        "Name": "BeiGene",
        "Slug": "beigene"
    },
    {
        "Country": "USA",
        "Ticker": "SSNC",
        "Name": "SS&C Technologies",
        "Slug": "ssc-technologies"
    },
    {
        "Country": "South Africa",
        "Ticker": "GFI",
        "Name": "Gold Fields",
        "Slug": "gold-fields"
    },
    {
        "Country": "Israel",
        "Ticker": "LUMI.TA",
        "Name": "Bank Leumi",
        "Slug": "bank-leumi"
    },
    {
        "Country": "USA",
        "Ticker": "MAA",
        "Name": "Mid-America Apartment Communities",
        "Slug": "mid-america-apartment-communities"
    },
    {
        "Country": "USA",
        "Ticker": "GFS",
        "Name": "GlobalFoundries",
        "Slug": "globalfoundries"
    },
    {
        "Country": "Japan",
        "Ticker": "4452.T",
        "Name": "Kaō",
        "Slug": "kao"
    },
    {
        "Country": "USA",
        "Ticker": "SMCI",
        "Name": "Supermicro",
        "Slug": "supermicro"
    },
    {
        "Country": "Canada",
        "Ticker": "H.TO",
        "Name": "Hydro One",
        "Slug": "hydro-one"
    },
    {
        "Country": "India",
        "Ticker": "GRASIM.NS",
        "Name": "Grasim Industries",
        "Slug": "grasim-industries"
    },
    {
        "Country": "UAE",
        "Ticker": "BOROUGE.AE",
        "Name": "Borouge",
        "Slug": "borouge"
    },
    {
        "Country": "Switzerland",
        "Ticker": "STM",
        "Name": "STMicroelectronics",
        "Slug": "stmicroelectronics"
    },
    {
        "Country": "Japan",
        "Ticker": "2802.T",
        "Name": "Ajinomoto",
        "Slug": "ajinomoto"
    },
    {
        "Country": "China",
        "Ticker": "XPEV",
        "Name": "XPeng",
        "Slug": "xpeng"
    },
    {
        "Country": "China",
        "Ticker": "300274.SZ",
        "Name": "Sungrow Power Supply",
        "Slug": "sungrow-power-supply"
    },
    {
        "Country": "USA",
        "Ticker": "LUV",
        "Name": "Southwest Airlines",
        "Slug": "southwest-airlines"
    },
    {
        "Country": "USA",
        "Ticker": "BIIB",
        "Name": "Biogen",
        "Slug": "biogen"
    },
    {
        "Country": "Denmark",
        "Ticker": "DOGEF",
        "Name": "Ørsted",
        "Slug": "orsted"
    },
    {
        "Country": "China",
        "Ticker": "601688.SS",
        "Name": "Huatai Securities",
        "Slug": "htsc"
    },
    {
        "Country": "Japan",
        "Ticker": "8308.T",
        "Name": "Resona Holdings",
        "Slug": "resona-holdings"
    },
    {
        "Country": "India",
        "Ticker": "DLF.NS",
        "Name": "DLF",
        "Slug": "dlf"
    },
    {
        "Country": "Mexico",
        "Ticker": "KOF",
        "Name": "Coca-Cola FEMSA",
        "Slug": "coca-cola-femsa"
    },
    {
        "Country": "USA",
        "Ticker": "LII",
        "Name": "Lennox",
        "Slug": "lennox"
    },
    {
        "Country": "USA",
        "Ticker": "IFF",
        "Name": "International Flavors & Fragrances",
        "Slug": "iff"
    },
    {
        "Country": "Sweden",
        "Ticker": "ESSITY-B.ST",
        "Name": "Essity",
        "Slug": "essity"
    },
    {
        "Country": "Mexico",
        "Ticker": "GFNORTEO.MX",
        "Name": "Banorte",
        "Slug": "banorte"
    },
    {
        "Country": "S. Korea",
        "Ticker": "035420.KS",
        "Name": "Naver",
        "Slug": "naver"
    },
    {
        "Country": "Japan",
        "Ticker": "6762.T",
        "Name": "TDK",
        "Slug": "tdk"
    },
    {
        "Country": "USA",
        "Ticker": "RF",
        "Name": "Regions Financial",
        "Slug": "regions-financial"
    },
    {
        "Country": "Hong Kong",
        "Ticker": "0688.HK",
        "Name": "China Overseas Land & Investment",
        "Slug": "china-overseas-land-and-investment"
    },
    {
        "Country": "Norway",
        "Ticker": "TEL.OL",
        "Name": "Telenor",
        "Slug": "telenor"
    },
    {
        "Country": "USA",
        "Ticker": "RYAN",
        "Name": "Ryan Specialty Group",
        "Slug": "ryan-specialty-group"
    },
    {
        "Country": "China",
        "Ticker": "YUMC",
        "Name": "Yum China",
        "Slug": "yum-china"
    },
    {
        "Country": "Taiwan",
        "Ticker": "ASX",
        "Name": "ASE Group",
        "Slug": "ase-group"
    },
    {
        "Country": "USA",
        "Ticker": "WSM",
        "Name": "Williams-Sonoma",
        "Slug": "williams-sonoma"
    },
    {
        "Country": "Malaysia",
        "Ticker": "1295.KL",
        "Name": "PBBank (Public Bank Bhd)",
        "Slug": "pbbank-public-bank"
    },
    {
        "Country": "S. Korea",
        "Ticker": "012450.KS",
        "Name": "Hanwha Aerospace",
        "Slug": "hanwha-aerospace"
    },
    {
        "Country": "Germany",
        "Ticker": "UN0.DE",
        "Name": "Uniper",
        "Slug": "uniper"
    },
    {
        "Country": "USA",
        "Ticker": "NRG",
        "Name": "NRG Energy",
        "Slug": "nrg-energy"
    },
    {
        "Country": "China",
        "Ticker": "601229.SS",
        "Name": "Bank of Shanghai",
        "Slug": "bank-of-shanghai"
    },
    {
        "Country": "USA",
        "Ticker": "L",
        "Name": "Loews Corporation",
        "Slug": "loews-corporation"
    },
    {
        "Country": "Japan",
        "Ticker": "2502.T",
        "Name": "Asahi Group",
        "Slug": "asahi-group"
    },
    {
        "Country": "USA",
        "Ticker": "DG",
        "Name": "Dollar General",
        "Slug": "dollar-general"
    },
    {
        "Country": "Switzerland",
        "Ticker": "STMN.SW",
        "Name": "Straumann",
        "Slug": "straumann"
    },
    {
        "Country": "USA",
        "Ticker": "LH",
        "Name": "LabCorp",
        "Slug": "labcorp"
    },
    {
        "Country": "Japan",
        "Ticker": "6594.T",
        "Name": "Nidec",
        "Slug": "nidec"
    },
    {
        "Country": "USA",
        "Ticker": "TOST",
        "Name": "Toast",
        "Slug": "toast"
    }
];
