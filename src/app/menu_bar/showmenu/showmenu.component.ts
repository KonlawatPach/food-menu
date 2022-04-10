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
  foodtype:string = "all";
  searchword = "";
  menu = [{name:"", picture:"", type:"",  normal:0, extra:0, description: ""}];
  alertfood = {name:"", picture:"", type:"", normal:0, extra:0, description: ""};
  allmenu = [{name:"", picture:"", type:"", normal:0, extra:0, description: ""}];
  
  constructor() {
    this.getData()
  }

  ngOnInit(): void {
  }

  async getData() {
    this.allmenu = await foodlist();
    this.sortfood();
    this.loadFoodlist();
    this.menudata[0].style.display = "grid";
    this.loading[0].style.display = "none";
  }

  changeFoodType(type:string){
    this.foodtype = type;
    this.loadFoodlist();
  }

  loadFoodlist(sw:string = this.searchword){
    this.menu = [];
    if(sw != "") this.searchword = sw;
    else this.searchword = "";
    for(let f of this.allmenu){
      if( (this.foodtype == "all" || f.type == this.foodtype) && (this.searchword == "" || f.name.includes(this.searchword.trim())) ) this.menu.push(f);
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

  sortfood(){
    let newmenu = [];
    let menupertype = [];
    let alltype = ["maindish", "appetizer", "dessertanddrink", "any"];
    for(let t of alltype){
      for(let f of this.allmenu){
          if(f.type == t) menupertype.push(f)
      }
      menupertype.sort(this.compare);
      newmenu.push(...menupertype)
      menupertype = [];
    }
    this.allmenu = newmenu;
  }

  compare(a:{name: string, picture: string, type: string, normal: number, extra: number, description: string}, b:{name: string, picture: string, type: string, normal: number, extra: number, description: string}) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

}