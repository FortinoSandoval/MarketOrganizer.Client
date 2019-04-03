import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent {
  @Input() item: Item = {};
  @Output() itemSave: EventEmitter<Item> = new EventEmitter();
  constructor() { }

  onSubmit() {
    const item: Item = Object.assign({}, this.item);
    this.itemSave.emit(item);
  }

}
