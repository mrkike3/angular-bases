import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <button (click)="operar(+1)">-1</button>
  <button (click)="operar(-1)">+1</button>
  <button (click)="reset()">Reset</button>

  `
})

export class CounterComponent  {
  public counter: number = 10;



  operar (value:number):void {
   this.counter -= value
  }

  reset ():void{
   this.counter = 10;
  }


}
