import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.css'],
})
export class ResetComponent implements OnInit {
    form!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            password: '',
            password_confirm: '',
        });
    }

    submit(): void {
        const formData = this.form.getRawValue();
        const data = {
            token: this.route.snapshot.paramMap.get('token'),
            password: formData.password,
            password_confirm: formData.password_confirm,
        };

        this.http
            .post('http://localhost:3000/api/reset', data)
            .subscribe(() => {
                this.router.navigate(['/login']);
            });
    }
}
