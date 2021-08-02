import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {wordMeaningModel} from './wordModel';

@Injectable({
    providedIn:"root"
})
export class FetchMeaning {

    constructor(private http: HttpClient){

    }
    getDictionaryMeaning(word: string){
        console.log(word);
        return this.http.get<[wordMeaningModel]>(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
      } 
}