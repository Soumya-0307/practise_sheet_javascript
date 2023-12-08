for(let i=15;i>=0 ;i--)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

n=parseInt(prompt("enter which tables you want"));
console.log(n+" tables");
for (let j=1;j<=10;j++)
{
    tables=n+"*"+j+"="+ n*j;
    console.log(tables);
}
