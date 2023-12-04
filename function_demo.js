function dice(){
    let roll=Math.floor(Math.random()*6)+1;
    console.log(roll);
}

// let number=prompt("enter the number you want a tbale");
// dice();
function table(n){
    for (i=1;i<=10;i++){
        console.log(`${n}*${i}=${i*n}`);
    }
}

// table(7);
let sum=0;
function sums(n){
    for(i=0;i<n;i++)
    {
        sum=sum+i;
        
    }
   return sum;
}


// console.log(sums(10));



function concat(str){
    let result="";


    for(let i=0;i<str.length;i++){
        result+=str[i];
    }

    return result;
}

let string=["hi ","hello ","bye","!"];

console.log(concat(string));

let greet="hii";

function changegreet(){
    let greet="namaste";
    console.log(greet);
    function innergreet(){
        console.log(greet);
    }
}
console.log(greet);
changegreet();

// higher order funstions returns

// let odd=function(n){
//     console.log(n%2!=0);
// }

// let even=function(n){
//     console.log(n%2 == 0);
// }

function oddorevenfactory(request){
    if(request == "odd"){
        let odd=function(n){
            console.log(n%2!=0);
        }
        return odd;
    }
    else if(request == "even"){
        let even=function(n){
            console.log(n%2 == 0);
        }
return even
    }  else{
        console.log("wrong request");
    }      

    }

    let request="odd";
// oddorevenfactory(odd);

const sumd=(a,b)  =>{console.log(a+b);};

const cube= n =>{
    return n*n*n;
}


// console.log("hi there");

// id=setInterval(()=>{
//     console.log("hii soumya");
// },2000)

// console.log("hi everybody");

// console.log(id);

square =(a) =>{
    console.log(a**2);
};

square(6);

// setInterval(()=>{
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");
//     console.log("hello world");

// },2000)


let arr=[1,2,3,4,5,6];

 arr.forEach(function(el) {
    console.log(el);
});
// arr.forEach(print);

let array=[
    {
        name:"soumya",
        marks:90
    },
    {
        name:"swathi",
        marks:96
    }
];

array.forEach((student)=>{
    console.log(student.marks);
});

let num=[1,2,3,4]

let double=num.map((el)=>{
    return el*2;
});

let nums=[10,123,39,56,76];

let ans=nums.filter((el)=>{
    return el%2!==0;
});


numbers=[1,2,3,4];
let sumsd=numbers.reduce((res,el)=>{
    console.log(res);
    return res+el;
});

console.log(sumsd);

console.log("reduce with maximum");

let maximums=[1,2,3,4,5,9,20];

// let max=-1;

// for(i=0;i<maximums.length;i++){
//     if(max<maximums[i]){
//         max=maximums[i];
//     }
// }

// console.log(max);


let reduces=maximums.reduce((min,el) =>{
     if(min < el){
        return min;
     }else{
        return el;
     }
});

console.log(reduces);


let check=[10,20,30,40];

let answer=check.every((el)=>el%10==0);

console.log(answer);




