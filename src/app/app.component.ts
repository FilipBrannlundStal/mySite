import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayHome:boolean;
  constructor() { 
    this.displayHome = true;
  
  }

  toogleSub(sub: string) {
    if (sub == "home"){
      if (this.displayHome)
        this.displayHome = false;
      else
        this.displayHome = true;
    }
      
    
  }
  title = 'app works!';
}
