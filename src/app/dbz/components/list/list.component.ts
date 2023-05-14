import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid';
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  public indice: string|undefined = '';

  //el padre envia sus datos al hijo
  @Input()
  // el valor de chList es por defecto cuando el padre que es el main-page-component no envie sus datos
  public chList: Character[] = [
    {
      id:uuid(),
      name: 'frezer',
      poder: 10.0,
    },
  ];

  onDeleteCharacter(id:string): void {
    this.indice = id;
    this.onDelete.emit(this.indice);
    console.log(this.indice);
    console.log(id);
  }
}
