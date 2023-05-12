import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  //el padre envia sus datos al hijo
  @Input()
  // el valor de chList es por defecto cuando el padre que es el main-page-component no envie sus datos
  public chList:Character[] = [{
    name:'frezer',
    poder:10.00
  }]

  onDeleteCharacter(index:number):void{
    console.log(index);
  }
}
