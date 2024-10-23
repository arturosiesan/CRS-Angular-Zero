import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Contador: {{ counter }}</h3>

  <button (click)="increaseBy(1)" type="button">+1</button>
  <button (click)="resetCounter()" type="button">Reiniciar</button>
  <button (click)="increaseBy(-1)" type="button">-1</button>`
})

export class CounterComponent {
  counter = 10;
  constructor() { }

  increaseBy( value: number ): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
