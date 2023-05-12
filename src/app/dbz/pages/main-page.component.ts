import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  public characterList:Character[] = [{
    name:'krillin',
    poder:1000
  },
  {
    name:'goku',
    poder:9000
  }
]
 onNewCharacter(character:Character):void{
  this.characterList.push(character);
 }

}
