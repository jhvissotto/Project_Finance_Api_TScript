import { builder } from './helpers'
import { config } from './config'
import { client } from './client'


// =================================================== //
// ==================== Interface ==================== //
// =================================================== //
export type Req_params = { 
    TICKER:string 
}

export type Req_query  = { 
    dim:'32'|'64'|'128'|'256'|'512' 
}


export type Res = {
    imgB64: string,
}


// ================================================== //
// ==================== Endpoint ==================== //
// ================================================== //
export const initial = {} as Req_query


export function endpoint({ TICKER }:Req_params, query:Req_query) {
  return builder.stringify([config.baseUrl, 'equity-logomark', TICKER], query)
}


export async function get(params:Req_params, query=initial) {
    return await client(endpoint(params, query))
        .then(x => x.json() as Promise<Res>)
        .catch(() => {})
}


// ================================================ //
// ==================== Sample ==================== //
// ================================================ //
export const sample_req = 'https://project-finance-backend.onrender.com/equity-logomark/MSFT?dim=128'
export const sample_res = {
    "imgB64": "UklGRqQAAABXRUJQVlA4TJgAAAAvf8AfEBK3AduGzYs8kk+A72lkkraT1bkdBAKEc88GCASSWPZ3WwFpbSs5JPiZxNbsQGQIUJfQ7CBMgGqqVaXC7m5k0Y2mOfrHf2co0etSdbPqqFzFI9Iooh11b7SiVKFaxSoaEUUSofm7H38zqs1spsGICUPz39zN5mP232DKgm3WvWyxNE+1ucwYzNhj08z+JbB7/Hd4Ag=="
}