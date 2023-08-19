import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  form!: FormGroup;
  cls = '';
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
    });
  }

  submit(): void {
    this.http.post('http://localhost:3000/api/forgot', this.form.getRawValue())
      .subscribe({
        next: () => {
          this.cls = 'success';
          this.message = 'Email sent successfully';
        },
        error: (err) => {
          this.cls = 'danger';
          this.message = err.error.message;
        }
      });
  }
}

