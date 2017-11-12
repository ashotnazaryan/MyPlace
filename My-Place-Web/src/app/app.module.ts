import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MatButtonModule } from '@angular/material/button';  //optimizes the performance 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

import 'hammerjs';

import { LanguageService } from './shared/services/language.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LeftMenuComponent } from './shared/components/left-menu/left-menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContentComponent } from './shared/components/content/content.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LeftMenuComponent,
        FooterComponent,
        ContentComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatRadioModule, MatSelectModule,
        MatFormFieldModule, MatInputModule, MatSidenavModule
    ],
    providers: [LanguageService],
    bootstrap: [AppComponent]
})

export class AppModule {

}


//ng build --prod fails, maybe from angular-cli version