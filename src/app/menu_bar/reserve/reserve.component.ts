import { Component, OnInit } from '@angular/core';
import { tablelist } from 'src/app/tablelist';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})

export class ReserveComponent implements OnInit {
  tabledata = document.getElementsByClassName('reservebody') as HTMLCollectionOf<HTMLElement>;
  loading = document.getElementsByClassName('loading') as HTMLCollectionOf<HTMLElement>;
  tableLists = [{number: 0, status: "idle", type: "outdoor"}]
  
  imagename = ["idle",
              "used",
              "broken",
              "cleaning",
              "indoor",
              "outdoor"];

  constructor() {
    this.getData()
  }

  ngOnInit(): void {
  }

  async getData() {
    this.tableLists = await tablelist();
    this.tabledata[0].style.display = "grid";
    this.loading[0].style.display = "none";
  }
}