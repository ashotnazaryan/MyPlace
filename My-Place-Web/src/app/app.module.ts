import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatRadioModule, MatSelectModule,
    MatFormFieldModule, MatInputModule
} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContentComponent } from './shared/components/content/content.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ContentComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatRadioModule, MatSelectModule,
        MatFormFieldModule, MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

}
