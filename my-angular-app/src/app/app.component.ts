import { Component, OnInit } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'my-angular-app';

    ngOnInit(): void {
        // const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
        // const app = new Application(canvas);
        // app.load(
        //     'https://prod.spline.design/yKmotiDVrpmvccOU/scene.splinecode',
        // );
    }
}
