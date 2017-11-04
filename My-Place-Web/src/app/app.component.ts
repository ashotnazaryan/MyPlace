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
        { key: 'en-theme', value: 'EN' },
        { key: 'ua-theme', value: 'UA' },
        { key: 'am-theme', value: 'AM' }
    ];
    selectedTheme: any = this.themes[0];

    constructor(private overlayContainer: OverlayContainer) {
        // overlayContainer.getContainerElement().classList.add('en-theme');
    }

    ngOnInit() {

    }

    changeTheme(event) {
        //issue ERROR TypeError: Cannot read property 'nativeElement' of undefined
        //Should be fixed in master by #7729.
        this.selectedTheme = this.themes.find(item => item.value === event.value );
    }

}   
