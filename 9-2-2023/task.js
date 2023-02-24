
let depobtn=document.getElementById("depobtn");
let widrobtn=document.getElementById("widrobtn");

let x= document.createElement('p');
let addmoney=0;
let res=document.getElementById('h')
let check=document.getElementById('res')

depobtn.addEventListener("click",()=>{
    let depo=document.getElementById('depo').value
    addmoney+=Number(depo)
    console.log(addmoney+"add click");
    
})
widrobtn.addEventListener("click",()=>{
    let widr=document.getElementById('widr').value
    console.log(widr +"withdro click");  
    addmoney=addmoney - Number(widr)
    console.log(addmoney+"after less");
    
    console.log(addmoney+"last log");
})
check.addEventListener("click",()=>{
    // document.querySelector('h1').remove();
    res.innerHTML=`<h1>${addmoney}</h1>`
//     console.log("hai");
// document.body.innerHTML+=`<h1>${addmoney}</h1>`//not working
   
//    x.innerText=addmoney
//    document.body.append(x)
    // res.innerHTML=addmoney
})

