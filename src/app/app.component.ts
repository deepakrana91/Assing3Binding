import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  firstname:string;
  lastname:string;

  ngOnInit() {
  
   // variable declaration 
       this.firstname="Firstname"
       this.lastname="Lastname"
        this.title = this.firstname+" "+this.lastname;
 
     }

     clickme() {

       this.title = this.firstname+" "+this.lastname;
     }


}
