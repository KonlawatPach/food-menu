import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu = [
            {
                name: 'ข้าวผัดแมว',
                picture: "",
                normal: 30,
                extra: 40
            }
        ];
}
