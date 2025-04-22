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
    type  Res       =       api.info.Res
    const mock_url  =       api.info.sample_req
    const mock_data =       api.info.sample_res 
    const endpoint  =       api.info.endpoint({ TICKER:'MSFT' })
    const res       = await api.info.get({ TICKER:'MSFT' })
}
```


## Consume
```ts
async function api_consume() {

    await api.info.get({ TICKER:'MSFT' })
    
    await api.performance_annual.get({ TICKER:'MSFT' })
    await api.market_history.get({ TICKER:'MSFT', period:'1mo', until:'max' })
    
    await api.financial_list.get({ pages:1 })
    await api.financial_raw.get({ slug:'microsoft' })
    await api.financial_ratios.get({ slug:'microsoft' })
    
    await api.options_stack.get({ TICKER:'MSFT' })
}
```