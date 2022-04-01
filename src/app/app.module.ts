import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodTypeComponent } from './food-type/food-type.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FoodboxComponent } from './foodbox/foodbox.component';
import { ShowmenuComponent } from './showmenu/showmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodTypeComponent,
    TopBarComponent,
    FoodboxComponent,
    ShowmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
