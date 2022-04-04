import { Component, OnInit } from '@angular/core';
import { tablelist } from 'src/app/tablelist';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {
  tableLists = tablelist;
  imagename = ["idle",
              "used",
              "broken",
              "cleaning",
              "indoor",
              "outdoor"];

  constructor() { }

  ngOnInit(): void {
  }
}
