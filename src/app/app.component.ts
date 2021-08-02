import { Component } from '@angular/core';
import { FetchMeaning } from './fetchMeaningService';
import {wordMeaningModel} from './wordModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  wordMeaning!: wordMeaningModel;

  constructor(private fetchMeaning: FetchMeaning){

  }

  getWordMeaning(word:string){
    this.fetchMeaning.getDictionaryMeaning(word).subscribe((data)=>{
      console.log(data[0]);
      this.wordMeaning = data[0];
    }, (error)=>{
      alert(error);
      console.log(error);
    })
  }

  play(audioUrl: string){
    let audio = new Audio();
    audio.src = audioUrl;
    audio.load();
    audio.play();
  }
  
}
