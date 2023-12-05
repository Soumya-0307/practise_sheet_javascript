let students=[["bob",98],["alice",90],["ram",95]];

for( let i=0;i<students.length;i++)
{
    console.log(`information of  student ${[i+1]}`);
    for(let j=0;j<students[i].length;j++)
    {
        console.log(` ${students[i][j]}`); 
    }
}
