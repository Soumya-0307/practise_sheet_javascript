const favourite="Avthar";
let guess=prompt("enter the favourite movie!");
while((guess!=favourite)&&(guess!='quit'))
{
    // console.log("wrong movie you entered");
    guess=prompt("enter again! another chance")
}

if(guess==favourite)
{
    console.log("congrats you enterd my favourite movie");
}
else
{
    console.log("you Quit!");
}