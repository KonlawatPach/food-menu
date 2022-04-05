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
  tableLists = [{number: 0, status: "", type: ""}]
  
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
    let data  = [{number: 0, status: "", type: ""}]

    await fetch("https://script.google.com/macros/s/AKfycbx08MwBf9CdAtW1Qnae4PZMB2jsV9Lu2prb__10qLBRmCXAEDPOuByArckXXz4WO2A8/exec")
    .then(function(response) {
      return response.json();
    }).then(function(myJson:{number: number, status: string, type: string}[]) {
      data = myJson;
    });

    this.tableLists = data;
    this.tabledata[0].style.display = "grid";
    this.loading[0].style.display = "none";
  }
}