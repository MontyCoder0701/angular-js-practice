import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit {
  title = 'child1';
  message: string | undefined;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getSomeData().subscribe((data: any) => {
      this.message = data.message;
    });
  }
}
