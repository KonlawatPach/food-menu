import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodbox',
  templateUrl: './foodbox.component.html',
  styleUrls: ['./foodbox.component.scss']
})
export class FoodboxComponent implements OnInit {
  @Input() food = {name:"", picture:"", normal:0, extra:0};

  constructor() { }

  ngOnInit(): void {
  }

  showFoodData(foodname:string){
    alert(foodname)
  }
}
