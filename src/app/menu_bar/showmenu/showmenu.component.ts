import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { foodlist } from '../../foodlist';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.scss']
})
export class ShowmenuComponent implements OnInit {
  @Output() showalert = new EventEmitter();
  foodtype:string = "maindish";
  menu = [{name:"", picture:"", normal:0, extra:0}];
  alertfood = {name:"", picture:"", normal:0, extra:0};
  allmenu = foodlist;
  
  constructor() {
    this.loadFoodlist();
  }

  ngOnInit(): void {
  }

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

  showFoodAlert(){
    this.showalert.emit();
  }
}
