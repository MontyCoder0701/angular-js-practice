import { Component, OnInit } from '@angular/core';
import { Auth } from '../classes/auth';
import { HttpClient } from '@angular/common/http';
import { Application } from '@splinetool/runtime';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
    authenticated = false;
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        Auth.authEmitter.subscribe((authenticated: boolean) => {
            this.authenticated = authenticated;
        });
    }

    logout(): void {
        const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
        canvas.style.display = 'block';

        this.http
            .post('http://localhost:3000/api/logout', {})
            .subscribe(() => {});
    }
}
