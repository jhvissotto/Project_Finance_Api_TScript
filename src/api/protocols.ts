
export type Periods = '1m'|'2m'|'5m'|'15m'|'30m'|'60m'|'90m'|'1h'|'1d'|'5d'|'1wk'|'1mo'|'3mo'
export type Untils  = '1d'|'5d'|'1mo'|'3mo'|'6mo'|'1y'|'2y'|'5y'|'10y'|'ytd'|'max'

export const periods: Periods[] = ['1m','2m','5m','15m','30m','60m','90m','1h','1d','5d','1wk','1mo','3mo']
export const untils:  Untils[]  = ['1d','5d','1mo','3mo','6mo','1y','2y','5y','10y','ytd','max']

export const initial = {
    period: '1mo' as Periods,
    until:  'max' as Untils,
}