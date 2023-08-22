import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/classes/auth';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
    authenticated = false;
    data: any;
    title = '';
    text = '';
    date = '';
    apiUrl = 'http://localhost:3000/api/todo';

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        Auth.authEmitter.subscribe((authenticated: boolean) => {
            this.authenticated = authenticated;
        });

        this.fetchData();
    }

    fetchData() {
        this.http.get(this.apiUrl).subscribe({
            next: (response) => {
                this.data = response;
            },
            error: (err) => {
                console.log('Error:', err);
            },
        });
    }
}
