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

    currentLanguage: any = {};
    translate: TranslateService;
    languages: any[] = [
        { key: 'en', value: 'En' },
        { key: 'ua', value: 'Uk' },
        { key: 'am', value: 'Hy' }
    ];
    openButtonClicked: boolean = false;

    constructor(translate: TranslateService, private languageService: LanguageService) {
        this.translate = translate;
        this.currentLanguage = this.languages.find(item => item.key === translate.currentLang )
    }

    ngOnInit() {
        
    }

    changeLanguage(language) {
        this.translate.use(language.key);
        this.currentLanguage = this.languageService.getCurrentLanguage(language);
        this.onLanguageChanged.emit(language);
    }

    openMenu() {
        this.openButtonClicked = true;
        this.onOpenButtonClicked.emit({open: this.openButtonClicked});
    }

}   
