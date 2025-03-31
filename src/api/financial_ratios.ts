import { client } from './client'


// ================================================= //
// ==================== Request ==================== //
// ================================================= //
export type Req = { slug:string }


// ================================================== //
// ==================== Response ==================== //
// ================================================== //
export type Res = {
    Raw: Array<{
        Year:    number,
        Shares:  number,
        Capital: number,
        DYield:  number,
        Revenue: number,
        Income:  number,
        Asset:   number,
        Equity:  number
    }>,
    Ratios: Array<{
        'N':        number,
        'Year':     number,
        'Cap Var':  number,    
        'Rev Grw':  number,    
        'Ast Grw':  number,    
        'DY':       number,
        'EY':       number,
        'P/S':      number,
        'P/A':      number,
        'Margin':   number,    
        'ROA':      number,
        'E/A':      number,
    }>,
}


// ================================================== //
// ==================== Endpoint ==================== //
// ================================================== //
export async function get({ slug }:Req) {
    return await client(`/financial-ratios/${slug}`)
        .then(x => x.json() as Promise<Res>)
        .catch(x => {})
}


// ================================================ //
// ==================== Sample ==================== //
// ================================================ //
export const sample_req = 'https://project-finance-backend.onrender.com/financial-ratios/microsoft'
export const sample_res = {
    "Raw": [
      {
        "Year": 2025,
        "Shares": 7430,
        "Capital": 2748000,
        "DYield": 0.81,
        "Revenue": 261800,
        "Income": 113610,
        "Asset": 512160,
        "Equity": 268470
      },
      {
        "Year": 2024,
        "Shares": 7430,
        "Capital": 3200000,
        "DYield": 0.73,
        "Revenue": 227580,
        "Income": 101210,
        "Asset": 411970,
        "Equity": 206220
      },
      {
        "Year": 2023,
        "Shares": 7450,
        "Capital": 2794000,
        "DYield": 0.74,
        "Revenue": 204090,
        "Income": 82580,
        "Asset": 364840,
        "Equity": 166540
      },
      {
        "Year": 2022,
        "Shares": 7500,
        "Capital": 1787000,
        "DYield": 1.06,
        "Revenue": 184900,
        "Income": 79680,
        "Asset": 333770,
        "Equity": 141980
      },
      {
        "Year": 2021,
        "Shares": 7550,
        "Capital": 2522000,
        "DYield": 0.68,
        "Revenue": 153280,
        "Income": 60720,
        "Asset": 301310,
        "Equity": 118300
      },
      {
        "Year": 2020,
        "Shares": 7620,
        "Capital": 1681000,
        "DYield": 0.94,
        "Revenue": 134240,
        "Income": 49850,
        "Asset": 286550,
        "Equity": 102330
      },
      {
        "Year": 2019,
        "Shares": 7690,
        "Capital": 1200000,
        "DYield": 1.2,
        "Revenue": 118450,
        "Income": 39920,
        "Asset": 258840,
        "Equity": 82710
      },
      {
        "Year": 2018,
        "Shares": 7710,
        "Capital": 780360,
        "DYield": 1.69,
        "Revenue": 99980,
        "Income": 29790,
        "Asset": 250310,
        "Equity": 87710
      },
      {
        "Year": 2017,
        "Shares": 7750,
        "Capital": 659900,
        "DYield": 1.86,
        "Revenue": 88890,
        "Income": 23230,
        "Asset": 193460,
        "Equity": 71990
      },
      {
        "Year": 2016,
        "Shares": 7960,
        "Capital": 483160,
        "DYield": 2.37,
        "Revenue": 88080,
        "Income": 16120,
        "Asset": 174470,
        "Equity": 80080
      },
      {
        "Year": 2015,
        "Shares": 8220,
        "Capital": 439670,
        "DYield": 2.33,
        "Revenue": 93450,
        "Income": 27280,
        "Asset": 172380,
        "Equity": 89780
      },
      {
        "Year": 2014,
        "Shares": 8320,
        "Capital": 381720,
        "DYield": 2.48,
        "Revenue": 83430,
        "Income": 28030,
        "Asset": 142430,
        "Equity": 78940
      },
      {
        "Year": 2013,
        "Shares": 8390,
        "Capital": 310500,
        "DYield": 2.59,
        "Revenue": 72930,
        "Income": 20020,
        "Asset": 121270,
        "Equity": 66360
      },
      {
        "Year": 2012,
        "Shares": 8400,
        "Capital": 223660,
        "DYield": 3.11,
        "Revenue": 72050,
        "Income": 27880,
        "Asset": 108700,
        "Equity": 57080
      },
      {
        "Year": 2011,
        "Shares": 8490,
        "Capital": 218380,
        "DYield": 2.62,
        "Revenue": 66690,
        "Income": 27090,
        "Asset": 86110,
        "Equity": 46170
      },
      {
        "Year": 2010,
        "Shares": 8850,
        "Capital": 234520,
        "DYield": 1.97,
        "Revenue": 58680,
        "Income": 21840,
        "Asset": 77880,
        "Equity": 39550
      },
      {
        "Year": 2009,
        "Shares": 8900,
        "Capital": 268550,
        "DYield": 1.71,
        "Revenue": 61980,
        "Income": 22400,
        "Asset": 72790,
        "Equity": 36280
      },
      {
        "Year": 2008,
        "Shares": 9360,
        "Capital": 172920,
        "DYield": 2.37,
        "Revenue": 57890,
        "Income": 24290,
        "Asset": 63170,
        "Equity": 31090
      },
      {
        "Year": 2007,
        "Shares": 9800,
        "Capital": 332110,
        "DYield": 1.15,
        "Revenue": 46050,
        "Income": 17410,
        "Asset": 69590,
        "Equity": 40100
      },
      {
        "Year": 2006,
        "Shares": 10560,
        "Capital": 291940,
        "DYield": 1.24,
        "Revenue": 41350,
        "Income": 17370,
        "Asset": 70810,
        "Equity": 48110
      },
      {
        "Year": 2005,
        "Shares": 10870,
        "Capital": 271540,
        "DYield": 1.22,
        "Revenue": 38470,
        "Income": 14920,
        "Asset": 94360,
        "Equity": 74820
      },
      {
        "Year": 2004,
        "Shares": 10810,
        "Capital": 290710,
        "DYield": 11.83,
        "Revenue": 34260,
        "Income": 12270,
        "Asset": 81730,
        "Equity": 64910
      },
      {
        "Year": 2003,
        "Shares": null,
        "Capital": 295290,
        "DYield": 0.88,
        "Revenue": 30780,
        "Income": 11910,
        "Asset": 67640,
        "Equity": 52180
      },
      {
        "Year": 2002,
        "Shares": null,
        "Capital": 276630,
        "DYield": 0,
        "Revenue": 26720,
        "Income": 9000,
        "Asset": 58830,
        "Equity": 47280
      },
      {
        "Year": 2001,
        "Shares": null,
        "Capital": 358050,
        "DYield": 0,
        "Revenue": 23770,
        "Income": 15030,
        "Asset": null,
        "Equity": null
      },
      {
        "Year": 2000,
        "Shares": null,
        "Capital": 230800,
        "DYield": 0,
        "Revenue": 22610,
        "Income": 13340,
        "Asset": null,
        "Equity": null
      },
      {
        "Year": 1999,
        "Shares": null,
        "Capital": 604410,
        "DYield": 0,
        "Revenue": 17150,
        "Income": 9690,
        "Asset": null,
        "Equity": null
      },
      {
        "Year": 1998,
        "Shares": null,
        "Capital": 348100,
        "DYield": 0,
        "Revenue": 13090,
        "Income": 6200,
        "Asset": null,
        "Equity": null
      },
      {
        "Year": 1997,
        "Shares": null,
        "Capital": 157360,
        "DYield": 0,
        "Revenue": 9430,
        "Income": 3800,
        "Asset": null,
        "Equity": null
      },
      {
        "Year": 1996,
        "Shares": null,
        "Capital": 99410,
        "DYield": 0,
        "Revenue": null,
        "Income": null,
        "Asset": null,
        "Equity": null
      }
    ],
    "Ratios": [
      {
        "N": 0,
        "Year": 2025,
        "Cap Var": -14.12,
        "Rev Grw": 15.04,
        "Ast Grw": 24.32,
        "DY": 0.81,
        "EY": 4.13,
        "P/S": 10.5,
        "P/A": 5.37,
        "Margin": 43.4,
        "ROA": 22.2,
        "E/A": 52.4
      },
      {
        "N": -1,
        "Year": 2024,
        "Cap Var": 14.53,
        "Rev Grw": 11.51,
        "Ast Grw": 12.92,
        "DY": 0.73,
        "EY": 3.16,
        "P/S": 14.06,
        "P/A": 7.77,
        "Margin": 44.5,
        "ROA": 24.6,
        "E/A": 50.1
      },
      {
        "N": -2,
        "Year": 2023,
        "Cap Var": 56.35,
        "Rev Grw": 10.38,
        "Ast Grw": 9.31,
        "DY": 0.74,
        "EY": 2.96,
        "P/S": 13.69,
        "P/A": 7.66,
        "Margin": 40.5,
        "ROA": 22.6,
        "E/A": 45.6
      },
      {
        "N": -3,
        "Year": 2022,
        "Cap Var": -29.14,
        "Rev Grw": 20.63,
        "Ast Grw": 10.77,
        "DY": 1.06,
        "EY": 4.46,
        "P/S": 9.66,
        "P/A": 5.35,
        "Margin": 43.1,
        "ROA": 23.9,
        "E/A": 42.5
      },
      {
        "N": -4,
        "Year": 2021,
        "Cap Var": 50.03,
        "Rev Grw": 14.18,
        "Ast Grw": 5.15,
        "DY": 0.68,
        "EY": 2.41,
        "P/S": 16.45,
        "P/A": 8.37,
        "Margin": 39.6,
        "ROA": 20.2,
        "E/A": 39.3
      },
      {
        "N": -5,
        "Year": 2020,
        "Cap Var": 40.08,
        "Rev Grw": 13.33,
        "Ast Grw": 10.71,
        "DY": 0.94,
        "EY": 2.97,
        "P/S": 12.52,
        "P/A": 5.87,
        "Margin": 37.1,
        "ROA": 17.4,
        "E/A": 35.7
      },
      {
        "N": -6,
        "Year": 2019,
        "Cap Var": 53.78,
        "Rev Grw": 18.47,
        "Ast Grw": 3.41,
        "DY": 1.2,
        "EY": 3.33,
        "P/S": 10.13,
        "P/A": 4.64,
        "Margin": 33.7,
        "ROA": 15.4,
        "E/A": 32
      },
      {
        "N": -7,
        "Year": 2018,
        "Cap Var": 18.25,
        "Rev Grw": 12.48,
        "Ast Grw": 29.39,
        "DY": 1.69,
        "EY": 3.82,
        "P/S": 7.81,
        "P/A": 3.12,
        "Margin": 29.8,
        "ROA": 11.9,
        "E/A": 35
      },
      {
        "N": -8,
        "Year": 2017,
        "Cap Var": 36.58,
        "Rev Grw": 0.92,
        "Ast Grw": 10.88,
        "DY": 1.86,
        "EY": 3.52,
        "P/S": 7.42,
        "P/A": 3.41,
        "Margin": 26.1,
        "ROA": 12,
        "E/A": 37.2
      },
      {
        "N": -9,
        "Year": 2016,
        "Cap Var": 9.89,
        "Rev Grw": -5.75,
        "Ast Grw": 1.21,
        "DY": 2.37,
        "EY": 3.34,
        "P/S": 5.49,
        "P/A": 2.77,
        "Margin": 18.3,
        "ROA": 9.2,
        "E/A": 45.9
      },
      {
        "N": -10,
        "Year": 2015,
        "Cap Var": 15.18,
        "Rev Grw": 12.01,
        "Ast Grw": 21.03,
        "DY": 2.33,
        "EY": 6.2,
        "P/S": 4.7,
        "P/A": 2.55,
        "Margin": 29.2,
        "ROA": 15.8,
        "E/A": 52.1
      },
      {
        "N": -11,
        "Year": 2014,
        "Cap Var": 22.94,
        "Rev Grw": 14.4,
        "Ast Grw": 17.45,
        "DY": 2.48,
        "EY": 7.34,
        "P/S": 4.58,
        "P/A": 2.68,
        "Margin": 33.6,
        "ROA": 19.7,
        "E/A": 55.4
      },
      {
        "N": -12,
        "Year": 2013,
        "Cap Var": 38.83,
        "Rev Grw": 1.22,
        "Ast Grw": 11.56,
        "DY": 2.59,
        "EY": 6.45,
        "P/S": 4.26,
        "P/A": 2.56,
        "Margin": 27.5,
        "ROA": 16.5,
        "E/A": 54.7
      },
      {
        "N": -13,
        "Year": 2012,
        "Cap Var": 2.42,
        "Rev Grw": 8.04,
        "Ast Grw": 26.23,
        "DY": 3.11,
        "EY": 12.47,
        "P/S": 3.1,
        "P/A": 2.06,
        "Margin": 38.7,
        "ROA": 25.6,
        "E/A": 52.5
      },
      {
        "N": -14,
        "Year": 2011,
        "Cap Var": -6.88,
        "Rev Grw": 13.65,
        "Ast Grw": 10.57,
        "DY": 2.62,
        "EY": 12.4,
        "P/S": 3.27,
        "P/A": 2.54,
        "Margin": 40.6,
        "ROA": 31.5,
        "E/A": 53.6
      },
      {
        "N": -15,
        "Year": 2010,
        "Cap Var": -12.67,
        "Rev Grw": -5.32,
        "Ast Grw": 6.99,
        "DY": 1.97,
        "EY": 9.31,
        "P/S": 4,
        "P/A": 3.01,
        "Margin": 37.2,
        "ROA": 28,
        "E/A": 50.8
      },
      {
        "N": -16,
        "Year": 2009,
        "Cap Var": 55.3,
        "Rev Grw": 7.07,
        "Ast Grw": 15.23,
        "DY": 1.71,
        "EY": 8.34,
        "P/S": 4.33,
        "P/A": 3.69,
        "Margin": 36.1,
        "ROA": 30.8,
        "E/A": 49.8
      },
      {
        "N": -17,
        "Year": 2008,
        "Cap Var": -47.93,
        "Rev Grw": 25.71,
        "Ast Grw": -9.23,
        "DY": 2.37,
        "EY": 14.05,
        "P/S": 2.99,
        "P/A": 2.74,
        "Margin": 42,
        "ROA": 38.5,
        "E/A": 49.2
      },
      {
        "N": -18,
        "Year": 2007,
        "Cap Var": 13.76,
        "Rev Grw": 11.37,
        "Ast Grw": -1.72,
        "DY": 1.15,
        "EY": 5.24,
        "P/S": 7.21,
        "P/A": 4.77,
        "Margin": 37.8,
        "ROA": 25,
        "E/A": 57.6
      },
      {
        "N": -19,
        "Year": 2006,
        "Cap Var": 7.51,
        "Rev Grw": 7.49,
        "Ast Grw": -24.96,
        "DY": 1.24,
        "EY": 5.95,
        "P/S": 7.06,
        "P/A": 4.12,
        "Margin": 42,
        "ROA": 24.5,
        "E/A": 67.9
      },
      {
        "N": -20,
        "Year": 2005,
        "Cap Var": -6.59,
        "Rev Grw": 12.29,
        "Ast Grw": 15.45,
        "DY": 1.22,
        "EY": 5.49,
        "P/S": 7.06,
        "P/A": 2.88,
        "Margin": 38.8,
        "ROA": 15.8,
        "E/A": 79.3
      },
      {
        "N": -21,
        "Year": 2004,
        "Cap Var": -1.55,
        "Rev Grw": 11.31,
        "Ast Grw": 20.83,
        "DY": 11.83,
        "EY": 4.22,
        "P/S": 8.49,
        "P/A": 3.56,
        "Margin": 35.8,
        "ROA": 15,
        "E/A": 79.4
      },
      {
        "N": -22,
        "Year": 2003,
        "Cap Var": 6.75,
        "Rev Grw": 15.19,
        "Ast Grw": 14.98,
        "DY": 0.88,
        "EY": 4.03,
        "P/S": 9.59,
        "P/A": 4.37,
        "Margin": 38.7,
        "ROA": 17.6,
        "E/A": 77.1
      },
      {
        "N": -23,
        "Year": 2002,
        "Cap Var": -22.74,
        "Rev Grw": 12.41,
        "Ast Grw": 0,
        "DY": 0,
        "EY": 3.25,
        "P/S": 10.35,
        "P/A": 4.7,
        "Margin": 33.7,
        "ROA": 15.3,
        "E/A": 80.4
      },
      {
        "N": -24,
        "Year": 2001,
        "Cap Var": 55.13,
        "Rev Grw": 5.13,
        "Ast Grw": 0,
        "DY": 0,
        "EY": 4.2,
        "P/S": 15.06,
        "P/A": null,
        "Margin": 63.2,
        "ROA": null,
        "E/A": null
      },
      {
        "N": -25,
        "Year": 2000,
        "Cap Var": -61.81,
        "Rev Grw": 31.84,
        "Ast Grw": 0,
        "DY": 0,
        "EY": 5.78,
        "P/S": 10.21,
        "P/A": null,
        "Margin": 59,
        "ROA": null,
        "E/A": null
      },
      {
        "N": -26,
        "Year": 1999,
        "Cap Var": 73.63,
        "Rev Grw": 31.02,
        "Ast Grw": 0,
        "DY": 0,
        "EY": 1.6,
        "P/S": 35.24,
        "P/A": null,
        "Margin": 56.5,
        "ROA": null,
        "E/A": null
      },
      {
        "N": -27,
        "Year": 1998,
        "Cap Var": 121.21,
        "Rev Grw": 38.81,
        "Ast Grw": 0,
        "DY": 0,
        "EY": 1.78,
        "P/S": 26.59,
        "P/A": null,
        "Margin": 47.4,
        "ROA": null,
        "E/A": null
      },
      {
        "N": -28,
        "Year": 1997,
        "Cap Var": 58.29,
        "Rev Grw": 0,
        "Ast Grw": 0,
        "DY": 0,
        "EY": 2.41,
        "P/S": 16.69,
        "P/A": null,
        "Margin": 40.3,
        "ROA": null,
        "E/A": null
      },
      {
        "N": -29,
        "Year": 1996,
        "Cap Var": null,
        "Rev Grw": null,
        "Ast Grw": null,
        "DY": 0,
        "EY": null,
        "P/S": null,
        "P/A": null,
        "Margin": null,
        "ROA": null,
        "E/A": null
      }
    ]
}