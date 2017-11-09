import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';  //if import from 'rxjs' than more 2.7 MB in vendor.js

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

    selectedTheme: any = { key: 'en-theme', value: 'EN' };
    menuButtonClicked: boolean = false;
    languageChangedEvent: Observable<any>;
    menuButtonClickedEvent: Observable<any>;
    private languageSubject = new Subject();
    private menuSubject = new Subject();
    
    constructor(private overlayContainer: OverlayContainer) {
        let classList: any = overlayContainer.getContainerElement().classList;
        classList.add(this.selectedTheme.key);
        this.languageChangedEvent = this.languageSubject.asObservable();
        this.menuButtonClickedEvent = this.menuSubject.asObservable();

        this.languageChangedEvent.subscribe((event) => {          
            classList.add(event.key);
            classList.remove(this.selectedTheme.key);
            this.selectedTheme = event;
        });

        this.menuButtonClickedEvent.subscribe((event) => {    
            this.menuButtonClicked = event;
        });
        
    }

    ngOnInit() {

    }

    languageChangeHandler(event) {
        this.languageSubject.next(event);
    }

    menuButtonClickHandler(event) {
        this.menuSubject.next(event);
    }
    
}   
