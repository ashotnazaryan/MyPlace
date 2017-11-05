import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

    constructor(private overlayContainer: OverlayContainer) {
        // overlayContainer.getContainerElement().classList.add('en-theme');
    }

    ngOnInit() {

    }

    languageChanged(event) {
        debugger
    }
    
}   
