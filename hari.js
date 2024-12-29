const x = 10;
if (x==10){
    console.log('x is 10');
} 
console.log('hello');
console.error('heyy');
console.warn('this is a warning')
let age=19;
age=20;
console.log(age);
const score=80;
console.log(score);
const name='john';
const age=30;
const rating=4.5;
const isfull=true;
const y=null;
const x=undefined;
console.log(typeof )
// string
const name='john';
const age=30;
console.log('my name is ' + name + ' and i am ' + age );
const hello=`my name is ${name} and i am ${age}`;
console.log(hello);
const s = 'hello world';
console.log(s.split(''));
// arrays
const num = new Array(1);
console.log(num);
const fruits=['apples','oranges','pears',]
fruits[3]='grapes';
fruits.push('mango')
fruits.unshift('peera');
console.log(fruits);
const  mee = {
    firstName:'john',
    lastName:'oea',
    age:20,
    hobbies:['music' ,'movies','sports'],
            }
const { firstName,lastName,age}=mee;
console.log(firstName);
const todos=[
    {
        id:1,
        text:'its a trash',
        isCompleted:true
    },
    {
        id:2,
        text:'its a trasher',
        isCompleted:true
    },
    {
        id:3,
        text:'its a trash of mani',
        isCompleted:true
    },
];
const todoJSON = JSON.stringify(todos);
console.log(tosoJSON);
//foreach
todos.forEach(function(todos){
    console.log(todos.text);
});

const todoText=todos.map(function(todos){
    return todos.Text;
});
console.log(todoText);
const todoCompleted=todoCompleted(function(todos){
    return todos.Completed===true
});
console.log(todoCompleted);
const x = 10; 
if(x===10){
    console.log('x is 10')}; 
    else if (x>10){
    console.log('x is greater than 10')};
      else{ console.log('x is less than 10')
      };
//functions
function addnums(num1=1,num2=3){
    return num1+num2;
}
console.log(addnums(3,5));
const addnums=(num1=1,num2=3) => num1 + num2;
console.log(addnums(5,5));
//constructor function
function person(fName,lName,dob){
    this.fName=fName;
    this.lName=lName;
    this.dom= new Date(dob);
    this.getBirthYear=function(){
        return this.dobgetFullYear();
    }
    this.getFullName= function(){
        return $(this.firstName) $(this.lastName);
    }
    person.prorotype.getBirthYear = function(){
        return `${this.firstName} ${this.lastName}`;

        
    }
}
//class
class person{
    constructor (firstName,lName,dob){
        this.fName=fName;
        this.lName=lName;
        this.dom= new Date(dob); 
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
//Instantiate object
const person1= new person('hari','sankar','24-06-2005');
const person2 = new person ('mary','queen','23-05-2999');
console.log(person1);
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person2.getFullName());


console.log(window);
window.alert(1);


//singale elment selector
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

//multiple element selector
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item));
    const ul = document.querySelector('.items');
    //ul.remove();
    ul.lastElementChild.remove();
    ul.firstElementChild.textContent = 'hello';
    ul.children[1].innerText = 'brad';
    ul.lastElementChild.innerHTML = '<h1>hxri</h1>';

    const btn = document.querySelector('.btn');
    //btn.style.background = 'red';
    btn.addEventListener('click',(e) => {
        e.preventDefault();
        console.log('e');
        //console.log(e.target.className);
        document.querySelector('#my-form').style.background = '#ccc';
        document.querySelector('body').classList.add('bg-dark');
        document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
    })
   const myForm = document.querySelector('#my-form');
   const nameInpust = document.querySelector('#name');
   const emailInput = document.querySelector('#email');
   const msg = document.querySelector('#.msg);
   const userList   = document.querySelector('#users');

   myForms.addEventListener('submit',onsubmit);

   function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value);
    if(nameInput.value === ''|| emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';
        setTimeout(() => msg.remove(),3000);
        //alert('please enter fields');
    }else{
        const li = document.createElement(li);
        li.appendChild(document.createTextNode(`${nameInput.value} : $ {emailInput.value}`));
        userList.appendChild(li);
        //clear fileds
        nameInput.value='';
        emailInput.value = '';

    }
    }
   
