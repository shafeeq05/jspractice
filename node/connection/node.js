const ffss=require('node:fs/promises')
// ffss.rmdir('./hai').then(()=>{
//     console.log("created");
// }).catch(()=>{
//     console.log("error");
// })
ffss.writeFile('./sha1.txt',"haai").then(()=>{
    console.log("sucsess");
})