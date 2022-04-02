import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowmenuComponent } from './showmenu/showmenu.component';
import { ReserveComponent } from './menu_bar/reserve/reserve.component';
import { DeliveryComponent } from './menu_bar/delivery/delivery.component';
import { ContactComponent } from './menu_bar/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:ShowmenuComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'reserve', component: ReserveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ShowmenuComponent, DeliveryComponent, ReserveComponent, ContactComponent]
