const ages = [25, 31, 42, 77];

let result = ages.map((age) =>//gives access to each individual element in array
{
    if(age < 70)
    {
        return age*2;
    }
    else
    {
        return age;
    }
})

console.log(result);