var cont = document.getElementById('container')
var previous = document.getElementById('previous')
var next = document.getElementById('next');
var img = document.getElementsByTagName('img')


var counter = 1;
var size = img[0].clientWidth;




next.addEventListener('click', changenext);

previous.addEventListener('click', changeprevious);
function changenext(e){
    if(counter >=img.length-1) return;
cont.style.transition = 'transform 0.4s ease-in-out'
counter++;
cont.style.transform= 'translateX(' + (-size * counter) + 'px)';


console.log(size)
console.log((-size * counter))
}
function changeprevious(e){
    if(counter <=0) return;
cont.style.transition = 'transform 0.4s ease-in-out'
counter--
cont.style.transform= 'translateX(' + (-size * counter) + 'px)';

console.log(counter)
}
