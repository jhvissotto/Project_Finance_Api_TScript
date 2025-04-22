import { api } from '.'


async function api_resources() {
    type  Res       =       api.info.Res
    const mock_url  =       api.info.sample_req
    const mock_data =       api.info.sample_res 
    const endpoint  =       api.info.endpoint({ TICKER:'MSFT' })
    const res       = await api.info.get({ TICKER:'MSFT' })
}


async function api_consume() {

    await api.info.get({ TICKER:'MSFT' })
    
    await api.performance_annual.get({ TICKER:'MSFT' })
    await api.market_history.get({ TICKER:'MSFT', period:'1mo', until:'max' })
    
    await api.financial_list.get({ pages:1 })
    await api.financial_raw.get({ slug:'microsoft' })
    await api.financial_ratios.get({ slug:'microsoft' })
    
    await api.options_stack.get({ TICKER:'MSFT' })
}