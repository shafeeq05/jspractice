// let p=document.createElement('h5')
let ular=[];
let ul=document.querySelector('ul').innerText
// console.log(ul);
for(let i=0;i<ul.length;i++){
    ular+=ul[i]
}
console.log(ular[1]);
let res=document.getElementById('di')
let arr=["abc","def","ghi","abcde"]
let list=document.getElementById('list')
document.querySelector('input').addEventListener('keydown',(w)=>{
    list.innerHTML=w
    // console.log(w.key)
    
    // console.log(arr[0])
    for(let i=0;i<arr.length;i++){
        // console.log(arr[i][i+1])
        for(let j=0;j<arr[i].length;j++){
            // console.log(arr[i][j]);
            if(arr[i][j].includes(w.key)){
                console.log(arr[i]);
                res.innerHTML+=`<h5>${arr[i]}</h5>`
                   
            }
        }
    }
    // arr.forEach((x)=>{
    //     console.log(x)
    //    if(x.matchAll(w.key)){
    //     console.log(x);
    
        
    //    }
    // })
})

