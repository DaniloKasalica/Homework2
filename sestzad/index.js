
var mult = document.getElementById('mult');
var minus = document.getElementById('minus');
var plus = document.getElementById('plus');
var comma = document.getElementById('comma');
var eq = document.getElementById('equally');
var nul = document.getElementById('null');
var clear =document.getElementById('AC');
var divide=document.getElementById('divide')

var btn=document.getElementById('btn')
var numbr = document.getElementsByClassName('num')
var opbr = document.getElementsByClassName('op')

var displaytext = document.getElementById('result');
var result='0'
var secondval='';
var arr = [];
var br=0;
var clearcol='white'
var eqstyle='orange'
for(let i=0;i<numbr.length;i++){
    numbr[i].addEventListener('click', addnum)

}
for(let i=0;i<opbr.length;i++){
    opbr[i].addEventListener('click', addop)
}


comma.addEventListener('click',() => {
    if(!result.includes('.'))
    result+='.'
    displaytext.innerHTML=result;
})

function addop(e){
    var y=e.target.textContent;
    if(result!=0){
        arr[br++]=result;
        arr[br++]=y;
        secondval+=result+y;
        result = '0'
        displaytext.innerHTML=result;
        btn.innerHTML=secondval;
        }
}
function addnum(e){
    if(eqstyle=='orange'){
   var numval = e.target.textContent;
   if(result ==='0')
   result =''
   result +=numval;

   displaytext.innerHTML=result;
}}
eq.addEventListener('click', ()=>{
    if(eqstyle!='black'){
    arr[br]=result;
    secondval+=result;
    btn.innerHTML=secondval;
    var res=parseInt(arr[0]);
    

    for(let i=2;i<=br;i=i+2){
        if(arr[i-1]==='+')
        res = res + parseInt(arr[i])
    
    else if (arr[i-1]==='-'){

        res = res - parseInt(arr[i]);
    }
   else if (arr[i-1]==='*'){

        res = res * parseInt(arr[i]);
    }
   else if (arr[i-1]==='/'){

        res = res / parseInt(arr[i]);
    }
}
displaytext.innerHTML=res;

eq.style.backgroundColor='black'
eqstyle='black';
clearcol='red'
clear.style.backgroundColor='rgb(238, 151, 151)'
}
})

clear.addEventListener('click',function clearfix() {
    
    secondval='';
    br=0;
    arr = [];
    result='0';
    displaytext.innerHTML=result;
    btn.innerHTML=secondval;
    eqstyle='orange';
    eq.style.backgroundColor='rgba(243, 182, 69, 0.89)'
    clear.style.backgroundColor='rgb(235, 225, 207)'
   
    })