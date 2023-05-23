import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{counter}}</p>

<button (click)="increment(+1)">+1</button>
<button (click)="decrement(-1)">-1</button>
<button (click)="reset()">reset</button>
<hr>


  `
})

export class CounterComponent  {
  constructor() { }

  public counter: number = 10;
  public increment(value: number) : void {
    this.counter+=value;
  }

  public decrement(value: number): void {
    this.counter-=value;
  }

  public reset(): void {
    this.counter = 10;
  }

}


