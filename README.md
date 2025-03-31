## Finance Project

⭐ Portal:   https://bit.ly/finance_analytics  
📊 Blog:     https://slashpage.com/jh-analytics  

🐍 Python:   https://github.com/jhvissotto/Project_Finance_Api_Python  
🐍 Pypi:     https://pypi.org/project/jh-finance-api  

🟦 TScript:  https://github.com/jhvissotto/Project_Finance_Api_TScript  
🟦 NPM:      https://www.npmjs.com/package/finance-analytics-api  

🔌 Server:   https://bit.ly/jh_finance_api  
🔌 Swagger:  https://bit.ly/jh_finance_api_swagger  



## TScript Library Api 


```Typescript
import { api } from 'finance-analytics-api'
```


```Typescript
async function info() {
    type  Res  =       api.info.Res
    const mock =       api.info.sample_res 
    const res  = await api.info.get({ TICKER:'MSFT' })
}
```


```Typescript
async function financial_list() {
    type  Res  =       api.financial_list.Res
    const mock =       api.financial_list.sample_res
    const res  = await api.financial_list.get({ pages:1 })
}
```


```Typescript
async function financial_raw() {
    type  Res  =       api.financial_raw.Res
    const mock =       api.financial_raw.sample_res
    const res  = await api.financial_raw.get({ slug:'microsoft' })
}
```


```Typescript
async function financial_ratios() {
    type  Res  =       api.financial_ratios.Res
    const mock =       api.financial_ratios.sample_res
    const res  = await api.financial_ratios.get({ slug:'microsoft' })
}
```