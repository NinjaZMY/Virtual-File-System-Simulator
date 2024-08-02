import { Component, OnInit } from '@angular/core';

//import { F } from '../assets/export vsf.js';//
//import { } from "../assets/export vsf.js";

import { a, consoleimg, Start } from '../assets/export consoleimg.min.js'

// import { verifyHostBindings } from '@angular/compiler';
//
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    log("On Init function : here comes the sun turuturu, here comes the sun turuturu, here comes the sun, it's all right ");
    //console.info(vsf);
    /*     consoleimg.load("/assets/ang.png");
        consoleimg.load("/assets/js.jpg") */
    info("my retarded F equals :");
    // console.info(Folders);
    info(Folders);








  } //end of ngOnInit Function 




} // end of class AppComponent 

//script starts below 
//let a: any;

let vsf = Start();
let Users = vsf.Users;
let ALL_Users = Users.ALL_Users;
let AddUser = Users.AddUser;
let AddFolder = Users.AddFolder;
let log, warn, info, error, trace, table;
log = vsf.log; warn = vsf.warn; info = vsf.info; error = vsf.error;
trace = vsf.trace; table = vsf.table;
// Automate Console  x Object Elements; priority X+2

let b: any;
b = " .. what's up";
let uid = 0/*  | Start.uid; */
//let Users: any = [{ start_index: 1 }];
//Start.Users = Users;
let S = a.start(); // might replace it with exported value of vsf
log("                                                                                                                             ⬆⬆⬆⬆⬆                      \n                                                      \n                                                                                                 The Console Line above which is a 🅱 \n                                                                                                 Lower Case B of the exported module,\n                                                                                                  is a proof that the object variable\n                                                                                                  had been successfully exported \n                                                                                                 into the Angular App Code\n                          \n🅰 Inside Angular App 🤓☝ \ntypeof a: " + typeof a, "\na equals: ", a, "\n a.b()       returns             ", a.b(), "\n a.start() returns             ", S);
/* function stringifyObject(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'function') {
      result[key] = value.toString();
    } else {
      result[key] = value;
    }
  }
  return JSON.stringify(result, null, 2);
}// already exisiting in the exported object 
 */

//console.table([{ str: "a", val: a + "  => " + stringifyObject(a) }, { str: "a.start", val: a.start() + "  => " + a.start.toString() }, { str: "a.b", val: a.b() + "  => " + a.b.toString() }])

table([{ str: "a", val: a.c(a) }, { str: "a.start", val: S }, { str: "a.b", val: a.b() }])

//Start();
//Start.AddUser(uid, "user 0");
warn(a.Users);
//AddUser(uid, "");
//delete Users[1]; Users.length--;
log("Users at 0 when  Start function had been called once  : ");
ALL_Users();
log("Last Added User ", Users[Users.length - 1]);
log("Running AddUser");
//log(users, "  users x Users ", Users);
AddUser("");
log("ALL users velow")
ALL_Users();
// console.log(Users.AddUser(uid, "")) // serves as adding user x logging 
AddUser("")
log("ALL users velow")

//console.log("Current Users below:")//for debugging 
ALL_Users();
// let Folders: any = [{ start_index: 1 }];
let Folders = vsf.Folders;
// { fid: 12, uid: 0, lib: 'Rythm of the heart', lvl: 2, parent_id: 3 }
AddFolder(12, 0, 'Rythm of the heart', 3);
log("Here Comes The Folders Pew Pew", Folders);
//console.warn("hey", typeof vsf);
//let Folders: any = vsf.Folders;
console.log('F =', "Folders =", Folders)
let query: any = [{ start_index: 1 }];;

let msg: any = "Users : " + JSON.stringify(Users) + "\n Folders : " + JSON.stringify(Folders[0]) + "\n query : " + JSON.stringify(query[0]) + "\n";

log(msg + a + b);
//alert(msg + a + b);
//location.reload()






log(consoleimg);
//console.log(ci.consoleimg);


const AngularStart: any = () => {


  log("Angular Start dom loaded");
  //testing the consoleimg.load("img_string") function 
  // the function isn't working because it isn't declared here as it seems 
  const dynamicScripts = ["/assets/old vsf.js", "/assets/consoleimg.min.js", "/assets/app.tinco.js", "/assets/export vsf.js"];//can insert multi scripts, as part of the array, each array elment is a script to be loaded 
  for (let i = 0; i < dynamicScripts.length; i++) {
    const node = document.createElement('script');
    node.src = dynamicScripts[i];
    node.type = 'text/javascript';
    if (i == 3) node.type = "module";
    node.async = false;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  //consoleimg.load("/assets/02.png");

}

document.body.onload = AngularStart();






