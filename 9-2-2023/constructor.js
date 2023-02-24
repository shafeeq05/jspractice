function myData(...val){
    this.name=val[0];
    this.place=val[1];
    this.age=val[2];
    this.job=val[3];
}
let x=[1,3,5,8,6,4]
let mydet= new myData("shafeeq","tanur",28,"developer")
console.log(mydet)
let {age}=mydet
console.log(age)
let [a,b,...arg]=x
console.log(a+b+arg);
let{...argobj}=mydet
console.log(argobj)
let dom=document.querySelector('div');
// dom.innerHTML="hello world";
// dom.style.display ='felx';
// dom.style.textAlign ='center'
// dom.style.backguroundColor='#FE1233'
// let obj={
//     nam : ()=>{
//         console.log("shafeeq")
//     }
// }
// obj.nam( )

// dom.style.width="100px"
// dom.style.height="100px"
// dom.style.backgroundColor="red"
// let val = 100
// dom.addEventListener("click", ()=>{
//     dom.style.transform=`translate(${val}px)`
//     if(val==300){
//         val=0;
//     }
//     else{
//         val=val+100;
//     }
// })
let f=document.querySelector('#inp1').value;
let sec=document.querySelector('#inp2').value;
let btn=document.querySelector('#btn');
btn.addEventListener("click",()=>{
    let sum =Number (f)+Number (sec);
    dom.innerHTML+=sum
}
)