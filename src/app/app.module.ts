import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodTypeComponent } from './food-type/food-type.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FoodboxComponent } from './foodbox/foodbox.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodTypeComponent,
    TopBarComponent,
    FoodboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
