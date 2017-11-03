import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

    themes: any[] = [
        { key: 'ua-theme', value: 'UA' },
        { key: 'am-theme', value: 'AM' }
    ];

    selectedTheme: string = 'ua-theme';

    constructor(private overlayContainer: OverlayContainer) {
        overlayContainer.getContainerElement().classList.add('ua-theme');
    }

    ngOnInit() {

    }

    changeTheme(theme) {
        if(theme.value === "UA") {
            this.selectedTheme = "ua-theme";
        }
        else if(theme.value === "AM") {
            this.selectedTheme = "am-theme";
        }
    }

}   
