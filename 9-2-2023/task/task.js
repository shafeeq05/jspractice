
let depobtn=document.getElementById("depobtn");
let widrobtn=document.getElementById("widrobtn");
let depo=document.getElementById('depo').value
let widr=document.getElementById('widr').value
let addmoney=0;
let res=document.getElementById('h')

depobtn.addEventListener("click",()=>{
    addmoney+=Number(depo)
    console.log(addmoney);
    
})
widrobtn.addEventListener("click",()=>{
    console.log(addmoney);
    addmoney=addmoney - Number(widr)
    console.log(addmoney);
    res.innerHTML+=addmoney
})
