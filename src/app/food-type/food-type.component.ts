import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.scss']
})
export class FoodTypeComponent implements OnInit {
  @Output() typechange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changeFoodType(type:string){
    this.typechange.emit(type);
  }
}
