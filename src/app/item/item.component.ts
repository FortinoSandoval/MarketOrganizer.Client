import { Component, OnInit } from '@angular/core';
import { ItemService } from '../_services/item.service';
import { Item } from '../interfaces';
import { NgForm, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent {
  item: Item = {};

  constructor(private itemService: ItemService) { }

  onSubmit(form: NgForm) {
    this.itemService.createOffer(this.item).subscribe(() => {
      form.reset();
    });
  }

}
