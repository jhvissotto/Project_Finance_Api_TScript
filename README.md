## Ecosystem

⭐ Portal:     https://bit.ly/finance_analytics  
📊 Blog:       https://slashpage.com/jh-analytics  

📈 Softrader:  https://pypi.org/project/softrader  

🐍 Python:     https://github.com/jhvissotto/Project_Finance_Api_Python  
🐍 Pypi:       https://pypi.org/project/jh-finance-api  

🟦 TScript:    https://github.com/jhvissotto/Project_Finance_Api_TScript  
🟦 NPM:        https://www.npmjs.com/package/finance-analytics-api  

🧮 PyHelpers:  https://github.com/jhvissotto/Library_Python_Helpers  

🔌 Server:     https://bit.ly/jh_finance_api  
🔌 Swagger:    https://bit.ly/jh_finance_api_swagger  



## TScript Library Api 
```
npm install finance-analytics-api
```
```ts
import { api } from 'finance-analytics-api'
```


## Resources
```ts
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
```


## Consume
```ts
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
```