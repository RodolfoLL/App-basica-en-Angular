import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  public characterList: Character[] = [
    {
      id:uuid(),
      name: 'krillin',
      poder: 1000,
    },
    {
      id:uuid(),
      name: 'goku',
      poder: 9000,
    },
  ];
  onNewCharacter(character: Character): void {
    this.characterList.push(character);
    console.log(this.characterList)
  }
  onDelete(id: string|undefined): void {
    this.characterList = this.characterList.filter( character => character.id !== id );
    console.log(this.characterList);
  }
}
