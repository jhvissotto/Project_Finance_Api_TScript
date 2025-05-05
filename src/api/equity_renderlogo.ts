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


export function endpoint({ TICKER }:Req_params, query=initial) {
  return builder.stringify([config.baseUrl, 'equity-renderlogo', TICKER], query)
}