const max=prompt("enter the max number");

// console.log(max);

let random = Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");

while(true)
{
    if (guess=="quit")
    {
        console.log("user quit");
        break;
    }

    if(guess == random)
    {
        console.log("you are rigth you guess the right number");
        break;
    }
    else{
        guess=prompt("you guess was wrong.please try again.")
    }
}
