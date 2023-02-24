
let i=0;
let j="";
let res=""
let nam=prompt()
let a=nam.split(" ")
for(i=0;i<a.length;i++){
    res=a[i]
    j+=a[i].toUpperCase().charAt(0)+res.slice(1)+" "
}
console.log(j)
let ht=document.getElementById("id")
console.log(ht)
ht.innerHTML=j

