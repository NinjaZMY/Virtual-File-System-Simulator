﻿//vsf.js
//import { consoleimg } from '../export consoleimg.min.js';
// cannot import in this version which is a global version 

//tracking whether angular is running or not below 
//isAngular=window.ng; isAngular? "angular running" : "no angular" 
    let isAngular=window.ng ? 1 : 0 ; 
    //( () => {  let isAngular=window.ng ? 1 : 0 ; return isAngular? "angular running" : "no angular" ;    }  ) () ;
    let angularPath="/assets/";
let AngularState= isAngular ? "\n\n\n                                             Ｔｈｅ　Ｇｌｏｂａｌ　ＶＳＦ　Ｌｉｂｒａｒｙ　                                   \n\n                                                                       ｉｓ　ｒｕｎｎｉｎｇ\n\n 　                                                                         ｉｎｓｉｄｅ　                   　\n\n                                                   ＋－＋＋－＋＋－＋＋－＋＋－＋＋－＋＋－＋\n                                                    ｜Ａ｜｜Ｎ｜｜Ｇ｜｜Ｕ｜｜Ｌ｜｜Ａ｜｜Ｒ｜\n                                                    ＋－＋＋－＋＋－＋＋－＋＋－＋＋－＋＋－＋\n\n\n                                                                              Ａｎｇｕｌａｒ \n\n\n    " 
    
    : "\n\n No Angular, then you Can witness the power of Native JavaScript for this enviornement\n\n\n                                             Ｔｈｅ　Ｇｌｏｂａｌ　ＶＳＦ　Ｌｉｂｒａｒｙ　                                   \n\n                                                                       ｉｓ　ｒｕｎｎｉｎｇ\n\n";
    let isAngImg  =  isAngular ? "ang.png" : "js.jpg"  ;
    if ( isAngular) isAngImg=angularPath+isAngImg;
    //consoleimg.load(isAngImg); 
    console.log("image path : "+isAngImg);
    console.info(  AngularState  ); 
//consoleimg.load("js.jpg"); 
// start below this line 
let Users = [{ start_index: 1 }];
let Folders = [{ start_index: 1 }];
let query = [{ start_index: 1 }];

let fid,L,is_root ,N,uid,qid=0;
// fid =>  in reality fid is generated automatically in database or randomized 

// as for uid, it depends on the user session => get user-id => uid=user-id 
fid=uid = 0;


AddUser(uid, "user 0");

// at last fix the Folder x User problem 
// Folder x User is suppossed to be fixed here 

function AddUser(id, lib) {
    let len = Users.length;
    if (lib == "") { lib = "user" + len; }

    Users.push({ id: id, lib: lib })

} // end of function AddUser 

let max_Level = 0;
let root_id = AddFolder(fid, uid, "", null);// this is root 

let p1 = AddFolder(fid, uid, "folder des noobs ", root_id);// p1  
let p2 = AddFolder(fid, uid, "Dossier de Surveys", root_id);// p2 
let p3 = AddFolder(fid, uid, "Google Ads"
    , root_id); // p3 
AddFolder(fid, uid, "Samuel", p1);
AddFolder(fid, uid, "Jack", p1);
AddFolder(fid, uid, "Jefferson", p1);
AddFolder(fid, uid, "Eric",
    p2);
AddFolder(fid, uid, "Jhonson", p2);
AddFolder(fid, uid, "Carlenson", p2);
AddFolder(fid, uid, "Carl", p3);
AddFolder(fid, uid, "Nickelback", p3);
AddFolder(fid, uid, "Rythm of the heart", p3);

// the line below was added at the following date
//木　０２月　２２日　２０２４年　コード　Code　ＣＯＤＥ
// this of line comment was last updated at : ０３月　０１日　２０２４年
// as of the above date ; Folders display works at a multilevel
// Folders display lacks the show more  &  pagination demo
// although pagination is quite feasible using :
// offset & others in db
// for simulation using query_index x k x priority
// pagination within a simulation seems harder than the db pagination 
// however it is quite feasible 

function SearchFolderById(fid) {
    let N = Folders.length;

    for (let i = 1; i < N; i++) {
        let id = Folders[i].fid;

        if (id == fid)
            return Folders[i];
        else
            continue;

    } // end of for i that parses the Folders Array


} // end of Search Folder by id 


function Level(fid) {

    let folder = SearchFolderById(fid);

    return folder.lvl;
} // end of Level of Folder_id  function 


function AddFolder(id, uid, lib, parent_id) {
    // var L;
    // fid, My Workspace (default), null     ) //

    if (parent_id == null) {
        if (lib == "") {
            lib = "My WorkSpace";
        } // end of if parent_id 
        L = 0; // level 0 for root 
    } // end of if paren_id refers to root 
    else
        L = Level(parent_id) + 1;
    // parent is a child of root 
    //end of if parent is root 

    if (L > max_Level) { max_Level = L; }

    ++fid;
    return Folders[Folders.push({ fid: id, uid: uid, lib: lib, lvl: L, parent_id: parent_id }) - 1].fid;
} // end of function AddFolder

// using User_id  fetch folders  => this is done by default
//  We here know that Folders variable contains all the folders
// that are needed to be displayed
// so no worries about the uid , just parse whatever folder you need
//Using Folders Array, parse it step by step to use it in dom
// first of all we start with root, having level ==0 ;
// sql query shoiuld return one single root with level 0
// thanks / due to the fact that a single uid is required to have only a single folder root

// root => where  uid &&  L==0 or parent_id == null
// we gonna use L==0 because it's human
// build a function $$
// Search_Folder_by_Level (  L  )
//    if ( L == 0  ) return root_folder_object ;
// else return ALL_Folders _Having_Level (  L  ) ;
//***********
//Time to the build the fucking Search_Folder_By_Level function
//***********
function Folder_has_Children(pid,L)
{
    
    let parent=0;  

    if(pid==undefined) return false 
    
    let c,condition= L==undefined;

        
    for(let i=1;i<N;i++)
        {
            if (condition)
                c=Folders[i].parent_id==pid ; 
            else 
            c=Folders[i].parent_id==pid&&Folders[i].lvl==L; 


            if(c)
                {
                    parent=1;
                    break;
                }
            continue
        }; // end of for loop
    return Boolean(parent);
}

function Check_LeveL_x_Parent(L,pid)
{
  
    // alert("Level equals "+L); 
        if(pid!=undefined)
    {//alert("pid : "+pid );
    let isParent=Folder_has_Children(pid,L);   
    //  alert(JSON.stringify(SearchFolderById(1) )); 
    console.warn("inside check_level_x_parent function\nFolder_has_Children("+pid+","+L+");   \nisParent equals "+isParent);
        if(!isParent)
        {   
        console.error({"error":"querry error : parent not found" } )   
        return false;
        }
         else return true; 
    }//end of if pid is not undefined
    else return true; 

}//end of check_level_x_parent function 

function Level_x_Parent_Testing(L,pid)
{ // might not need this function but it was formed for testing 
if (Check_LeveL_x_Parent(L,pid)  )
return 1; 
else return "return false";
}//end of function Level_x_Parent_Testing 


function ALL_Folders_Having_Level(L,pid) {
    //,is_root=L==0
    if(L==undefined) return false; 
    let is_root=L==0;//new is_root instance different from external is_root 
    let Result = [{ start_index: 1 }]; // this declaration of Result within the function is required 
    let isParent; 

    console.log("testing Level_x_Parent_Testing("+L+","+pid+")  returns : "+Level_x_Parent_Testing(L,pid)); 
    eval(Level_x_Parent_Testing(L,pid)) ; 
    console.warn("from here isParent is true ; thus we continue the function")
    isParent=Check_LeveL_x_Parent(L,pid);

    //console.warn("ALL folders Having Level s' isParent equals "+isParent);
    if(!isParent)
    return false;
    //return false 


    if (is_root) 
    {
    //  Result.push(Folders[1]);
    //return Result;
    return Folders[1];
    }

    let N = Folders.length;







        let sameParent=1; 
    //console.log("what is going on here inside ALL_Folders_HAving_LEVEL FUNCTION");//for debug
    for (let i = 1; i < N; i++) {
        //console.log("problem inside loop")//for debug
        let object = Folders[i];
            if(typeof pid!="undefined")//pid exists 
            // the above if is better than double ifs each time, because if the first if fails then it's just one if and only 2 instructions if it fits which is a perfect design here, the bad design is to desgin double ifs that get executed each time, consuming ++memory and ++time, my design here is an optimized spactio-temporel code design  
            sameParent= pid == object.parent_id 
         

        let sameLevel = object.lvl == L;
        let last_iteration = i == N - 1;

        if (sameLevel&sameParent) // sameParent is disabled by default 
        {            
            Result.push(object);
/*             console.warn("success insertion of this object below")
            console.log(object) ; 
            //this is debug log, it's so freaking useful */

        } 
        else 
       { 
        /* console.log(" pid : "+pid+" & Folder parent_id : "+object.parent_id+"  ; is it the same parent, Response is : "+sameParent+" \n this is the object :");
        console.error(object);  
        //this is debug log, it's so freaking useful
        */
      }

        if (last_iteration) {

            return Result;
        }//end of if last iteration

    } // end of for i that parses the Folders Array 


} // end of function all  Folders 

function Search_Folder_By_Level(L,pid) {
    /*   if(L==0)  { return root_folder_object ; }
      else 
      {
         
      } // end of if L==0 */
    N = Folders.length;
    is_root = L == 0; // is_root correct declaration here 
    let Result = [{ start_index: 1 }]; // This declaration of Result within the Function is Required since this is also a Custom Query, Each function Queries its own query 
    
    

    /*     if (is_root)
            return Folders[1]; */
    let is_Parent = Check_LeveL_x_Parent(L, pid);
    if (!is_Parent) return false; 
    
    console.warn ("passed checkpoint")

    let queryObject = ALL_Folders_Having_Level(L,pid);
    let maxLength = queryObject.length;

    // if (maxLength == 1) { return queryObject[0]; } // empty query 
    // above to activate it, type of object == object > return  object
    // but we want to be able to modify dom; 

    let root_str = 'id="d' + root_id + '"';
    if (is_root && dom_string.includes(root_str)) { return queryObject; } // only one element
    // Rendering root works independant with the query_index 
    //fixing the query index will fix folders x files duplication 

    console.log("before the start of this (loading) operation , query_index equals " + query_index);
    //deafult : N
    // else => k+query_index+2
    // Select Query => using Query_index & Query_length 
    // from Query_index display elements : 
    //Elements_having_a_Number_of(Query_length)
    // here query length equals 4 to match the folders database 
    // but for a brute operation we have the variable k 
    // Select query => from query_index, select only k elements 
    // here query_length is used to translate 
    // the take k elements from folders database ; 
    // in the loop query_length is minus one equals 3 
    // and folder has an extra element at 0 
    // which is extra element , cardinal ( exta_element) = 1 
    // 3 minus 1 equals k => thus we dispaly k elements 
    /*
query_index in the folder database should be 1 
since the zero index is referred to extra data 
however for the puropose of transforming 
this project and migrating it toward any sort of database 
logically the defaut virgin value of index should be zero 
that's why for the first usage of the query, 
query_index just starts at zero 
    */

    /*
    
    The problem here is due to the non  sorted Folders Array 
    plus it's not a queried folder 
    
    
    */
    let query_length = k + query_index + 1;
    let object,i,counter = 0;
    if (query_length > maxLength)
        query_length = maxLength;

    if (is_root) {
        // is root 
        object = queryObject;
        i = query_length - 1; // last iteration , it means one time 

    }
    else { // !root 
        i = query_index + 1
    }

    for (i; i < query_length; i++) {
        if (!is_root)
        object = queryObject[i];


        // object = queryObject[i];
        let sameLevel = (object.lvl == L);
        let last_iteration = i == query_length - 1;

        if (sameLevel) {
            /* if (counter == 0)
          
                1   ; */
            //the line above is actually disfunctional , or was it fixed now ? 
            //it is dysfunctional and I'm removing it 
          
            console.log(object);
            Result.push(object);
            // we can directly Render The Folder here ;

            // for tabulation, we can run an external tabulation function anywhere ; 
            // we will decide on the location the tab function later on
            // 2 approaches for tabulation : 
            // A ) the already existing method, get max_ level of folder 
            // create as much max_lvl as height of folder 
            // ceate for each level a css class 
            // B ) for each level create a tab css class
            // if class exists / do not create it again ( this is the optimization)
            // without the optimization the class would be created /  replaced ()

            // get element of html level  1 folder below
            /*             <div class="tab"> //tab coressponds to the level of tabulation 
                            <img class="folder" src="folder.png" /> Folder   + Folder  3 name  */
            //folders json into dom here 
            fid = object.fid;
            let lib = object.lib;
            let marker = '<div class="tab1"> <inside' + fid + '>'//correct declaration of marker here  
            let temp_obj; 
            if (is_root) {
                temp_obj = ' <img class="folder"  id="d' + fid + '" src="root.jpg" />  ';

            }
            else {

                temp_obj = '     \r\n    <img class="folder" id="d' + fid + '" src="folder.png" /> ';
            }
            temp_obj += lib + '\r\n  <br>' + marker;

            if (L > 0) {
                let parent_marker = "<inside" + object.parent_id + ">";
                dom_string = dom_string.replace(parent_marker,
                    '\r\n' + temp_obj + "</div>" + parent_marker)
                // or parent_marker at the beginning to reverse results 
                // parent_marker + "div of tabulation " + temp_obj
            }
            else// if (L == 0) => is_root 
                dom_string += temp_obj;
            // insert Render_JSON_Function here into DOM another function
            // child of function is Render_Folder vs Render_Folder_of_level_1 
            //we have level equals L;  


            // insert Render Function above here 
            // if level one Then Level one Render or other 

            counter++;
        }
        if (last_iteration) {
            dom_string += "</div>"; // tabulation tab gets closed 
            console.log("At the end of this operation:  K == " + k + ";  query_index == " + (query_index += counter) + "\nbelow is the result:\n");
            console.log(Result);
            /*             console.log("this is the last added element : \n");
                        console.log(Result[counter]); */
/*             document.getElementById("target").innerHTML = dom_string;
            return dom_string; */
            Load_Dom_string() 
        }//end of if last iteration

    } // end of for i that parses the Folders Array 

} // end of function Search_Folder_By_Level

    function Load_Dom_string(s=dom_string) {
            /* dom_string += "</div>"; // tabulation tab gets closed  */
  // by default s gets dom_string else it's the custom string s 
            /*       if(typeof s!="undefined")
        dom_string=s ;  */
        
        document.getElementById("target").innerHTML = s;
        
        return s;
    } // end of load dom string 

function unload_dom_string() {
        //by default :
dom_string = '\r\n<div class="root tab0">  <img class="folder"  id="d0" src="root.jpg" />  My WorkSpace\r\n  <br></div><div class="tab1"> <inside0> </div>'
return Load_Dom_string(); 
}

function from_JSON_to_DOM() {
/* 
    Search_Folder_By_Level(0); 
    */
    query_index=0; k=3 ; 
    unload_dom_string();
    Search_Folder_By_Level(1,1);

    query_index=0; k=9 ; 
    Search_Folder_By_Level(1); 
    query_index=0; k=9 ; 
    Search_Folder_By_Level(2); 
    query_index=0; k=9 ; 
    Search_Folder_By_Level(3); 
/*     
 
    
      

 */

    // this is like my backend , here I can automize tasks especially after i made the injection function possible 


    // prioriy = folders x files
    // this information would be saved to a table settings UserSettings ( id , uid ,  Fetch_prioriy, K    )
    // K refers to the number of max_stream_elements  to be fetched ( folderxfiles)
    // prioriy to folders first or to files first or another rule
    // if k=50 ;  fetch 50 elements ( folders x files )

    // Root gets fetched manually ; hrere we suppose the source of our stream if Folders x Files ; 
    //*****************000000000000000000000000000000000000000000000000000000000000
    /*
    First step is to be able to activate root , within the Search_Folder_By_Level ( for L equals 0 )

    first make it possible to render root correctly without dependency to this function; 

    the final destination is to make the Search_Folder_By_Level( L ) an injection function 
    that is toattly independant to this function 

    the usage of this function is however to auto-display Root x other Levels where L > 0 
    before the release of the upcoming show-more feature x expand x minimize 

    For better automatization we need the Search_Folder_By_Level ( L ) function 
    to be 100% injectable without the need of this function in the first place 

    so in order to build a workspace + Level 1 
    we can just call for [ i from 0 to 1 ] invoke ( Search_Folder_By_Level( L equals i ) ) ; 

    This is the most basic of injection ; 

    the next level would be calling the Render_function with L 

    when  the Rendering isn't complete due to K < database elements of L ; 

    by setting query_index things should work smoothly 

    in case of upcoming bugs related to query_index ; 
    We can create a multi-instance of query_index / query [id, parent_id, current_index]
    using parent_id we fetch Level ; however query_level <= Level ( parent_id ) -  1 ; 
    for faster usability we should include L into the query object  [id, L ,parent_id, current_index]
    PARENT_ID is essential to knowing where to input the children 
    we can save the query / query_index into database but it isn't essential 
    since it is a waste of data 
    what we can do instead is create routing / view matching 
    current parent and loading paren't children 
    and the title above would include the full route 
    x
    */
    //0000000000000000000000000000000000000000000000000000000************************** /
    //dom_string = "";
    //query_index = 0;
    //root = Search_Folder_By_Level(0); // 0 is root level

    // for tab0 to be inserted as a class in root 
    // is a way to indicate that even root would transition 
    // if the language is altered 
    // a good solution would be to implement 
    // tab_arN x tabN for tabulation 
    //so if you switch languages 
    // you lose the tab related to the eng version for example 
    // vice versa in arabic you gain the tab-ar instead 
    // a swift transition it is 
    //    dom_string = '<div class="root tab0"> \r\n        <img class="folder"  id="d' + root.fid + '" src="root.jpg" /> ' + root.lib//

    // above you can see how root (level 0) is displayed 
    /*
    <div class="root"> 
            <img class="folder"  id="d+folder_id"  src="root.jpg" /> My Workspace
    ---
    '<div class="root"> \r\n        <img class="folder"  id="d+folder_id"  src="root.jpg" /> My Workspace </div>'
    */
    //Search_Folder_By_Level(0);
    //query_index = 0;
    //Result = Search_Folder_By_Level(1);
    // add K & query index to the function

    //Render_Level_one(Search_Folder_By_Level(1));
    //Search_Folder_By_Level(1);

    // here we can Render Folders by Levels 
    query_index = 0;

    // I can make a for loop
    //quey_index gets 0 
    // from lvl 0 to N 

    //**************Easter Egg***********************/
    // The function below when used is an easter egg 
    // as I have sucessfully,  made it possible for 
    // the usage of multi-level Folder system
    //  the same thing applies to files 
    // However files aren't allowed in level 1 
    // I still haven't implemented files yet 
    // for the purpose of  making sure that Folders work properly 
    // having various bugs with folders, I had to delay 
    // the usage of files 
    // however their impelementation is quite simple 
    // oh wait, not so simple 
    // depending on the priority tag 
    // it is quite possible to display files 
    // one out of fourth is the easiest way 
    //  knowing that there are indeed 
    //4 ways at least for order by 
    // and the fact that a low variable k 
    // would pose problematic 
    // as it has to fetch from the both files x folders 
    // or not fetch at all from one side 
    // for example only fetch from either files x folders 
    // if k is low, fetch from only either one of them 
    // if k is high fetch from both of them 
    //relying on priority $
    // priority here is of the highest importance 
    //**********************************************
    /*Render Level 2 below* */
    //  Search_Folder_By_Level(2); // Render level 2 here/ make it commented for testing  
    // works but needs to be inserted below each parent ;
    // insertion placement is wrong here 
    // fixed placement finally 

    // dom_string += ' </div>'; // root div 
    //    return dom_string;


    // if db => for each stream => fetch ( elements )

    // enter loop 
    //=> 1 : load folders only 

    //=> 2..N : load  folders x files only






} // end of Function from_JSON_to_DOM

//below you can change the variable k
let k = 1;
let dom_string = "";
let query_index = 0;
query.push({ qid: qid, lvl: NaN, pid: null, current_index: query_index });
//query object  [id, L ,parent_id, current_index] 
// make a query object here ??? 
from_JSON_to_DOM();

/* function Render_Level_one(Lvl_1_object) {

    //dom_string = "";// works jere

    // first of all make Tabulation function here 
    // but first check my saved version of the tabulation function $
    // 

}//end of function Render_Level_one(Lvl_1_object) */

// code below is about level tabulation :
// might transform it into a tabulation function 

// Lvl-counter here is representative to the loop-variable that goes from 1 to N 

let LvL_Height = 10;

for (let i = 0; i <= LvL_Height; i++) {


    let Level_Counter = i;

    let styleDOM = document.getElementsByTagName("style")[0];
    let className = "tab" + Level_Counter;

    let Tabulation = "1";

    let tabValue = Level_Counter * Tabulation;

    tabValue += "em";

    let str = "." + className + "{ \n margin-";

    //default == false ;
    // 1 or true to activate arabic view
    let isArabic = 0;
    // the line above serves the purpose of translation transition 

    if (isArabic) {
        str += "right:" + tabValue + ";\n direction:rtl;\n}";
    } else {
        str += "left:" + tabValue + ";\n direction:ltr;\n}";
    }

    styleDOM.innerHTML += str;


    // you need to set a victim ; victime is a dom that would be affected by the tabulation class 

    // let's suppose that : 
    let victime = document.getElementById("vic");
    // the variable victime above might change depending on the context and the program in question 

    victime.className = className;
} // end of for - lvl goes up

// try to insert a const tab class within children of root
// const insertion works perfectly for testing the theory behind this concept
// this concept is materialized in this code
// however further optimization would be better
// for a faster program in terms of performance
// performance will be visible when the database has a lot of data
// and of course with a huge user-base
// these algorithms are highly fast even if the user-base is huge
//that is why, this code should show an example of a medium-high peformance
// current program is very fast
// a highly ultra rapid program would be implemented
// if provided with further time
// and if it is possible to finish a huge chunk of project
// in order to focus on optimization
// however worries are related to the already existing website
//as their said database is very unkempt and has un-used data
// if said database is damaged in a spacely manner
// then the website code is highly imperfect


// turns off bg_of_body
let Background_img_on = 0; //for background image off use 0 or false ; 
if (!Background_img_on) {
    document.body.style.backgroundImage = 'url("")';
    // turns off bg_of_body
    Background_img_on = false;
}

//console.info(  AngularState  ); 
