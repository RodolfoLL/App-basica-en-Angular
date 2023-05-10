import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public nombre:string = 'Iron man';
  public edad:number = 45;

  //los metodos get en ts son propiedades de las clases
  get capitalizeName():string{
    return this.nombre.toUpperCase();
  }
  //si el metodo se pone en private no sera posible el acceso desde el html del componente
  public getHeroDescripcion():string{
    return `${this.nombre} - ${this.edad}`;
  }

  changeName():void{
    this.nombre = 'batman';
  }
  changeAge():void{
    this.edad = 50;
  }
  resetForm():void{
    this.nombre = 'ironman';
    this.edad = 45;
  }

}
