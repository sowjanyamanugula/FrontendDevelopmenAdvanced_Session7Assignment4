import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: ` <div>
               <h1>{{pageTitle}}</h1>
               <ul *ngFor="let user of userList">
                  <li (click)="ngClick(user)">{{user.name}} {{user.role}}</li>
                </ul>
                <hr/>
                <h2>List of users</h2>
               <ul *ngFor="let user1 of this.MatchedArr">
                  <li>{{user1.name}}</li>
                </ul> 
               
    </div>`,
    
})
export class AppComponent  {
   pageTitle : string = `Session 7 Assignment 4`; 
   userList: any = [
            {name: "Avnesh Shakya",age: "26",  role:"Admin"},
            {name: "Adam", age: "30", role: "Member"},
            {name: "Eve", age: "35", role: "SuperAdmin"},
            {name: "Mohan", age: "25", role: "Member"},
            {name: "Sohan", age: "28", role: "Superwiser"},
            ]
  MatchedArr:any=[];
ngClick(user){
      this.MatchedArr=[];
     for(let arr of this.userList) {
          if(user.role==arr.role){
            console.log(user.name);
              this.MatchedArr.push(user.name);
          }
   }
   
}
  }



