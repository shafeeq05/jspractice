document.write("1. Add two numbers using Function<br>")
let a=50;
let b=10;
let c=addNumber(a,b)
document.write(c)
document.write("<br>2. subtract two numbers using Function<br>")
let d=subtract(a,b);
document.write(d)
document.write("<br>3. mulitiply two numbers using Function<br>")
let e = mul(a,b)
document.write(e);
document.write("<br>4. divide two numbers using Function<br>")
let f=divi(a,b);
document.write(f)
function addNumber(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function divi(x,y){
    return x/y;
}
document.write("<h1> Array distracting</h1>")

function task(x,y){
 return [x+y,x-y,,x*y]
}
let [sum,sub,div="not divison",muil]=task(50,10)
document.write(sum+"<br>")
document.write(sub+"<br>")
document.write(div+"<br>")
document.write(muil+"<br>")
let arr=[3,6,1,89,5]
let ar=["a","d","h","j"]
let nearr=[...arr,...ar]
console.log(nearr)
let per1={
    name: "shafeeq",
    'last name': "A"
}
let per2={
    place : "tanur",
    age : 25,
    favfood : "rice"
}
let newman={...per2,...per1}
console.log(newman)
function fub(usr){
    console.log(`name is ${usr.name}. last name is ${usr['last name']}`)
}
fub(per1)
function fua({place ,age,favfood ="cacke"}){
    console.log(`palce is ${place}.age is ${age}. favarote food is ${favfood}`);
}
fua(per2)

document.write("<h1> Rest parameter</h1>")
function sha(...arg){
    let numa=0
   arg.forEach((x)=>{
    numa=numa+x
   })
//    console.log(numa)
   return numa
}
let unk = sha(1,2,8,4,3)
document.write("rest parameter result "+unk+"<br>")

// document.write("<br>"+Math.floor(Math.random()*10n))


const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.fullName())

const myArray = Object.values(person);
console.log(myArray[0])
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(typeof obj);

let hudif="myNameIsKhan"
let zz=[...hudif]
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(zz.length);
let val=""
let va=[]
for(let i=zz.length;i>0;i--){
    for(let j=alphabet.length;j>0;j--){
        if(zz[i]==alphabet[j]){
            // console.log(i)
         console.log(" "+ hudif.split("",i))
        }
    }

    // hudif[i].replace(val[i])
    
}

// console.log(va)  