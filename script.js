var input = document.getElementById('input');
var add = document.getElementById('add');
var list = document.getElementById('list');

add.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = input.value;
    list.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick',function(){
        list.removeChild(paragraph);    
    })
})

alert("Single click to stike off task. Double click to remove task.");
