import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { HeroeComponent } from "./heroe/heroe.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    ListComponent,
    HeroeComponent
  ],
  exports:[
    HeroeComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{}
