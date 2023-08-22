import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/classes/auth';
import { Application } from '@splinetool/runtime';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    message = '';
    welcome = '';
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get('http://localhost:3000/api/user').subscribe({
            next: (res: any) => {
                this.message = `Hello, ${res.first_name} ${res.last_name}!`;
                this.welcome = `Let's get started!`;
                Auth.authEmitter.emit(true);
                const canvas = document.getElementById(
                    'canvas3d',
                ) as HTMLCanvasElement;
                canvas.style.display = 'none';
            },
            error: (err) => {
                this.message = `Welcome, Please Log In.`;
                Auth.authEmitter.emit(false);
            },
        });
    }
}
