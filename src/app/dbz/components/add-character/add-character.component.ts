import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public personaje: Character = {
    id:uuid(),
    name: '',
    poder: 0,
  };

  emitCharacter(): void {
    this.onNewCharacter.emit(this.personaje);
    this.personaje = {id:uuid(),name:'',poder:0};

  }
}
