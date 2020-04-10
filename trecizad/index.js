var form = document.getElementById('addform');

var main = document.getElementById('main');

var add = document.getElementById('add');


form.addEventListener('submit', addItems);

add.addEventListener('click', addItem);



function addItems(e){
    e.preventDefault();
    var number = document.getElementById("text").value;
    
   
    for(let i=0; i<number; i++){

    var newdiv = document.createElement('div');
    newdiv.className = 'item';
    newdiv.appendChild(document.createTextNode(''))
    main.appendChild(newdiv);
    newdiv.addEventListener('click', addtext, {once:true})
    }
    } 


function addItem(e){
    e.preventDefault();
    var newdiv = document.createElement('div');
    newdiv.className = 'item';
    newdiv.appendChild(document.createTextNode(''))
    main.appendChild(newdiv);
}
function addtext(e){
    var item = e.target;
    input = document.createElement('input')
    input.setAttribute("type", "text");
    input.className= 'input'
    item.appendChild(input);
    input.addEventListener('keyup', check)
}

function check(e){
    var inp = e.target;
    var text = e.target.value.toLowerCase();
    var k = text.length
    var secondtext=''

    for ( let i = k-1; i>=0; i--){
       secondtext = secondtext + text.charAt(i)
    }
    if (text.length<1)
    inp.style.backgroundColor ="white"
    else{
     if (secondtext == text ) {
         inp.style.backgroundColor='green'
     }
     else inp.style.backgroundColor = 'red'
     
    }
}