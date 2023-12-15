document.body.style.backgroundColor = "blue";

document.getElementById('btn').style.color = "red";

// asign it to varaibles

const btn = document.getElementById('btn');

// selecting single elements

const btn1 = document.querySelector('btn');
btn1.nodeName;

console.dir(document);

//

document.getElementsByTagName("tagName")

// example

const headings = document.getElementsByTagName("h2")

headings[0].style.color = "red";
headings.length;

//

const items = document.getElementsByTagName("li");

items[2].style.color = "red";

const bestItems = [...items];

bestItems.forEach((item) => {
    console.log(item);
})

//

const listItems = document.getElementsByClassName('className');

console.log(listItems);

listItems[1].style.color = "red";

//

const result = document.querySelector('#id');

result.style.backgroundColor = "blue";

//

const result1 = document.querySelector('.className');

result1.style.color = 'red';

//

const lastItem = document.querySelector('li:last-child');

//

const list = document.querySelectorAll('.className');
console.log(list) // node list

list.forEach(item =>{
    console.log(item);
    item.style.color = 'yellow';
})

//


const result2 = document.querySelector('#id');
const allChildren = result2.chidNodes;
console.log(allChildren);


const children = result2.children;
console.log(children);

console.log(result2.firstChild);
console.log(result2.lastChild);

//

const heading = document.querySelector('h2');
console.log(heading.parentElement);
console.log(heading.parentElement.parentElement);
console.log(heading.parentElement.parentElement.parentElement);

//

const heading2 = document.querySelector('h2');
const parent = heading2.parentElement;
parent.style.color = 'red';

//

const first = document.querySelector('.class');
const second = document.nextSibling.nextSibling.style.color = "red";

//

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);

//

const first3 = document.querySelector('.class');
first3.nextElementSibling.style.color = 'red';

//

const first3 = document.querySelector('.class');
first3.previousElementSibling.style.color = 'red';

//

const item1 = document.getElementById('id');

const nodeValue = item1.childNodes[0].nodeValue
console.log(nodeValue);

const nodeValue1 = item1.firstChild.nodeValue
console.log(nodeValue1);

//

const item2 = document.getElementById('id');
const textContent = item2.textContent;
console.log(textContent);

//

const first2 = document.querySelector('.first');
const first2Class = first2.getAttribute('class');
console.log(first2Class);

//

const link = document.getElementById('link');
const linkValue = link.getAttribute('href');
console.log(linkValue);

//

const link2 = document.getElementById('link');
const last3 = link2.nextElementSibling;
last3.setAttribute('class', 'classValue');
last3.textContent = ' changed text content value';
console.log(last3);

//

// 8.13

const first4 = document.getElementById('first')

const classNameValue = first4.className;
console.log(classNameValue); // returns class value

//

const second3 = document.getElementById('first')

second3.className = 'colors';  // adding class names
second3.className = 'colors text';  // adding more class names

//

const third3 = document.getElementById('first');

third3.classList.add('text');       // adding class names another process

//

const third3Classlist = third3.classList;
console.log(third3Classlist);

//

const third4 = document.getElementById('first');

third4.classList.add('text');      
third4.classList.add('colors');         // can be added more classes
third4.classList.add('colors', 'text');         // can be added more classes

//

const fourth = document.getElementById('first');

fourth.classList.remove('colors');

//

const fifth = document.getElementById('first');

const fifthValue = fifth.classList.contains('colors')
console.log(fifthValue)             //          returns true or false

if(fifthValue){
    console.log('hello world')
}else {
    console.log('no class')
}

//

const result3 = document.querySelector("#bodytag");

const bodyDiv = document.createElement('div');

const textNodeValue = document.createTextNode('body div created');

bodyDiv.appendChild(textNodeValue);

document.body.appendChild(bodyDiv);

//

const result4 = document.querySelector("#bodytag");

const headingH1 = document.createElement('h1');
const headingText = document.createTextNode('this is heading text');
headingH1.appendChild(headingText);
headingH1.classList.add('blue');
result4.appendChild(headingH1);


console.log(result4.children)       // returns elements

//

const result5 = document.querySelector("#mainTag");

const headingH2 = document.createElement('h2');
const heading2Text = document.createTextNode('this is heading-2 text');
headingH2.appendChild(heading2Text);
document.body.insertBefore(heading2, bodyDiv);

//

document.body.replaceChild(newElement, oldElement);

//

const headingH3 = document.createElement('h3');
headingH3.innerText = `it is a dynamic heading`

document.body.prepend(heading);

//

const result6 = document.querySelector('#result');

result6.remove();       // remove the element

//

const result7 = document.querySelector('#result');

const heading4 = result7.querySelector('h4');

result7.removeChild(heading4);

//

const ul = document.createElement('ul');
ul.innerHTML = `<li class="first">list item</li>
                <li>list item</li>`;
    
document.body.appendChild(ul);

//

const btn2 = document.querySelector('.btn');

btn2.addEventListener('click',function(){
    console.log('you can click here')
});

//

const btn3 = document.querySelector('.btn');
const heading5 = document.querySelector('h2');

btn3.addEventListener('click',function(){
    heading5.classList.add('red');
});

//

const btn4 = document.querySelector('.btn');
const heading6 = document.querySelector('h2');

function changeColor (){
    heading5.classList.add('red');
}

btn4.addEventListener('click', changeColor);

//

const btn7 = document.querySelector('.btn');
const heading7 = document.querySelector('h2');

function changeColor (){
    const hasClass = heading7.classList.contains('red');
    
    if(hasClass){
        heading.classList.remove('red')
    }else {
        heading.classList.add('red');
    }
}

btn7.addEventListener('click', changeColor);

//

const btn8 = document.querySelector('.btn');
const heading8 = document.querySelector('h2');


btn8.addEventListener('mousedown', function(){
    console.log('down')
});

btn8.addEventListener('mouseup', function(){
    console.log('up')
});

btn8.addEventListener('mouseenter', function(){
    heading8.classList.add('red');
});

btn8.addEventListener('mouseleave', function(){
    heading8.classList.remove('red');
});


//

const inputName = document.getElementById('#inputId');

inputName.addEventListener('keypress', function(){
    console.log('hello world')
});

inputName.addEventListener('keydown', function(){
    console.log('hello world')
});

inputName.addEventListener('keyup', function(){
    console.dir(inputName)
    console.log(inputName.value)
});

//

const btn9 = document.querySelector('.btn');
const heading9 = document.querySelector('h2');

heading9.addEventListener('click', function(event){
    console.log(event.currentTarget);
    
})

heading9.addEventListener('click', function(event){
    
    event.currentTarget.classList.add('blue');
    console.log(event.type);
});

//

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        // console.log(e.currentTarget);
        e.currentTarget.style.color = 'blue';
    })
})

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        // console.log(e.target);
        // console.log(e.currentTarget);
        e.target.style.color = 'blue';
    })
})

//

const form = document.getElementById("formId");
const nameInput = document.getElementById("nameInputId");
const passwordInput = document.getElementById("passwordInputId");


form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('form submitted')
});

//

const form1 = document.getElementById("formId");
const nameInput1 = document.getElementById("nameInputId");
const passwordInput1 = document.getElementById("passwordInputId");


form1.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('form submitted');
    console.log(nameInput1.value);
    console.log(passwordInput1.value);
});

//

localStorage.setItem('name', 'john');
sessionStorage.setItem('name', 'john');

// 

localStorage.setItem('name', 'john');
localStorage.setItem('friend', 'krish');
localStorage.setItem('job', 'developer');

const name1 = localStorage.getItem('name');
console.log(name1);

localStorage.removeItem('name');

localStorage.clear();

//

const friends = ['krishna', 'radha', 'seetha'];

localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[0]);


//

let fruits;

if(localStorage.getItem('fruits')){
    fruits = JSON.parse(localStorage.getItem('fruits'));
}else {
    fruits = []
}

console.log(fruits);
fruits.push('apple');
// fruits.push('orange');

localStorage.setItem('fruits', JSON.stringify(fruits));

















































