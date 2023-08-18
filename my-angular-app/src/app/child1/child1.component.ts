import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component {
  title = 'child1';
  message: string = '';
  constructor(private apiService: ApiService) { }

  sendMessage() {
    this.apiService.sendMessage('Message from child1 component to app component!').subscribe((data) => {
      this.message = data.message;
    });
  }
}
