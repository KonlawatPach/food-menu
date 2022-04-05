import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-foodbox',
  templateUrl: './foodbox.component.html',
  styleUrls: ['./foodbox.component.scss']
})
export class FoodboxComponent implements OnInit {
  @Input() food = {name:"", picture:"", normal:0, extra:0};
  @Output() showalert = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showFoodData(){
    this.showalert.emit();
  }
}
