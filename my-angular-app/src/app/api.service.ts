import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    sendMessage(message: string): Observable<any> {
        const url = `${this.apiUrl}/your-endpoint`;
        return this.http.post(url, { message });
    }
}
