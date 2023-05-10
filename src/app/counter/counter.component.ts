import { Component } from '@angular/core';
@Component({
  selector:'app-counter',
  templateUrl:'./counter.component.html'
})
export class CounterComponent{
  public counter:number = 20;

  increaseBy(value:number):void{
    this.counter += value;
  }
  decreaseBy(value:number):void{
    this.counter -= value;
  }
  resetBy(value:number):void{
    this.counter = value;
  }
}
