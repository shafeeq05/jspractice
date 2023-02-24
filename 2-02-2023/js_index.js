document.write("1.sort number  ascending order <br>")
let num=[1,8,4,3,5];
document.write("the numbers is"+num+"<br>")

let res=[];
for(let i=0;i<num.length;i++)
{
    for(let j=i+1;j<num.length;j++)
    {
        if(num[i]>num[j])
        {
           temp=num[i]
        //    console.log(temp+"f")
           num[i]=num[j]
        //    console.log(num[i]+"s")
           num[j]=temp
        //    console.log(num[j]+"t")
           
        }
           
    }
    res+=num[i]
    
   
}
// console.log(res) 
document.write(res+"<br>")
document.write("<br>2. Remove all occurence in an array<br>")
let inarr=[1,2,1,3,1]

for(let i=0;i<inarr.length;i++){
   if(inarr[i]!=1){
      document.write(","+inarr[i])
   }
      
}

document.write("<br>3. find the largest number of an array <br>")
let n1=[1,4,7,3,6]

let arr1=[]
document.write(n1+"<br>")
for(let i=0;i<n1.length;i++){
   for(let j=i+1;j<n1.length;j++){
      if(n1[i]>n1[j]){
         let temp=n1[i]
         n1[i]=n1[j]
         n1[j]=temp
      }
      
     
   }if(n1[i]<n1[i+1]){
      }
else{
   arr1+=n1[i]
}

}
document.write("largest element is "+arr1+"<br>")
document.write("<br>4. find the smallest number of an array <br>")
let n2=[1,4,7,3,6]
let no=n2.length
let arr2=[]
document.write(n2+"<br>")
for(let i=0;i<n2.length;i++){
   for(let j=i+1;j<n2.length;j++){
      if(n2[i]>n2[j]){
         let temp=n2[i]
         n2[i]=n2[j]
         n2[j]=temp
      }
   
   }
   arr2+=n2[i]

}
document.write("smallest element is "+arr2[no-no]+"<br>")
document.write("<br>5. sort element in decending order <br>")
let n3=[1,8,4,3,5]
document.write(n3+"<br>")
let arr3=[]
for(let i=0;i<n3.length;i++){
   for(let j=i+1;j<n3.length;j++){
      if(n3[i]<n3[j]){
         let temp=n3[i]
         n3[i]=n3[j]
         n3[j]=temp
      }
   }
   // console.log(n3[i])
      arr3+=n3[i]
}
document.write(arr3+"<br>")
document.write("<br>6. print the all prime numbers ")
let n4=[2,8,4,3,5,7,25]
document.write(n4+"<br>")
let arr4=[]
for(let i=0;i<n4.length;i++){
   if(n4[i]==2||n4[i]==3||n4[i]==5||n4[i]==7){
      arr4+=n4[i]
   }
      else if(n4[i]%2!=0&&n4[i]%3!=0 && n4[i]%5!=0){
         arr4+=n4[i]
      
   }
   }
   document.write(arr4+"<br>")
   document.write("<br>7. reverse a string")
   let str="hello"
   let re=[]
   document.write(str+"<br>")
   for(let i=str.length-1;i>=0;i--){
      document.write(str[i])
   }
   document.write("<br>")
   document.write("<br>8.is a string palindrome or not<br>")
   let str1="madam"
   let strout=[]
   for(let i=str1.length-1;i>=0;i--){
      strout+=str1[i]
   }
   if(str1==strout){
      document.write(strout+" is palindrome<br>")
   }
   else
   document.write(strout+" is not palindrome<br>")

   

