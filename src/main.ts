// let username:string="Akash Bharati";
// console.log(username);
// let Anumber:number=2;
// let Bstring:number =2;
// let cAnumber:number=2;

// console.log(Anumber/Bstring);
// console.log(Anumber*Bstring);

////////////////////////////////////////////////
//declare variables with typelet 
let myname:string="hbjhuh";
// dont alow another type of data heare myname=0
myname="abijeet";

let aBolloean:boolean = false;
let bAnytype:any="df";
//make union type of type script
let MultipleTypeAccessedBy:string|number|boolean|any=""

MultipleTypeAccessedBy=900;
MultipleTypeAccessedBy="sdsd";
console.log(MultipleTypeAccessedBy)

const operation=(a:number,b:number)=>{
    return a+b
}

//we no exact which data type api return values so we can used union data type 
//uniontype where we can mention more thn two data type 
let postId:string|number
let isActive:number|boolean

//if you used reguler exprestion then have Regexpresstion type 
let re:RegExp=/\w+/g

///////////array////////////////////////////////
let sdsdfdf:string[]=["A","B","C","D","E","F","G","H","I"]


let MixArray:(string|number)[]=['f','g','h',4];

let unionarray:(string|number|boolean)[]=['a','b','c','d','e',3,true];
//passing different values in array
//say number not assing to string vaariable 
sdsdfdf.push(99);
// posible because we made that are union type have all mixed type of data
MixArray.push(99);
// posible because we made that are union type have all mixed type of data
unionarray.push(true);
//unshift used for inser data in first position
unionarray.unshift("sadkdks");
//suppose we want to store data as specific position as specific datatype then use tuble where you canmention array hve multiple data types
//moere strict mode 
let myTupels:[number,string,boolean]=[1221,"dsff",true];

let dat=["sds",true,343];
//dont allow to assing Type '(string | number | boolean)[]' is not assignable to type '[number, string, boolean]'.
myTupels=dat
//allow to union of array  (string | number | boolean)[]
dat=myTupels

//object with
let dataTpeObject:object;
//let array also object type so we can easly add object in array
dataTpeObject=[];//allow to store empty array
console.log(typeof dataTpeObject)
//we can assing array also
dataTpeObject=MultipleTypeAccessedBy
//we assingn empty object also object
dataTpeObject={};


//lets create object
const exampleobject={
    prop1:"sdsd",
    prop2:true
}
//we can assing object another values but not different values dattype we assing
exampleobject.prop1="efd";
exampleobject.prop2=true;










