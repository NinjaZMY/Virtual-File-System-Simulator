import { Component, OnInit } from '@angular/core';

//import * as vsf from '../assets/export vsf.js';

import { consoleimg } from '../assets/export consoleimg.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log("On Init function : here comes the sun turuturu, here comes the sun turuturu, here comes the sun, it's all right ");
    //console.info(vsf);
    /*     consoleimg.load("/assets/ang.png");
        consoleimg.load("/assets/js.jpg") */
  }




}
//script starts below 
let a: any;
let b: any;
a = "hey man", b = " .. what's up";

let Users: any = [{ start_index: 1 }];
let Folders: any = [{ start_index: 1 }];
let query: any = [{ start_index: 1 }];;

let msg: any = "Users : " + JSON.stringify(Users[0]) + "\n Folders : " + JSON.stringify(Folders[0]) + "\n query : " + JSON.stringify(query[0]) + "\n";

console.log(msg + a + b);
//alert(msg + a + b);
//location.reload()

const dynamicScripts = ["/assets/consoleimg.min.js", "/assets/app.tinco.js"];//can insert multi scripts, as part of the array, each array elment is a script to be loaded 
for (let i = 0; i < dynamicScripts.length; i++) {
  const node = document.createElement('script');
  node.src = dynamicScripts[i];
  node.type = 'text/javascript';
  node.async = false;
  document.getElementsByTagName('head')[0].appendChild(node);
}





console.log(consoleimg);


const AngularStart: any = () => {


  console.log("Angular Start dom loaded");
  //testing the consoleimg.load("img_string") function 
  // the function isn't working because it isn't declared here as it seems 
  //consoleimg.load("/assets/02.png");

}

document.body.onload = AngularStart();






