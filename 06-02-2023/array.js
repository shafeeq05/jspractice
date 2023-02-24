document.write("MAP method example <br> ")
let a =[1,8,4,7,2,6,9,3]
let b ="aaasdfghjkAAA"
console.log(b.match(/a/gi))
a.map(function (x){
    // console.log(x>3)
    if(x%3==0){
        console.log(x)
        document.write(x+" ")
    }
})
document.write("<br> ")
for (let i=1;i<4;i++){
    for(let j=1;j<4;j++){
        if(i==j  ||i==1&&j==2||j==3&&i==1||i==2&&j==3)
        document.write(" *")
        else {
            document.write(" &nbsp")
        }
    }
   
    document.write("<br>")
}
document.write("<br> Filter method<br>")

let res=a.filter((x)=>{
    return x>3
})
console.log(res)
document.write(res+"<br>")
document.write("Reduce methode <br>")
let exe=a.reduce((acc,curr)=>{
    return  acc+=curr

},0   //accumulator initial value
)
console.log(exe+" reduce");
document.write(exe+"<br>")

let exam=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
    
    {
		color: "red",
		value: "#f00"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "blue",
		value: "#000"
	}
]
console.log(exam)
let out=exam.map((x)=>{
    return x.color+" "+x.value+"<br>"})
console.log(out.toString())
document.write(out.toString().replaceAll(","," "))
document.write("<br>")

let fil=exam.reduce((acc,curr)=>{
    if(acc[curr.color]){
        
       return acc[curr.color]= ++acc[curr.color]
        
    }
    else{
       return acc[curr.color]=1
       
    }
    
},{}
)
console.log(fil+" reduce")

let filt=exam.filter((x)=>x.color=="red")
document.write(filt)
console.log(filt);

let nam=[  
	{"name":"Ram", "email":"Ram@gmail.com", "age": 23},  
	{"name":"Bob", "email":"bob32@gmail.com", "age": 31},
	{"name":"Ramd", "email":"Rama@gmail.com", "age": 23},  
	{"name":"Boba", "email":"boeb32@gmail.com", "age": 31}, 
	{"name":"Ramkl", "email":"Rawm@gmail.com", "age": 56},  
	{"name":"Bobg", "email":"boob32@gmail.com", "age": 67} 
]  
let pu=nam.filter((x)=> x.age < 30).map((x)=> x.name)
.reduce((x,y)=>{if(x[y]){
	return x
}},0)

document.write("<br>"+pu)
console.log(pu)