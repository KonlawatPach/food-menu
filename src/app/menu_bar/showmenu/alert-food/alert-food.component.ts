import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-food',
  templateUrl: './alert-food.component.html',
  styleUrls: ['./alert-food.component.scss']
})
export class AlertFoodComponent implements OnInit {
  @Input() food = {name:"", picture:"", type:"", normal:0, extra:0};
  @Output() closealert = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeAlert(){
    this.closealert.emit();
  }
}
