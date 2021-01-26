var a=document.getElementById("txt")


function fnc(btn){
    if(a.value.length>=10){
        return
    }
    var symbols="/*-+"
    var ch=btn.innerText
    if(symbols.includes(ch)){
        
        if(symbols.includes(a.value[a.value.length-1])){
            a.value=a.value.slice(0,a.value.length-1)+ch
            return
        } 
        else if(a.value.length==0){
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
    a.value=""
}
function rmvLast(){
    a.value=a.value.slice(0,a.value.length-1)
}
function rslt(){
    a.value=eval(a.value)
}