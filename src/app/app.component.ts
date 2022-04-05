import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  element = document.getElementsByTagName('app-alert-food') as HTMLCollectionOf<HTMLElement>;
  foodalert = {name: '', picture: "", type: "", normal: 0, extra: 0}

  showAlert(){
    this.element[0].style.display = "block";
  }

  closeAlert(){
    this.element[0].style.display = "none";
  }
}
