import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.component.html',
  styleUrls: ['./table-status.component.scss']
})
export class TableStatusComponent implements OnInit {
  @Input() table = {number: 0, status: "", type: ""};

  constructor() { }

  ngOnInit(): void {
  }

}
