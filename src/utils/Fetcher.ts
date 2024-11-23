export default class Fetcher {
    urlBase: string
    
    constructor(urlBase = process.env.URL_BASE!.trim()) {
        if(!urlBase) throw new Error("urlBase cannot be empty")
        this.urlBase = urlBase
    }

    async request(path = '/api/products', body?: unknown, method = 'POST') {
        const url = `${this.urlBase}${path}`
        
        const options: RequestInit = {
            method: 'GET',
        }

        if (!!body) {
            options.method = method
            options.headers = {
                'Content-Type': 'application/json',
            }
            options.body = JSON.stringify(body)
        }

        const response = await fetch(url, options);
        return response.json();
    }
}