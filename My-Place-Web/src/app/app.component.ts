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

    selectedTheme: any = { key: 'en-theme', value: 'EN' };
    languageChangedEvent: Observable<any>;
    private subject = new Subject();
    
    constructor(private overlayContainer: OverlayContainer) {
        
        let classList: any = overlayContainer.getContainerElement().classList;
        classList.add(this.selectedTheme.key);
        this.languageChangedEvent = this.subject.asObservable();
        this.languageChangedEvent.subscribe((event) => {          
            classList.add(event.key);
            classList.remove(this.selectedTheme.key);
            this.selectedTheme = event;
        });
        
    }

    ngOnInit() {

    }

    languageChanged(event) {
        this.subject.next(event);
    }
    
}   
