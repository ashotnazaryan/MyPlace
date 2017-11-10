import { Component, ViewEncapsulation, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

    @Output() onLanguageChanged: EventEmitter<any> = new EventEmitter();
    @Output() onMenuButtonClicked: EventEmitter<any> = new EventEmitter();

    themes: any[] = [
        { key: 'en-theme', value: 'EN' },
        { key: 'ua-theme', value: 'UA' },
        { key: 'am-theme', value: 'AM' }
    ];
    selectedTheme: any = this.themes[0];
    menuButtonClicked: boolean = false;

    constructor() {
        
    }

    ngOnInit() {

    }

    changeTheme(theme) {
        this.selectedTheme = this.themes.find(item => item.value === theme.value );
        this.onLanguageChanged.emit(this.selectedTheme);
    }

    openLeftMenu() {
        this.menuButtonClicked = !this.menuButtonClicked;
        this.onMenuButtonClicked.emit(this.menuButtonClicked);
    }

}   
