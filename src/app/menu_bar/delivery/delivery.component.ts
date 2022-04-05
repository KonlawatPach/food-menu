import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  imageList:string[] = ["https://st-th-1.byteark.com/assets.punpro.com/cover-contents/i18798/1630904001550-New%20Project%20%2813%29.jpg", "https://media.istockphoto.com/photos/weve-got-you-covered-during-lockdown-picture-id1287632111?k=20&m=1287632111&s=612x612&w=0&h=VuwiEwCEB6rrpbiCt9XE_gOD1_WVO9el1bviyold4RQ=", "https://i0.wp.com/businessday.ng/wp-content/uploads/2021/10/Person-Holding-Brown-Paper-Delivery-Bag--e1635247491199.png?resize=700%2C430&ssl=1", "../../../assets/map.jpg"];
  imageShow:number = 0;
  

  constructor() {
    this.slideshow();
  }

  ngOnInit(): void {
  }

  slideshow(){
    setTimeout(() => {
      this.imageShow = (this.imageShow + 1) % 4;
      this.slideshow();
    }, 6000)
  }
}
