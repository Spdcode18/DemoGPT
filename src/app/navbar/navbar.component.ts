import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
  @Output() sendSearchData = new EventEmitter<string>();
  searchValue!: string;
  submit(event: any): void {
    // console.log("This is log from navbar.component:" + this.searchValue);
    if (event.keyCode == 13 || event.button == 0)
      // console.log("Enter Press");
      this.sendSearchData.emit("13");
    else
      this.sendSearchData.emit(this.searchValue);
  }
}
