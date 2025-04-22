import { baseUrl } from './config'
import { client } from './client'


// ================================================= //
// ==================== Request ==================== //
// ================================================= //
export type Req = { TICKER:string }



// ================================================== //
// ==================== Response ==================== //
// ================================================== //
export type Res = {
    img_src64_cum: string,
    img_src64_var: string,
}


// ================================================== //
// ==================== Endpoint ==================== //
// ================================================== //
const endpoint = ({ TICKER }: Req) => baseUrl(`/performance-annual/${TICKER}`)

export async function get({ TICKER }:Req) {
    return await client(endpoint({ TICKER }))
        .then(x => x.json() as Promise<Res>)
        .catch(x => {})
}


// ================================================ //
// ==================== Sample ==================== //
// ================================================ //
export const sample_req = 'https://proj-finance-backend.onrender.com/performance-annual/MSFT'
export const sample_res = {
  "img_src64_cum": "...",
  "img_src64_var": "...",
}