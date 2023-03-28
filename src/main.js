// let username:string="Akash Bharati";
// console.log(username);
// let Anumber:number=2;
// let Bstring:number =2;
// let cAnumber:number=2;
// console.log(Anumber/Bstring);
// console.log(Anumber*Bstring);
////////////////////////////////////////////////
//declare variables with typelet 
var myname = "hbjhuh";
// dont alow another type of data heare myname=0
myname = "abijeet";
var aBolloean = false;
var bAnytype = "df";
//make union type of type script
var MultipleTypeAccessedBy = "";
MultipleTypeAccessedBy = 900;
MultipleTypeAccessedBy = "sdsd";
console.log(MultipleTypeAccessedBy);
var operation = function (a, b) {
    return a + b;
};
//we no exact which data type api return values so we can used union data type 
//uniontype where we can mention more thn two data type 
var postId;
var isActive;
//if you used reguler exprestion then have Regexpresstion type 
var re = /\w+/g;
///////////array////////////////////////////////
var sdsdfdf = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
var MixArray = ['f', 'g', 'h', 4];
var unionarray = ['a', 'b', 'c', 'd', 'e', 3, true];
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
var myTupels = [1221, "dsff", true];
var dat = ["sds", true, 343];
//dont allow to assing Type '(string | number | boolean)[]' is not assignable to type '[number, string, boolean]'.
myTupels = dat;
//allow to union of array  (string | number | boolean)[]
dat = myTupels;
//object with
var dataTpeObject;
//let array also object type so we can easly add object in array
dataTpeObject = []; //allow to store empty array
console.log(typeof dataTpeObject);
//we can assing array also
dataTpeObject = MultipleTypeAccessedBy;
//we assingn empty object also object
dataTpeObject = {};
//lets create object
var exampleobject = {
    prop1: "sdsd",
    prop2: true
};
//we can assing object another values but not different values dattype we assing
exampleobject.prop1 = "efd";
exampleobject.prop2 = true;
