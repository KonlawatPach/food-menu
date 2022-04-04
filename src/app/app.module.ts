import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent  } from './app.component';
import { FoodTypeComponent } from './menu_bar/showmenu/food-type/food-type.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FoodboxComponent } from './menu_bar/showmenu/foodbox/foodbox.component';
// import { ShowmenuComponent } from './showmenu/showmenu.component';
// import { ContactComponent } from './menu_bar/contact/contact.component';
// import { DeliveryComponent } from './menu_bar/delivery/delivery.component';
// import { ReserveComponent } from './menu_bar/reserve/reserve.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodTypeComponent,
    TopBarComponent,
    FoodboxComponent,
    // ShowmenuComponent,
    routingComponents,
    // ContactComponent,
    // DeliveryComponent,
    // ReserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
