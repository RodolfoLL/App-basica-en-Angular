import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-main-page-dbz',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(public dbzService:DbzService){}
  get characters():Character[]{
    return [...this.dbzService.characterList];
  }
  onDeleteId(id:string|undefined):void{
    this.dbzService.onDelete(id);
  }
  onNewCharacter(character:Character){
    this.dbzService.onNewCharacter(character);
  }
}
