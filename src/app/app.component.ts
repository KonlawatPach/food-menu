import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: string[] = ["ข้าวผัดหมู", 
                    "ข้าวผัดไก่", 
                    "ข้าวกระเพราหมู", 
                    "ข้าวกระเพราไก่", 
                    "ข้าวกระเพราหมูกรอบ",
                    "ข้าวหมูกรอบ", 
                    "ข้าวพริกแกง",
                    "ข้าวหน้าเป็ด",
                    "ข้าวหมูแดง",]
}
