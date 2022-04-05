import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { foodlist } from '../../foodlist';

@Component({
  selector: 'app-showmenu',
  templateUrl: './showmenu.component.html',
  styleUrls: ['./showmenu.component.scss']
})
export class ShowmenuComponent implements OnInit {
  menudata = document.getElementsByClassName('menubody') as HTMLCollectionOf<HTMLElement>;
  loading = document.getElementsByClassName('loading') as HTMLCollectionOf<HTMLElement>;
  foodtype:string = "maindish";
  menu = [{name:"", picture:"", type:"",  normal:0, extra:0, description: ""}];
  alertfood = {name:"", picture:"", type:"", normal:0, extra:0, description: ""};
  allmenu = [{name:"", picture:"", type:"",  normal:0, extra:0, description: ""}];
  
  constructor() {
    this.getData()
  }

  ngOnInit(): void {
  }

  async getData() {
    this.allmenu = await foodlist();
    this.loadFoodlist();
    this.menudata[0].style.display = "grid";
    this.loading[0].style.display = "none";
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

  element = document.getElementsByTagName('app-alert-food') as HTMLCollectionOf<HTMLElement>;
  foodalert = {name: '', picture: "", type: "", normal: 0, extra: 0, description: ""}

  showAlert(fooddata:{name: string, picture: string, type: string, normal: number, extra: number, description: string}){
    this.foodalert = fooddata;
    this.element[0].style.display = "block";
  }

  closeAlert(){
    this.element[0].style.display = "none";
  }
}
