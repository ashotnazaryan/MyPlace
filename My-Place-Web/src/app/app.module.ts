import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatRadioModule, MatSelectModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatRadioModule, MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { 

}
