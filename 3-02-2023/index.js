document.write("<br> Map function")

let arr = [2,5,1,8,6,4,8,1]
let out=arr.map((x)=>{
return x*2
})
document.write("<br> result "+out+"<br>")

console.log(out)
document.write("<br> Filter function")
let out1=arr.filter((x)=>{
    return x<4
})
document.write("<br Result "+out1+"<br>")
console.log(out1)

document.write("<br> Reduce function")
let out2=arr.reduce((accum,currentarry)=>{
   return accum+=currentarry
},0)
console.log(out2)
let nam="shaFeeq appada asd nef"
let plc="tanur "
document.write("<br>"+nam.substr(4,6)+" Substr")
console.log(nam.search("e"))
console.log(nam.toUpperCase())
console.log(nam.toLowerCase())
console.log("slice "+nam.slice(2))
console.log(nam.length)
console.log(nam.substring(0,7)+" substring")
// console.log(nam.substr())
console.log(nam.replace("shaFeeq","sha"))//case sensitive
console.log(nam.replace(/shafeeq/i,"sha"))//case insentive by using regular expression
document.write("<br> no regular"+nam.replaceAll("a","W")+"<br>")
document.write("regular"+nam.replaceAll(/A/ig,"W"))
console.log(nam.concat(" ",plc))
console.log(nam.length + nam.trim()+" "+plc.length)
console.log(nam.trim())
document.write("<br>"+ nam.split("")+"<br>") 

// let ar=nam.charAt(8).toUpperCase()+nam.slice(9)
console.log(nam.charAt(15).toUpperCase()+nam.slice(16)+" arrry")
// console.log(nam.charAt(10))
console.log(nam.charAt(8).toUpperCase()+nam.slice(9)+" arrry")
let ne=nam.split("")
console.log(ne)
let j=0
let res=""
let resu=""
let i=0
// for(let i=0;i<nam.length;i++){
   do{    
    
        console.log(j+" jvalue")

    res=nam.charAt(j).toUpperCase()+nam.slice(j+1)
    if(nam[i]==" "){
    j=i+1
    resu+=res.substring(j-j,j)
    // console.log(i+" jvalue")
    
    console.log(res+" if")
   }
    // console.log(nam.charAt(j+1).toUpperCase()+nam.slice(j+2))
    i++
    }
    while(i<nam.length)
    
    // console.log(resu)
    
    // resu=resu+res
    
// }
console.log(resu)
// console.log(res)











