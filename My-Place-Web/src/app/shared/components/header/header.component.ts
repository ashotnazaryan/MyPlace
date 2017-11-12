import { Component, ViewEncapsulation, OnInit, EventEmitter, Output } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

    @Output() onLanguageChanged: EventEmitter<any> = new EventEmitter();
    @Output() onOpenButtonClicked: EventEmitter<any> = new EventEmitter();

    currentLanguage: string;
    translate: TranslateService;
    languages: any[] = [
        { key: 'en-theme', value: 'en' },
        { key: 'ua-theme', value: 'ua' },
        { key: 'am-theme', value: 'am' }
    ];
    selectedTheme: any = this.languages[0];
    openButtonClicked: boolean = false;

    constructor(translate: TranslateService, private languageService: LanguageService) {
        this.translate = translate;
        this.currentLanguage = this.languageService.getCurrentLanguage(translate.currentLang);

        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.currentLanguage = this.languageService.getCurrentLanguage(translate.currentLang);
        });
    }

    ngOnInit() {
        
    }

    changeLanguage(language) {
        this.selectedTheme = this.languages.find(item => item.value === language.value );
        this.onLanguageChanged.emit(this.selectedTheme);
        this.translate.use(language.value);
    }

    openMenu() {
        this.openButtonClicked = true;
        this.onOpenButtonClicked.emit({open: this.openButtonClicked});
    }

}   
