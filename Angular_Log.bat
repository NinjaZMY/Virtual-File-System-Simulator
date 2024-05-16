Angular Notes
================================================================================
 # (3rd video)   Angular Setup & First App (8:08)
 - [  ] New project 
 ng new project-name ; 
// new project with no flags 

noobie project starts with the following command: 
 > ng new tuto-first --no-strict --standalone false --routing false 


> Flags 
    --no-strict 
    //  noobs should start using the non strict mode  ( less restrictions )

    --standalone  [boolean]
    // the standalone mode should be false for noobs 
    for example: 
    --standalone false 

    --routing [boolean] 
    // this is the routing mode 
    for example: 
    --routing true 

>  ng new tuto-first --no-strict --standalone false --routing false  

// starts a new project 
for this video : 
1 ) pick css 
2 ) choose No for Rendering - preRendering 

 - [  ] To Run your project 
 > cd project-name 
 > ng serve 

> the console will tell you about which link to follow in order to view your project $
//for example: $
> http://localhost:4200/ 


>  download the file attached to the video something like [app.component.html] 
> now go to :  [project-location]/src/app/
>  insert the file in that location  : app.component.html  
> you should replace the already exisiting file with the file that you were provided in the video 
// the file location will become [project-location]/src/app/app.component.html 
================================================================================
 # (4th video)   Editing the First App (10:05)

 > go to [project location]\src\app\app.component.html

> typing the following inside the app.component.html file: 
<br>
<input type="text" [(ngModel)]="name" > 
<p> 
a7la {{  name }}
- 
> focusing on the ngModel thingy, notice how it isn't even working in angular 
    And  that's because in fuking angular you need to fuking declare the ngModel Module thingy 

 > Now, let's go on our journey to declare the ngModel Module thingy  ( hell yeah )  
    
    Basically we need to go into the :  src\app\app.module.ts 

    And from here my nigger we shall declare the ngModel Module thingy: 
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    //under these 3 fuckers we shall declare below : 
    import { FormsModule } from '@angular/forms';

> but that's not the whole thing, nigger-san, now we fucking need to declare, the FormsModule 
again, and this time it's Basically in the following: 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ // below let's fucking go 
    BrowserModule,
    FormsModule
  // above let's go 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
================================================================================
 # (5th video)   A Basic Project Setup using Bootstrap for Styling (4:27)

For this time you have two choices, one to make a new project the other is to  alter your current tutorial project

In both cases you have to do the following: 

> go to app.component.html  and make it empty 

> Remove FormsModule from imports and remove import FormsModule from app.module.ts ; the file should become like the following:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


>  Next we're going to install bootstrap for this project etc..
> first of all you need to quit the project and then run the following command: 

> npm install  --save bootstrap@3 

> this would install it locally ( not globally ) which means this bootstrap is exclusive ( only  reserved ) to this project 

> ps: I still haven't installed bootstrap yet on this project 

> now I did install it 

>  now we go to angular.json file, we're going to modify the styles 

> previously it was: 
"styles": [
              "src/styles.css"
            ],

> you should check the node_modules and then check the location of the bootstrap module that we installed using npm, we do a search for bootstrap, and then we gonna insert it into the styles, 
> *but before that, we need to go deep into bootstrap, we have to go, bootstap/dist/css/bootstrap.min.css, and then we need to insert it into the styles,

> now it becomes:
"styles": [
                "node_modules/bootstrap/dist/css/bootstrap.min.css",
                "src/styles.css"
            ],

> now to load the new configuration you need to run: ng serve 

> to check whether bootstrap is working or not when you load the index.html file or the page of your project 
> you go to elements > head > styles.css >  you open the styles.css file you'll find it mentionning bootstap 3 and that means that bootstrap 3 is working fine 

>  now go to app.component.ts and remove what is written inside the AppComponent class like the following:
export class AppComponent {
  
}
================================================================================
 # (Basics 4th video)     Creating a New Component (06:51)

 > to create a new component, you need to make a component in a new folder having the name of the component you want to create, for example: server ( folder and component name ) ; 
 /app/[new component name]

> new file  server.component.ts

> 

