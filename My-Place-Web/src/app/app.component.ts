import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

    selectedTheme: any;
    languageChangedEvent: Observable<any>;
    private subject = new Subject();
    
    constructor(private overlayContainer: OverlayContainer) {
        // overlayContainer.getContainerElement().classList.add('en-theme');

        this.languageChangedEvent = this.subject.asObservable();
        this.languageChangedEvent.subscribe((event) => {
            this.selectedTheme = event;
        });
    }

    ngOnInit() {

    }

    languageChanged(event) {
        this.subject.next(event);
    }
    
}   
