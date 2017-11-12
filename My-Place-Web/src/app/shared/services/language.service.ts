import { Injectable } from '@angular/core';

@Injectable()

export class LanguageService {

    getCurrentLanguage(lang: string){
        switch(lang){
            case 'en':
                return 'en';
            case 'ua':
                return 'ua';
            case 'am':
                return 'am';
            default:
                throw 'Unsupported Language';
        }
    }

}