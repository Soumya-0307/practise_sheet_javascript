// // function one(){
// //     return 1;
// // }

// // function two(){
// //     return one()+one();
// // }

// // function three(){
// //     let ans=two()+one();
// //     console.log(ans);
// // }

// // // three();


// // function savetodb(data){
// //     let internetspeed=Math.floor(Math.random()*10)+1;
// //     if (internetspeed>4){
// //         console.log("your data was saved.");
// //     }else{
// //         console.log("weak connection.data was not saved.")
// //     }
// // }


// // savetodb('apnacollege');

// // async function greet(){
// //     throw"some random error";
    
// //     return "hello";
// // }


// // greet()
// // .then(()=>{
// //     console.log("promise was resolved");
// //     console.log("result was:",result);
// // })
// // .catch((err)=>{
// //     console.log("result was:",result);
// // });

// h1=document.querySelector("h1");

// function changecolor(color,delay){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             // console.log(`color changed to ${color}`);
//             reslove("color changed");
//         },delay);
//     });
// }


// async function demo() {
//     await changecolor("red",1000);
//     await changecolor("orange",1000);
//     await changecolor("green",1000);
//     await changecolor("blue",1000);


//     let a=5;
//     console.log(a);
//     console.log("new number=",a+3);
// }


let jsonRes='{"fact":"soumya is a very and very sensitve girl which makes her very low and low in some difficult situation"}';

let validRes=JSON.parse(jsonRes);
console.log(validRes);

let student={
    "name":"soumya",
    "marks":99,
    "id":"1Ds22mc099"
};

let url="https://catfact.ninja/fact";


fetch(url);