let row=5
for(let i=1;i<=row;i++){
    for(j=1;j<=row*2 - 1;j++){
        if(j<=row+(i-1)&&j>=row-(i-1)){
            document.write(" *")

        }else{
            document.write("&nbsp&nbsp")
        }
    }
    document.write("<br>")
}

