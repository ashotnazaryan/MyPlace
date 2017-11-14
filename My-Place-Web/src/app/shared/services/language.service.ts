import { Injectable } from '@angular/core';

@Injectable()

export class LanguageService {

    getCurrentLanguage(lang: any){
        switch(lang.key){
            case 'en':
                return {key: 'en', value: 'En', flag: 'flag-gb'};
            case 'ua':
                return {key: 'ua', value: 'Uk', flag: 'flag-ua'};
            case 'am':
                return {key: 'am', value: 'Hy', flag: 'flag-am'};
            default:
                throw 'Unsupported Language';
        }
    }

}