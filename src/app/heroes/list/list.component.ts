import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroeNames:string[] = ['Spiderman','Hulk','Batman','Thor'];
  public heroeDelete:(string|undefined) = ''

  removeHero():void{
    this.heroeDelete = this.heroeNames.pop();
    // console.log(heroeDelete);
  }

}
