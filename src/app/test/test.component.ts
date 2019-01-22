import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: 'test.component.html'
  template: `<h1 [ngStyle]="msgstyle">
                hello
                my dear {{name}}
              </h1>

              <h1 *ngFor="let num of [1,2,3]">for loop</h1>
              <p [ngClass]="msgclass">
              {{greetUser()}}
              </p>
              <p [class.text-success]="false">
              {{greetUser()}}
              </p>
              {{fun()}}
              <br>
              <input type="text" value={{name}}>       
              `,
  styles:[`
          .text-success{color: red;}
          .s{font-size: 50px;}
        `],
  //styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name="HARSH";
  public nums =[10,20,30,40];
  public herror=false
  public ispe=true;
  public msgclass={
    "text-success":true,
    "s":true
  }
  public msgstyle={
    color: "red",
    fontStyle: "italic" 
  }
  constructor() {

   }

   public fun():any {
     document.write("HELLO\t");
         return "hi there i am from ";
   }
  greetUser():string
  {
    return "Hello " + this.name;
  }

  ngOnInit() {
  }

}
