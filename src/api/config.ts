export const config = {
    baseUrl: 'https://project-finance-backend.onrender.com', 
}

export function baseUrl(endpoint:string) {
    return config.baseUrl + endpoint
}