import { Component, OnInit } from '@angular/core';
import { ItemService } from '../_services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {

  constructor(private itemService: ItemService) { }
  offers: any = [];

  ngOnInit() {
    this.itemService.getOffers().subscribe(Items => {
      this.offers = Items;
      console.log(this.offers);
    });
  }

  addItemForm() {
    console.log('asd');
  }

  deleteOffer(id) {
    this.itemService.deleteItem(id).subscribe(() => {
      this.ngOnInit();
    });
  }

}
