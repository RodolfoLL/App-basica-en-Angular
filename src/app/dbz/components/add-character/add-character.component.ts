import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public personaje: Character = {
    name: '',
    poder: 0,
  };

  emitCharacter(): void {
    this.onNewCharacter.emit(this.personaje);
    this.personaje = {name:'',poder:0};
  }
}
