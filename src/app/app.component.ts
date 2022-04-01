import { Component, EventEmitter, Input, Output } from '@angular/core';
import { foodlist } from './foodlist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  foodtype:string = "maindish";
  menu = foodlist;

  changeFoodType(type:string){
    this.foodtype = type;
  }
}
