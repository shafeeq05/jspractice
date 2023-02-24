document.write("1. the number is odd or even <br>")
let a=11
if(a%2==0){
    document.write("the number is even "+a);
}
else
document.write("the number is odd"+a+"<br>")
document.write("<br> 2.the largest number from two <br>")
let b=18;
if(a>b){
    document.write("the largest number is "+b+"<br>")
}
else 
document.write("the largest number is "+b+"<br>")

document.write("<br> 3. the number is +ve , -ve or 0")
if(a<0){
    document.write("<br> the given number is negative <br>"+a)
    }else if(a=0){
        document.write("<br> the given number is zero <br>"+a)
    }
    else 
    document.write("<br> the given number is positive <br>"+a)


document.write("<br> 4. largest number from three<br>")
let c=100
if(a>b&&a>c){
    document.write("biggest number is = "+a)
}else if(b>c){
    document.write("the biggest number is = "+b)
}
else
document.write("the biggest number is = "+c)
document.write("<br>5. the year leep or not")
let d=2005  
if(d%4==0){
    document.write("<br>"+d+" is leap year   <br>")
}
else
document.write("<br>"+d+ "is not leapyear  <br>")

document.write("<br>6 find the grade  <br>")
let e=50;
if (e>=90&&e<=100){
    document.write("<br> S <br>")
}if (e>=80&&e<90){
    document.write("<br> A <br>")
}if (e>=70&&e<80){
    document.write("<br> C <br>")
}if (e>=60&&e<70){
    document.write("<br> C <br>")
}if (e>=50&&e<60){
    document.write("<br> D <br>")
}
if (e>=40&&e<50){
    document.write("<br> E <br>")
}
if (e>=0&&e<40){
    document.write("<br> in valid mark <br>")
}

document.write("<br>7. check the the number prime or not  <br>")
let g=191;
if(g==2||g==3||g==5||g==7){
    document.write("<br>"+g+" is prime number  <br>")
}
else if (g%2!=0&&g%3!=0 && g%5!=0){
    
    document.write("<br>"+g+" is prime number  <br>")
    }
    else{
    document.write("<br>"+g+" is not a prime number  <br>")
}

// let pro = prompt("enter the password");
// let pass="sha";
// let i="";
// for(i=pro;i!=pass;){
//      pro = prompt("enter the password");
//      i=pro;
// }
document.write("const testing")
console.log(i)

for(let i=0; i<5; i++){
const con = i;
}
document.write(i);