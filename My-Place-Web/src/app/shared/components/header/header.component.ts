import { Component, ViewEncapsulation, OnInit, EventEmitter, Output } from '@angular/core';
import 'rxjs/Rx';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

    themes: any[] = [
        { key: 'en-theme', value: 'EN' },
        { key: 'ua-theme', value: 'UA' },
        { key: 'am-theme', value: 'AM' }
    ];
    selectedTheme: any = this.themes[0];

    @Output() onLanguageChanged: EventEmitter<any> = new EventEmitter();

    constructor() {
        
    }

    ngOnInit() {

    }

    changeTheme(event) {
        //issue ERROR TypeError: Cannot read property 'nativeElement' of undefined
        //Should be fixed in master by #7729.
        this.selectedTheme = this.themes.find(item => item.value === event.value );
        this.onLanguageChanged.emit(this.selectedTheme);
    }

}   
