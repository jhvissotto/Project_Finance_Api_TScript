import { api } from '.'

async function info() {
    type  Res  =       api.info.Res
    const mock =       api.info.sample_res 
    const res  = await api.info.get({ TICKER:'MSFT' })
}

async function financial_list() {
    type  Res  =       api.financial_list.Res
    const mock =       api.financial_list.sample_res
    const res  = await api.financial_list.get({ pages:1 })
}

async function financial_raw() {
    type  Res  =       api.financial_raw.Res
    const mock =       api.financial_raw.sample_res
    const res  = await api.financial_raw.get({ slug:'microsoft' })
}

async function financial_ratios() {
    type  Res  =       api.financial_ratios.Res
    const mock =       api.financial_ratios.sample_res
    const res  = await api.financial_ratios.get({ slug:'microsoft' })
}