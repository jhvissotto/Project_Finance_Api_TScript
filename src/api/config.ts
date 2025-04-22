export const config = {
    baseUrl: 'https://proj-finance-backend.onrender.com', 
}

export function baseUrl(endpoint:string) {
    return config.baseUrl + endpoint
}