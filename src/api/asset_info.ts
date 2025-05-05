import { builder } from './helpers'
import { config } from './config'
import { client } from './client'


// =================================================== //
// ==================== Interface ==================== //
// =================================================== //
export type Req_params = { 
    TICKER: string 
}

export type Req_query = { }


export type Res = {
    address1: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    website: string;
    industry: string;
    industryKey: string;
    industryDisp: string;
    sector: string;
    sectorKey: string;
    sectorDisp: string;
    longBusinessSummary: string;
    fullTimeEmployees: number;
    companyOfficers: {
        maxAge: number;
        name: string;
        age: number;
        title: string;
        yearBorn: number;
        fiscalYear: number;
        totalPay: number;
        exercisedValue: number;
        unexercisedValue: number;
    }[];
    auditRisk: number;
    boardRisk: number;
    compensationRisk: number;
    shareHolderRightsRisk: number;
    overallRisk: number;
    governanceEpochDate: number;
    compensationAsOfEpochDate: number;
    irWebsite: string;
    executiveTeam: any[];
    maxAge: number;
    priceHint: number;
    previousClose: number;
    open: number;
    dayLow: number;
    dayHigh: number;
    regularMarketPreviousClose: number;
    regularMarketOpen: number;
    regularMarketDayLow: number;
    regularMarketDayHigh: number;
    dividendRate: number;
    dividendYield: number;
    exDividendDate: number;
    payoutRatio: number;
    fiveYearAvgDividendYield: number;
    beta: number;
    trailingPE: number;
    forwardPE: number;
    volume: number;
    regularMarketVolume: number;
    averageVolume: number;
    averageVolume10days: number;
    averageDailyVolume10Day: number;
    bid: number;
    ask: number;
    bidSize: number;
    askSize: number;
    marketCap: number;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    priceToSalesTrailing12Months: number;
    fiftyDayAverage: number;
    twoHundredDayAverage: number;
    trailingAnnualDividendRate: number;
    trailingAnnualDividendYield: number;
    currency: string;
    tradeable: boolean;
    enterpriseValue: number;
    profitMargins: number;
    floatShares: number;
    sharesOutstanding: number;
    sharesShort: number;
    sharesShortPriorMonth: number;
    sharesShortPreviousMonthDate: number;
    dateShortInterest: number;
    sharesPercentSharesOut: number;
    heldPercentInsiders: number;
    heldPercentInstitutions: number;
    shortRatio: number;
    shortPercentOfFloat: number;
    impliedSharesOutstanding: number;
    bookValue: number;
    priceToBook: number;
    lastFiscalYearEnd: number;
    nextFiscalYearEnd: number;
    mostRecentQuarter: number;
    earningsQuarterlyGrowth: number;
    netIncomeToCommon: number;
    trailingEps: number;
    forwardEps: number;
    lastSplitFactor: string;
    lastSplitDate: number;
    enterpriseToRevenue: number;
    enterpriseToEbitda: number;
    "52WeekChange": number;
    SandP52WeekChange: number;
    lastDividendValue: number;
    lastDividendDate: number;
    quoteType: string;
    currentPrice: number;
    targetHighPrice: number;
    targetLowPrice: number;
    targetMeanPrice: number;
    targetMedianPrice: number;
    recommendationMean: number;
    recommendationKey: string;
    numberOfAnalystOpinions: number;
    totalCash: number;
    totalCashPerShare: number;
    ebitda: number;
    totalDebt: number;
    quickRatio: number;
    currentRatio: number;
    totalRevenue: number;
    debtToEquity: number;
    revenuePerShare: number;
    returnOnAssets: number;
    returnOnEquity: number;
    grossProfits: number;
    freeCashflow: number;
    operatingCashflow: number;
    earningsGrowth: number;
    revenueGrowth: number;
    grossMargins: number;
    ebitdaMargins: number;
    operatingMargins: number;
    financialCurrency: string;
    symbol: string;
    language: string;
    region: string;
    typeDisp: string;
    quoteSourceName: string;
    triggerable: boolean;
    customPriceAlertConfidence: string;
    corporateActions: any[];
    postMarketTime: number;
    regularMarketTime: number;
    exchange: string;
    messageBoardId: string;
    exchangeTimezoneName: string;
    exchangeTimezoneShortName: string;
    gmtOffSetMilliseconds: number;
    market: string;
    esgPopulated: boolean;
    shortName: string;
    longName: string;
    cryptoTradeable: boolean;
    hasPrePostMarketData: boolean;
    firstTradeDateMilliseconds: number;
    postMarketChangePercent: number;
    postMarketPrice: number;
    postMarketChange: number;
    regularMarketChange: number;
    regularMarketDayRange: string;
    fullExchangeName: string;
    averageDailyVolume3Month: number;
    fiftyTwoWeekLowChange: number;
    fiftyTwoWeekLowChangePercent: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHighChange: number;
    fiftyTwoWeekHighChangePercent: number;
    fiftyTwoWeekChangePercent: number;
    dividendDate: number;
    earningsTimestamp: number;
    earningsTimestampStart: number;
    earningsTimestampEnd: number;
    earningsCallTimestampStart: number;
    earningsCallTimestampEnd: number;
    isEarningsDateEstimate: boolean;
    epsTrailingTwelveMonths: number;
    epsForward: number;
    epsCurrentYear: number;
    priceEpsCurrentYear: number;
    fiftyDayAverageChange: number;
    fiftyDayAverageChangePercent: number;
    twoHundredDayAverageChange: number;
    twoHundredDayAverageChangePercent: number;
    sourceInterval: number;
    exchangeDataDelayedBy: number;
    averageAnalystRating: string;
    regularMarketChangePercent: number;
    regularMarketPrice: number;
    marketState: string;
    displayName: string;
    trailingPegRatio: number;
}


// ================================================== //
// ==================== Endpoint ==================== //
// ================================================== //
export const initial = {} as Req_query


export function endpoint({ TICKER }:Req_params) {
  return builder.stringify([config.baseUrl, 'asset-info', TICKER], {})
}


export async function get(params:Req_params) {
    return await client(endpoint(params))
        .then(x => x.json() as Promise<Res>)
        .catch(() => {})
}


// ================================================ //
// ==================== Sample ==================== //
// ================================================ //
export const sample_req = 'https://project-finance-backend.onrender.com/asset-info/MSFT'
export const sample_res = {
    "address1": "One Microsoft Way",
    "city": "Redmond",
    "state": "WA",
    "zip": "98052-6399",
    "country": "United States",
    "phone": "425 882 8080",
    "website": "https://www.microsoft.com",
    "industry": "Software - Infrastructure",
    "industryKey": "software-infrastructure",
    "industryDisp": "Software - Infrastructure",
    "sector": "Technology",
    "sectorKey": "technology",
    "sectorDisp": "Technology",
    "longBusinessSummary": "Microsoft Corporation develops and supports software, services, devices and solutions worldwide. The Productivity and Business Processes segment offers office, exchange, SharePoint, Microsoft Teams, office 365 Security and Compliance, Microsoft viva, and Microsoft 365 copilot; and office consumer services, such as Microsoft 365 consumer subscriptions, Office licensed on-premises, and other office services. This segment also provides LinkedIn; and dynamics business solutions, including Dynamics 365, a set of intelligent, cloud-based applications across ERP, CRM, power apps, and power automate; and on-premises ERP and CRM applications. The Intelligent Cloud segment offers server products and cloud services, such as azure and other cloud services; SQL and windows server, visual studio, system center, and related client access licenses, as well as nuance and GitHub; and enterprise services including enterprise support services, industry solutions, and nuance professional services. The More Personal Computing segment offers Windows, including windows OEM licensing and other non-volume licensing of the Windows operating system; Windows commercial comprising volume licensing of the Windows operating system, windows cloud services, and other Windows commercial offerings; patent licensing; and windows Internet of Things; and devices, such as surface, HoloLens, and PC accessories. Additionally, this segment provides gaming, which includes Xbox hardware and content, and first- and third-party content; Xbox game pass and other subscriptions, cloud gaming, advertising, third-party disc royalties, and other cloud services; and search and news advertising, which includes Bing, Microsoft News and Edge, and third-party affiliates. The company sells its products through OEMs, distributors, and resellers; and directly through digital marketplaces, online, and retail stores. The company was founded in 1975 and is headquartered in Redmond, Washington.",
    "fullTimeEmployees": 228000,
    "companyOfficers": [
      {
        "maxAge": 1,
        "name": "Mr. Satya  Nadella",
        "age": 57,
        "title": "Chairman & CEO",
        "yearBorn": 1967,
        "fiscalYear": 2024,
        "totalPay": 7869791,
        "exercisedValue": 0,
        "unexercisedValue": 0
      },
      {
        "maxAge": 1,
        "name": "Mr. Bradford L. Smith LCA",
        "age": 65,
        "title": "President & Vice Chairman",
        "yearBorn": 1959,
        "fiscalYear": 2024,
        "totalPay": 4755618,
        "exercisedValue": 0,
        "unexercisedValue": 0
      },
      {
        "maxAge": 1,
        "name": "Ms. Amy E. Hood",
        "age": 52,
        "title": "Executive VP & CFO",
        "yearBorn": 1972,
        "fiscalYear": 2024,
        "totalPay": 4704250,
        "exercisedValue": 0,
        "unexercisedValue": 0
      },
      {
        "maxAge": 1,
        "name": "Mr. Judson B. Althoff",
        "age": 50,
        "title": "Executive VP & Chief Commercial Officer",
        "yearBorn": 1974,
        "fiscalYear": 2024,
        "totalPay": 4534974,
        "exercisedValue": 0,
        "unexercisedValue": 0
      },
      {
        "maxAge": 1,
        "name": "Mr. Christopher David Young",
        "age": 52,
        "title": "Executive Officer",
        "yearBorn": 1972,
        "fiscalYear": 2024,
        "totalPay": 2993772,
        "exercisedValue": 0,
        "unexercisedValue": 0
      },
      {
        "maxAge": 1,
        "name": "Ms. Carolina  Dybeck Happe",
        "age": 52,
        "title": "Executive VP & COO",
        "yearBorn": 1972,
        "fiscalYear": 2024,
        "exercisedValue": 0,
        "unexercisedValue": 0
      },
      {
        "maxAge": 1,
        "name": "Ms. Alice L. Jolla",
        "age": 58,
        "title": "Corporate VP & Chief Accounting Officer",
        "yearBorn": 1966,
        "fiscalYear": 2024,
        "exercisedValue": 0,
        "unexercisedValue": 0
      },
      {
        "maxAge": 1,
        "name": "Mr. James Kevin Scott",
        "age": 52,
        "title": "Executive VP of AI & CTO",
        "yearBorn": 1972,
        "fiscalYear": 2024,
        "exercisedValue": 0,
        "unexercisedValue": 0
      },
      {
        "maxAge": 1,
        "name": "Mr. Brett  Iversen",
        "title": "Vice President of Investor Relations",
        "fiscalYear": 2024,
        "exercisedValue": 0,
        "unexercisedValue": 0
      },
      {
        "maxAge": 1,
        "name": "Mr. Hossein  Nowbar",
        "title": "Chief Legal Officer",
        "fiscalYear": 2024,
        "exercisedValue": 0,
        "unexercisedValue": 0
      }
    ],
    "auditRisk": 9,
    "boardRisk": 5,
    "compensationRisk": 3,
    "shareHolderRightsRisk": 2,
    "overallRisk": 3,
    "governanceEpochDate": 1740787200,
    "compensationAsOfEpochDate": 1735603200,
    "irWebsite": "http://www.microsoft.com/investor/default.aspx",
    "executiveTeam": [],
    "maxAge": 86400,
    "priceHint": 2,
    "previousClose": 378.8,
    "open": 372.535,
    "dayLow": 367.24,
    "dayHigh": 372.7518,
    "regularMarketPreviousClose": 378.8,
    "regularMarketOpen": 372.535,
    "regularMarketDayLow": 367.24,
    "regularMarketDayHigh": 372.7518,
    "dividendRate": 3.32,
    "dividendYield": 0.88,
    "exDividendDate": 1747267200,
    "payoutRatio": 0.2482,
    "fiveYearAvgDividendYield": 0.85,
    "beta": 0.914,
    "trailingPE": 29.85306,
    "forwardPE": 24.801003,
    "volume": 12168657,
    "regularMarketVolume": 12168657,
    "averageVolume": 22908383,
    "averageVolume10days": 20756090,
    "averageDailyVolume10Day": 20756090,
    "bid": 371.04,
    "ask": 370.92,
    "bidSize": 1,
    "askSize": 1,
    "marketCap": 2756333797376,
    "fiftyTwoWeekLow": 367.24,
    "fiftyTwoWeekHigh": 468.35,
    "priceToSalesTrailing12Months": 10.528315,
    "fiftyDayAverage": 405.844,
    "twoHundredDayAverage": 422.5207,
    "trailingAnnualDividendRate": 3.16,
    "trailingAnnualDividendYield": 0.008342134,
    "currency": "USD",
    "tradeable": false,
    "enterpriseValue": 2847346524160,
    "profitMargins": 0.35428002,
    "floatShares": 7423574660,
    "sharesOutstanding": 7433979904,
    "sharesShort": 64256703,
    "sharesShortPriorMonth": 53633341,
    "sharesShortPreviousMonthDate": 1739491200,
    "dateShortInterest": 1741910400,
    "sharesPercentSharesOut": 0.0086,
    "heldPercentInsiders": 0.00063,
    "heldPercentInstitutions": 0.74452,
    "shortRatio": 2.58,
    "shortPercentOfFloat": 0.0086,
    "impliedSharesOutstanding": 7433979904,
    "bookValue": 40.712,
    "priceToBook": 9.107265,
    "lastFiscalYearEnd": 1719705600,
    "nextFiscalYearEnd": 1751241600,
    "mostRecentQuarter": 1735603200,
    "earningsQuarterlyGrowth": 0.102,
    "netIncomeToCommon": 92749996032,
    "trailingEps": 12.42,
    "forwardEps": 14.95,
    "lastSplitFactor": "2:1",
    "lastSplitDate": 1045526400,
    "enterpriseToRevenue": 10.876,
    "enterpriseToEbitda": 20.046,
    "52WeekChange": -0.107803166,
    "SandP52WeekChange": 0.06429911,
    "lastDividendValue": 0.83,
    "lastDividendDate": 1740009600,
    "quoteType": "EQUITY",
    "currentPrice": 370.775,
    "targetHighPrice": 650,
    "targetLowPrice": 415,
    "targetMeanPrice": 503.47256,
    "targetMedianPrice": 500,
    "recommendationMean": 1.41379,
    "recommendationKey": "strong_buy",
    "numberOfAnalystOpinions": 51,
    "totalCash": 71554998272,
    "totalCashPerShare": 9.625,
    "ebitda": 142041006080,
    "totalDebt": 102909001728,
    "quickRatio": 1.204,
    "currentRatio": 1.351,
    "totalRevenue": 261802000384,
    "debtToEquity": 33.998,
    "revenuePerShare": 35.224,
    "returnOnAssets": 0.14649001,
    "returnOnEquity": 0.34291,
    "grossProfits": 181714993152,
    "freeCashflow": 51958124544,
    "operatingCashflow": 125582999552,
    "earningsGrowth": 0.102,
    "revenueGrowth": 0.123,
    "grossMargins": 0.69408995,
    "ebitdaMargins": 0.54255,
    "operatingMargins": 0.45458,
    "financialCurrency": "USD",
    "symbol": "MSFT",
    "language": "en-US",
    "region": "US",
    "typeDisp": "Equity",
    "quoteSourceName": "Nasdaq Real Time Price",
    "triggerable": true,
    "customPriceAlertConfidence": "HIGH",
    "shortName": "Microsoft Corporation",
    "longName": "Microsoft Corporation",
    "regularMarketChangePercent": -2.1185308,
    "regularMarketPrice": 370.775,
    "marketState": "REGULAR",
    "messageBoardId": "finmb_21835",
    "exchangeTimezoneName": "America/New_York",
    "exchangeTimezoneShortName": "EDT",
    "gmtOffSetMilliseconds": -14400000,
    "market": "us_market",
    "esgPopulated": false,
    "regularMarketChange": -8.024994,
    "regularMarketDayRange": "367.24 - 372.7518",
    "fullExchangeName": "NasdaqGS",
    "averageDailyVolume3Month": 22908383,
    "fiftyTwoWeekLowChange": 3.5350037,
    "fiftyTwoWeekLowChangePercent": 0.009625868,
    "fiftyTwoWeekRange": "367.24 - 468.35",
    "fiftyTwoWeekHighChange": -97.57501,
    "fiftyTwoWeekHighChangePercent": -0.2083378,
    "fiftyTwoWeekChangePercent": -10.780316,
    "dividendDate": 1749686400,
    "earningsTimestamp": 1738184400,
    "earningsTimestampStart": 1745438400,
    "earningsTimestampEnd": 1745870400,
    "earningsCallTimestampStart": 1738189800,
    "earningsCallTimestampEnd": 1738189800,
    "isEarningsDateEstimate": true,
    "epsTrailingTwelveMonths": 12.42,
    "epsForward": 14.95,
    "epsCurrentYear": 13.18361,
    "priceEpsCurrentYear": 28.123936,
    "fiftyDayAverageChange": -35.069,
    "fiftyDayAverageChangePercent": -0.08641005,
    "twoHundredDayAverageChange": -51.745697,
    "twoHundredDayAverageChangePercent": -0.12246902,
    "sourceInterval": 15,
    "exchangeDataDelayedBy": 0,
    "averageAnalystRating": "1.4 - Strong Buy",
    "cryptoTradeable": false,
    "hasPrePostMarketData": true,
    "firstTradeDateMilliseconds": 511108200000,
    "corporateActions": [],
    "regularMarketTime": 1743440001,
    "exchange": "NMS",
    "displayName": "Microsoft",
    "trailingPegRatio": 1.732
}