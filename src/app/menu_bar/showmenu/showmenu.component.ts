import { Component, OnInit } from '@angular/core';
import { foodlist } from '../../foodlist';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.scss']
})
export class ShowmenuComponent implements OnInit {
  constructor() {
    this.loadFoodlist();
  }

  ngOnInit(): void {
  }

  foodtype:string = "maindish";
  menu = [{name:"", picture:"", normal:0, extra:0}];
  allmenu = foodlist;

  changeFoodType(type:string){
    this.foodtype = type;
    this.loadFoodlist();
  }

  loadFoodlist(){
    this.menu = [];
    for(let f of this.allmenu){
      if(f.type == this.foodtype) this.menu.push(f);
    }
  }
}
