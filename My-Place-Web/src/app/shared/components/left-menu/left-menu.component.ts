import { Component, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class LeftMenuComponent implements OnInit {

    @Output() onCloseButtonClicked: EventEmitter<any> = new EventEmitter();

    closeButtonClicked: boolean = false;

    constructor() {
        
    }

    ngOnInit() {
        
    }

    closeMenu() {
        this.closeButtonClicked = true;
        this.onCloseButtonClicked.emit({close: this.closeButtonClicked});
    }
}   
