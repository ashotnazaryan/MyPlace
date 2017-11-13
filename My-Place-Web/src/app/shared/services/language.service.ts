import { Injectable } from '@angular/core';

@Injectable()

export class LanguageService {

    getCurrentLanguage(lang: any){
        switch(lang.key){
            case 'en':
                return {key: 'en', value: 'En'};
            case 'ua':
                return {key: 'ua', value: 'Uk'};
            case 'am':
                return {key: 'am', value: 'Hy'};
            default:
                throw 'Unsupported Language';
        }
    }

}