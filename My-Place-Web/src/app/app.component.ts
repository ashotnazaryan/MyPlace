import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    color: string;
    themes: any[] = [
        {id: '1', value: 'Light'},
        {id: '2', value: 'Dark'}
    ];

    constructor(overlayContainer: OverlayContainer) {
        // overlayContainer.getContainerElement().classList.add('dark');
    }

    ngOnInit() {

    }

    changeTheme(color) {
        //debugger
        this.color = color;
    }

}   
