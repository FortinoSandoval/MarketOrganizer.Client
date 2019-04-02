import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.component';

import { AppComponent } from './app.component';
import { ItemService } from './_services/item.service';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      ItemsComponent,
      ItemComponent,
      HeaderComponent,
      LoginComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [
      ItemService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
