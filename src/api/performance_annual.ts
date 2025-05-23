import { builder } from './helpers'
import { config } from './config'
import { client } from './client'


// =================================================== //
// ==================== Interface ==================== //
// =================================================== //
export type Req_params = { TICKER:string }
export type Req_query  = {  }

export type Res = {
    img_src64_cum: string,
    img_src64_var: string,
}



// ================================================== //
// ==================== Endpoint ==================== //
// ================================================== //
export const initial = {} as Req_query


export function endpoint({ TICKER }:Req_params) {
  return builder.stringify([config.baseUrl, 'performance-annual', TICKER], {})
}


export async function get(params:Req_params) {
    return await client(endpoint(params))
        .then(x => x.json() as Promise<Res>)
        .catch(() => {})
}



// ================================================ //
// ==================== Sample ==================== //
// ================================================ //
export const sample_req = 'https://project-finance-backend.onrender.com/performance-annual/MSFT'
export const sample_res = {
  "img_src64_cum": "...",
  "img_src64_var": "...",
}