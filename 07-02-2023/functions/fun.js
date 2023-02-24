document.write("<h1>Functions in js<br><h3>1. User defined  function</h1>")
function addNum(){
    let a=10;
    let b=4;
    c=a+b;
    document.write(c+"<br>")
}
addNum();
let x=3;
let y=5;
function addN(a,b){
    let l=a+b
    return l
}
h = addN(x,y)
document.write(h)
document.write("<br><h3>2. Anonymous  function</h3>")

let d=function (a,b){
   let f= a+b
   document.write(f);  
}
// console.log(d(90,10)) retun is contain
d(10,100) // ther is no return value just dfunction calling
setTimeout(function(){
    console.log("hello")
},3000)
console.log("set time out function \n   ")
document.write("<br><h3>3. Recursive</h3>")
function incriment(a){
    if(a>10){
        document.write("program ended")
        return;
    }
    document.write(a+"<br>");
    incriment(a=a+1)
}
incriment(1);

function rec(n){
    if(n<=1){
        return
    }
    rec(n-1);
    document.write("<br>first call "+n);
    rec(n-1)
}
console.log(rec(2))
document.write("<br><h3>4. Callback functions</h3> <br> <li>synchronus </li>")
let aq=[1,2,3,4,5,6,7,8]
aq.forEach((n)=>{
    document.write(n);//synchronus callback
})
document.write("<br> <li>asynchronus </li>")
document.write("start <br>")
document.getElementById("btn")
    function asyn(arg){
    console.log(arg+" hallooooo")//asynchronus callback
}
document.write("end <br>")
document.write("<br><h3>4. Math Object</h3> ")
let a=9;
document.write("sqrt of 9 = "+Math.sqrt(a)+"<br>")
let b=-33
document.write("<br> absolute value of num "+Math.abs(b)+"<br>")
document.write(Math.min(3,5,8,2,1)+"<br>")
document.write(Math.cos(0)+"<br>")
document.write(Math.sin(45)+"<br>")
document.write(Math.pow(3,3)+"<br>")
document.write(Math.max (3,5,8,2,1)+"<br>")

for(i=0;i<100;i++){
    if(i==2||i==3||i==5||i==7){
        document.write("<br>"+i+" is prime number  <br>")
    }
    if (i%2!=0&&i%3!=0 && i%5!=0&&i%7!=0){
        
        console.log(i+" is prime number ")
        }
        else{
        // console.log("<br>"+i+" is not a prime number  <br>")
    }
    
}


