import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../_services/item.service';
import { Item } from '../interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent {
  @Input() item: Item = {};
  @Output() itemSave: EventEmitter<Item> = new EventEmitter();
  constructor(private itemService: ItemService) { }

  onSubmit() {
    const item: Item = Object.assign({}, this.item);
    this.itemSave.emit(item);
  }

}
