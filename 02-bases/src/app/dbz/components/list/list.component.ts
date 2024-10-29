import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10
    }
  ];

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: string): void {
    console.log({index});
    this.onDeleteId.emit(index);
  }

}
