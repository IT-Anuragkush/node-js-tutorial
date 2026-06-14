let userInfo = [1,"anurag", "male", "bholaram", 1234567890];

// for loop
for(let i = 0; i < userInfo.length; i++)
{
  console.log(userInfo[i]);
}

// while loop
let i = 0;
while( i < userInfo.length)
{
  console.log(userInfo[i]);
  i++;
}

// do while loop
let j = 0;
do
{
  console.log(userInfo[j]);
  j++;
}while( j < userInfo.length)

// for..of
for(let val of userInfo)
{
  console.log(val);
}

// for each
userInfo.forEach( (val)=>{
  console.log(val);
})

// map 
let result = userInfo.map( (val)=>{
  return `${val + 1}`;
})

console.log(result);