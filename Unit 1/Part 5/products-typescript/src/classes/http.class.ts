export class Http {
    static async ajax<T>(method: string, url: string, headers: HeadersInit = {}, body: any = null): Promise<T> {
        const resp = await fetch(url, {method, headers, body});
        if(!resp.ok) throw new Error(resp.statusText);
        if(resp.status == 204) return null;
        return resp.json(); // promise
    }

    static get<T>(url: string): Promise<T> {
        return Http.ajax<T>('GET', url);
    }

    static post<T>(url: string, data: any): Promise<T> {
        return Http.ajax('POST', url, 
            {'Content-Type': 'application/json'}, JSON.stringify(data));
    }

    static put<T>(url: string, data: any): Promise<T> {
        return Http.ajax<T>('PUT', url, 
            {'Content-Type': 'application/json'}, JSON.stringify(data));
    }

    static delete<T>(url: string): Promise<T> {
        return Http.ajax<T>('DELETE', url);
    }
}