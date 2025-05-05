import { api } from '.'


async function api_resources() {
    type  Req_params =       api.asset_info.Req_params
    type  Req_query  =       api.asset_info.Req_query
    type  Res        =       api.asset_info.Res
    const mock_url   =       api.asset_info.sample_req
    const mock_data  =       api.asset_info.sample_res 
    const initial    =       api.asset_info.initial
    const endpoint   =       api.asset_info.endpoint({ TICKER:'MSFT' })
    const res        = await api.asset_info.get({ TICKER:'MSFT' })
}


async function api_consume() {

    await api.asset_info.get({ TICKER:'MSFT' })
    
    await api.equity_logomark.get({ TICKER:'MSFT' }, { dim:'128' })
    
    await api.financial_list.get({ pages:1 })
    await api.financial_raw.get({ slug:'microsoft' })
    await api.financial_ratios.get({ slug:'microsoft' })
    await api.financial_indicators.get({ slug:'microsoft' })
    
    await api.market_aggregated.get({ TICKER:'MSFT' }, { tframe:'Year', until:'max', asc:false })
    await api.market_history.get({ TICKER:'MSFT' }, { period:'1mo', until:'max' })
    
    await api.options_stack.get({ TICKER:'MSFT' })
    
    await api.performance_annual.get({ TICKER:'MSFT' })
}