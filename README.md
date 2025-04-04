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

## Info

```ts
async function info() {
    type  Res  =       api.info.Res
    const mock =       api.info.sample_res 
    const res  = await api.info.get({ TICKER:'MSFT' })
}
```

## Market

```ts
async function market_history() {
    type  Res  =       api.market_history.Res
    const mock =       api.market_history.sample_res 
    const res  = await api.market_history.get({ TICKER:'MSFT', period:'1mo', until:'max' })
}
```

## Financial


```ts
async function financial_list() {
    type  Res  =       api.financial_list.Res
    const mock =       api.financial_list.sample_res
    const res  = await api.financial_list.get({ pages:1 })
}
```


```ts
async function financial_raw() {
    type  Res  =       api.financial_raw.Res
    const mock =       api.financial_raw.sample_res
    const res  = await api.financial_raw.get({ slug:'microsoft' })
}
```


```ts
async function financial_ratios() {
    type  Res  =       api.financial_ratios.Res
    const mock =       api.financial_ratios.sample_res
    const res  = await api.financial_ratios.get({ slug:'microsoft' })
}
```