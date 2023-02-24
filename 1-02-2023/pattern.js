document.write("Queston number 1 <br>")
for(let i=0;i<5;i++){
    for(let j=0;j<i;j++){
        document.write("* ")
    }
    document.write("<br>")
}
document.write("<br>Question number 2 <br>")
for(let a=5;a>0;a--){
    for(let b=0;b<a;b++){
        document.write("* ")
    }
    document.write("<br>")
}
document.write("<br>Question number 3 <br>")
for(let c=5;c>0;c--){
    for(let d=5;d>c;d--){
        document.write("&nbsp ")
    }
    for(let e=0;e<c;e++){
        document.write(" *")
    }
    document.write("<br>")
}
document.write("<br>Question number 4 <br>")
for(let f=5;f>0;f--){
    for(let g=f;g>0;g--){
        document.write("&nbsp")
    }
    for(let h=5;h>=f;h--){
        document.write(" *")
    }
document.write("<br>")
}
document.write("<br>Question number 5 <br>")
// let k;
for(let k=5;k>0;k--){
    for(let l=6;l>k;l--){
        // document.write(" *")
        if(k==3&&l==5||k==2&&l==5||k==2&&l==4){
            document.write("&nbsp &nbsp")
        }
        else{
            document.write(" *")
        }
    }
    document.write("<br>")
}
document.write("<br>Question number 6 <br>")
for(let m=0;m<5;m++){
    for(let n=5;n>m;n--){
        // document.write(" *")
        if(m==1&&n==4||m==1&&n==3||m==2&&n==4){
            document.write("&nbsp &nbsp")

        }
        else{
            document.write("* ")

        }

    }
document.write("<br>")
}

document.write("<br>Question number 7 <br>")
for(let o=5;o>0;o--){
    for(let p=5;p>o;p--){
        document.write("&nbsp&nbsp")

    }
    for(let q=o;q>0;q--){
        // document.write(" *")
        if(o==4&&q==3||o==4&&q==2||o==3&&q==2){
            document.write("&nbsp&nbsp")
        }else{
        document.write(" *")
    }
    }

document.write("<br>")
}
document.write("<br>Question number 8 <br>")
for(let r=5;r>0;r--){
    for(let s=0;s<r+4;s++){
        // document.write(" *")
        if(r==4&&s==7||r==5&&s==s||r==4&&s==1||r==3&&s==2||r==3&&s==6||r==2&&s==3||r==2&&s==5||r==1&&s==4){
            document.write(" *")
        }
        else{
            document.write("&nbsp &nbsp")
        }
    }
    
    document.write("<br>")
}
document.write("<br>Question number 9 <br>")
for(let t=1;t<=5;t++){
    for(let u=1;u<=t;u++){
        document.write(" "+t)
    }
document.write("<br>")
}
document.write("<br>Question number 10 <br>")
for(let v=65;v<70;v++){
    // document.write(String.fromCharCode(v) 65 to 90)
    for(let w=65;w<=v;w++){
        document.write(String.fromCharCode(w))
    }
    document.write("<br>")
}
document.write("<br>Question number 11 <br>")
for(let x=1;x<7;x++){
for(let y=1;y<x;y++){
    document.write(" "+y)
}
document.write("<br>")
}
document.write("<br>Question number 12 <br>")
for(let z=65;z<70;z++){
for(let aa=65;aa<=z;aa++){
    document.write(" "+String.fromCharCode(aa))
}

document.write("<br>")
}
for(let bb=69;bb>65;bb--){
    for(let cc=65;cc<bb;cc++){
        document.write(" "+String.fromCharCode(cc))
    }
    document.write("<br>")
}
document.write("<br>Question number 13 <br>")
let num=0
    for(let dd=1;dd<6;dd++){
        for(let ee=1;dd>ee;ee++){
            num=num+1
            document.write(num)
        }
        document.write("<br>")
    }
document.write("<br>Question number 14 <br>")
for(let ff=5;ff>0;ff--){
    for(let gg=1;gg<=ff;gg++){
        document.write(" "+gg)
    }
    document.write("<br>")
}
document.write("<br>Question number 15 <br>")
let inc=0
for(let hh=5;hh>0;hh--){
    for(let ii=hh;ii>0;ii--){
        document.write("&nbsp")
    }
    for(let jj=5;jj>hh;jj--){
        inc = inc+1
        document.write(" "+inc)
    }

    document.write("<br>")
}

