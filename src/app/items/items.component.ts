import { Component, OnInit } from '@angular/core';
import { ItemService } from '../_services/item.service';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
  offers: Item[] = [];
  currentItem: Item = {};
  showAddForm = false;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  selectItem(item) {
    this.currentItem = Object.assign({}, item);
    this.showAddForm = true;
  }

  clearSelection() {
    this.currentItem = {};
  }

  async getItems() {
    try {
      const items = await this.itemService.getItems().toPromise()
      this.offers = items;
    } catch (error) {
      // TODO: agregar un toast bonito
      console.warn(error.message);
    }
  }

  async onSave(item: Item) {
    try {
      await this.itemService.createitem(item).toPromise();
    } catch (error) {
      // TODO: agregar un toast bonito
      console.warn(error.message);
    }
    this.clearSelection();
    this.getItems();
  }


  async deleteItem(event: MouseEvent, id) {
    event.stopPropagation();
    try {
      await this.itemService.deleteItem(id).toPromise();
    } catch (error) {
      // TODO: agregar un toast bonito
      console.warn(error.message);
    }
    this.getItems();
  }

}
