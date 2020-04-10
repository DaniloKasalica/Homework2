var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
const list = document.getElementById("list");
const ul = document.getElementById('list')
// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event

filter.addEventListener('focus', statrtlist);
filter.addEventListener('focusout',deletestartlist);


filter.addEventListener("keyup", filterItems);
filter.addEventListener("keyup", search);
var k=0;
function search(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  var li = ul.getElementsByTagName('li');
  // Get list items
  var items = itemList.getElementsByTagName("li");
  var br = 0;

 if(e.code=='ArrowDown'){
  if( k>0 && k<=items.length){
    if(k<items.length){
    li[k-1].style.backgroundColor='green'
    li[k++].style.backgroundColor='gray'
    }
    else{
      k++
    }
  }
  
  
  if(  k==0){
    li[k++].style.backgroundColor='gray'
  
  }



  if( k==items.length+1){
    li[k-2].style.backgroundColor='green'

    k=0;
    li[k++].style.backgroundColor='gray'
  }
}
if(e.code=='ArrowUp'){
  if( k>=0 && k<=items.length){
    if(k>1){

    console.log(k)
    li[k-1].style.backgroundColor='green'
    li[k-2].style.backgroundColor='gray'
    k--
    }
    else{
      k--
    }
  }
  
  
  if( k==0){
    li[k].style.backgroundColor='green'

    k=items.length;
    li[k-1].style.backgroundColor='gray'
  }
}
if(e.code=='Enter'){
  for (i=0;i<items.length;i++){
    if(li[i].style.backgroundColor=='gray'){
      filter.value=li[i].textContent
    }
  }
}

  

  // Convert HTMLCollection to an array
  Array.from(items).forEach(function(item) {

    var itemName = item.firstChild.textContent;
    if(itemName.startsWith(text)){
      li[br].textContent=itemName
    }
    if (li[br].textContent.toLowerCase().startsWith(text) ) {
      li[br].style.display='block'

    } else {
      li[br].style.display='none'
    }
    br++;
  });
}

function statrtlist(e)
{
  var items = document.getElementsByClassName('list-group-item');
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    var li = document.createElement('li')
    li.style.textDecorationStyle='none'
    ul.appendChild(li)
    li.appendChild(document.createTextNode(itemName));
    li.addEventListener('click',chose);
    li.style.cursor='pointer'
    
  })
}

function chose(e){
  filter.value=e.target.textContent;
  filterItems()
}
function deletestartlist(){
  setTimeout(() => {
    
  ul.innerHTML=''
  }, 100);
}
function removelist(e){
  li= document.getElementsByTagName('.list-grop li')
  ul.removeChild('li');

}
//
// Add item
function addItem(e) {
  e.preventDefault();
  //Get input value
  var newItem = document.getElementById("item").value;
  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // Create del button element
  var deleteBtn = document.createElement("button");
  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  // Append button to li
  li.appendChild(deleteBtn);
  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert text to lowercase
  var text = filter.value.toLowerCase();
  var li = ul.getElementsByTagName('li');
  // Get list items
  var items = itemList.getElementsByTagName("li");
  var br = 0;
  // Convert HTMLCollection to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text)!=-1 ) {
      item.style.display = "block";

    } else {
      item.style.display = "none";
    }
    br++;
  });
}