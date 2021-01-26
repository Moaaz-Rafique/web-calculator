var a=document.getElementById("txt")
var symbols="/*-+"

function fnc(btn){
    a.style.backgroundColor="rgb(162, 182, 122)"
    if(a.value.length>=10){
        a.style.backgroundColor="rgb(190, 100, 80)"
        
        return
    }
    var ch=btn.innerText
    if(symbols.includes(ch)){
        
        if(symbols.includes(a.value[a.value.length-1])){
            a.value=a.value.slice(0,a.value.length-1)+ch
            return
        } 
        else if(a.value.length==0){
            a.style.backgroundColor="rgb(190, 100, 80)"
            return
        }
        else{
            a.value+=ch
        }
    }
    else{
        a.value+=ch
    }
}
function clrTxt(){
    a.style.backgroundColor="rgb(162, 182, 122)"
    a.value=""
}
function rmvLast(){
    a.style.backgroundColor="rgb(162, 182, 122)"
    a.value=a.value.slice(0,a.value.length-1)
}
function rslt(){
    a.style.backgroundColor="rgb(162, 182, 122)"
    if(symbols.includes(a.value[a.value.length-1])){
        a.value=eval(a.value.slice(0,a.value.length-1))
    }
    else
        a.value=eval(a.value)

}
