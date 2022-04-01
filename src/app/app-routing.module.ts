import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './menu_bar/delivery/delivery.component';
import { ContactComponent } from './menu_bar/contact/contact.component';
import { ShowmenuComponent } from './showmenu/showmenu.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'home', component:ShowmenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactComponent, DeliveryComponent]
