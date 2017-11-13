import { Component, ViewEncapsulation, OnInit, trigger, transition, style, animate, state, ViewChild } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';  //if import from 'rxjs' than more 2.7 MB in vendor.js
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {

    @ViewChild('sidenav') sidenav: any;

    currentLanguage: any = { key: 'en', value: 'EN' };
    languageChangedEvent: Observable<any>;
    private languageSubject = new Subject();

    constructor(private overlayContainer: OverlayContainer, translate: TranslateService) {

        translate.setDefaultLang('en');
        translate.use('en');

        let classList: any = overlayContainer.getContainerElement().classList;
        classList.add(this.currentLanguage.key);

        this.languageChangedEvent = this.languageSubject.asObservable();

        this.languageChangedEvent.subscribe((event) => {
            classList.add(event.key);
            classList.remove(this.currentLanguage.key);
            this.currentLanguage = event;
        });

    }

    ngOnInit() {

    }

    changeLanguage(event) {
        this.languageSubject.next(event);
    }

    openLeftMenu(event) {
        if (event.open)
            this.sidenav.open();         
    }

    closeLeftMenu(event) {
        if (event.close)
            this.sidenav.close();
    }

}   
