import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Duality';
  keyword!: string;
  search: boolean = false;
  sendData(event: string): void {
    console.log("This is log from app.component file:" + event);
    if (event == "13")
      this.search = true;
    else {
      this.search = false;
      this.keyword = event;
    }
  }
}
