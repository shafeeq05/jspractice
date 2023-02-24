document.write("1. print all even numbers of given array")
let arr=[2,7,4,3,5,8]
document.write(" ["+arr+"]<br>")
let a=arr.map((x)=>{
    // document.write(x)
    if(x%2==0){
        document.write(x+" ")
    }
})
document.write("<br>")

document.write("<br> 2.  Write a program to print the following Number Pyramid pattern.<br>")
let con=1
for(let i=0;i<10;i=i+2){
    for(let s=1;s<=(2*i)-1;s++){
        // document.write("&nbsp ")
        // if(s==i||s==5&&i==3||s==2&&i==2){
        //     document.write(" *")
        // }
        // else{
        //     document.write("&nbsp")
        // }
          
    }
    // for(let j=0;j<i;j++){
    //     console.log(i)
    //     document.write("&nbsp"+con)
    //     con+=1
    // }
    con=1
    document.write("<br>")
}
document.write(`<br>3. Write a JavaScript program to convert a string into camel case.
Input:- “my name is khan”
Output:- “myNameIsKhan”<br>`)
let st="my name is khan"
let sp=st.split(" ")
console.log(sp)
let str2=""
let str3=""
let sa=""

for(let i=0;i<sp.length;i++){
    
    if(i!=0){
        // console.log(sp[i])
    str2=sp[i].toString().charAt(0).toUpperCase()+sp[i].slice(1)
    sa=sa+str2+" "
    }
    else{
       str3=sp[i]+" "
    }
    console.log(sa)
}
console.log(str3+str2)
document.write(str3+sa)

document.write("<br> 4. Write a program to print the following star pattern<br>")
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        if(i==4||j==0||i==j){
        document.write(" *")
        }
        else{
            document.write(" &nbsp") 
        }
    }
    document.write(" <br>")

}

