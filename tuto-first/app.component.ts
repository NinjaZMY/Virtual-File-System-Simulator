import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
//script starts below 
let a: any;
let b: any;
a = "hey man", b = " nigger what's up";

//location.reload()
let Users: any = [{ start_index: 1 }];
let Folders: any = [{ start_index: 1 }];
let query: any = [{ start_index: 1 }];;

let msg: any = "Users : " + JSON.stringify(Users[0]) + "\n Folders : " + JSON.stringify(Folders[0]) + "\n query : " + JSON.stringify(query[0]) + "\n";
alert(msg + a + b);
console.log(msg + a + b);