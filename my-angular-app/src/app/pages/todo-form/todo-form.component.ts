import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
    form!: FormGroup;
    @Output() todoCreated = new EventEmitter<void>();

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
    ) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            title: '',
            text: '',
            date: new Date().toISOString().slice(0, 10),
        });
    }

    submit(): void {
        this.http
            .post(
                'http://localhost:3000/api/todo/create',
                this.form.getRawValue(),
            )
            .subscribe(() => {
                this.todoCreated.emit();
            });
    }
}
