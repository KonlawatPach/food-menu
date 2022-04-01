import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() foodType:string = "";
  // menu: string[] = ["ข้าวผัดหมู", 
  //                   "ข้าวผัดไก่", 
  //                   "ข้าวกระเพราหมู", 
  //                   "ข้าวกระเพราไก่", 
  //                   "ข้าวกระเพราหมูกรอบ",
  //                   "ข้าวหมูกรอบ", 
  //                   "ข้าวพริกแกง",
  //                   "ข้าวหน้าเป็ด",
  //                   "ข้าวหมูแดง",]
  menu =  [
                      {
                          name: 'ข้าวผัดหมู',
                          picture: "https://www.trc-group.co.th/wp-content/uploads/2017/04/483.jpg"
                      },
                      {
                          name: 'ข้าวผัดไก่',
                          picture: "https://img.wongnai.com/p/400x0/2020/03/24/9d4c062fdeaa40a6996fbefa553d52df.jpg"
                      },
                      {
                          name: 'ข้าวผัดเนื้อ',
                          picture: "https://www.bloggang.com/data/narellan/picture/1426944823.jpg"
                      },
                      {
                          name: 'ข้าวกระเพราหมู',
                          picture: "https://d12man5gwydfvl.cloudfront.net/wp-content/uploads/2019/03/%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%AA%E0%B8%B1%E0%B8%9A-1.jpg"
                      },
                      {
                          name: 'ข้าวกระเพราหมูกรอบ',
                          picture: "https://i.pinimg.com/originals/6f/9d/13/6f9d133ee92c028963ecac4edea4dd50.jpg"
                      },
                      {
                          name: 'ข้าวกระเพราไก่',
                          picture: "https://i.pinimg.com/originals/0c/bc/66/0cbc66423688f2a914666989fcd9febd.jpg"
                      },
                      {
                          name: 'ข้าวหมูกรอบ',
                          picture: "https://sls-prod.api-onscene.com/partner_files/trueidintrend/4567/111396344.jpg"
                      },
                      {
                          name: 'ข้าวพริกแกงหมู',
                          picture: "https://live.staticflickr.com/5497/9713200629_eb0624fdd0_b.jpg"
                      }
                  ];
}
