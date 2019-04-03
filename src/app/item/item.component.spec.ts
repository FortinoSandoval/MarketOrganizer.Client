/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, ElementRef } from '@angular/core';

import { ItemComponent } from './item.component';
import { Item } from '../interfaces/item.interface';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let de: DebugElement;
  let form: ElementRef<HTMLFormElement>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    form = de.query(By.css('.item-form'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update an item', () => {
    const item: Item = {
      itemName: 'Modified',
      buyPrice: 1,
      sellPrice: 2,
      highestMarketPrice: 3
    };
    component.item = Object.assign({}, item);
    spyOn(component.itemSave, 'emit');
    form.nativeElement.submit();
    expect(component.itemSave.emit).toHaveBeenCalledWith(item);
  })
});
