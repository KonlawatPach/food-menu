import { Component, OnInit } from '@angular/core';
import { foodlist } from '../foodlist';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.scss']
})
export class ShowmenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  foodtype:string = "maindish";
  menu = foodlist;

  changeFoodType(type:string){
    this.foodtype = type;
  }
}
