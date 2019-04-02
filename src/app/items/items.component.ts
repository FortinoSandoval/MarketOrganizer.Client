import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../_services/item.service';
import { Item } from '../interfaces/item.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit, OnDestroy {
  offers: Item[] = [];
  showAddForm = false;
  getOffersSubscription: Subscription;
  deleteItemSubscription: Subscription;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getOffers();
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  ngOnDestroy(): void {
    this.getOffersSubscription.unsubscribe();
    this.deleteItemSubscription.unsubscribe();
  }

  getOffers() {
    this.getOffersSubscription = this.itemService.getOffers().subscribe(Items => {
      this.offers = Items;
    });
  }

  deleteOffer(id) {
    this.deleteItemSubscription = this.itemService.deleteItem(id).subscribe(() => {
      this.getOffers();
    });
  }

}
