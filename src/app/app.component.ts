import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  name = "Matt Bishop";
  num = 0;

  userName = "";

  calculate(){
    console.log("Input val: ", this.userName);
  }

  clear(){
    this.userName = "";
  }

  test(){
    console.log("user clicked the button");

    this.name = 'this is really cool!!' + this.num;
    this.num++;
  }
}
