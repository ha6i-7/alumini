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