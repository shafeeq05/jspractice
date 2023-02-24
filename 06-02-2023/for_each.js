let arr=[1,2,3,9,4,77,3,22,33];
console.log(typeof arr[1]);
// let big=0
// let a2=[]
// arr.forEach((n,i,arry)=>{
//     // console.log(i,arry)
// if(big<n){
//     big=n
    
// }
// })
// console.log(big)
// document.write(arr.sort(function(a,b){return a-b}))
// console.log(arr.sort(function(a,b){return a-b}));
// let b= arr.find((item)=>{
//     return item=="sha"
// }
// )
function cliked(){
 let x=document.getElementById("demo").value;

let ar=x.trim().split(" ");
ar=ar.map(Number)

let b=ar.reduce((acc,curr)=>{
     console.log(typeof acc)
     return acc+=curr 
},0);

// console.log(b);
document.getElementById("out").innerHTML = b;
}
// for(let i= 0;i<5;i++){
//      for(let j=9;)
// }
