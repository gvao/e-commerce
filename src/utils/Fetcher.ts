export default class Fetcher {
    constructor(readonly urlBase = 'http://localhost:3000') { }

    async request(path = '/api/products', body?: unknown, method = 'POST') {

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

        const response = await fetch(`${this.urlBase}${path}`, options);
        return response.json();
    }
}