import { Component, OnInit } from '@angular/core';
import { ItemService } from '../_services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }
  model: any = {};


  ngOnInit() {
  }

  onSubmit(form) {
    this.itemService.createOffer(this.model).subscribe(() => {
      form.reset();
    });
  }

}
