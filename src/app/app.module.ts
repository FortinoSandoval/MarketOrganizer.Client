import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemService } from './_services/item.service';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';

@NgModule({
   declarations: [
      AppComponent,
      ItemsComponent,
      ItemComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      ItemService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
