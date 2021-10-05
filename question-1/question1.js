const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords (arr)
{
    let newArray = arr.filter((i) => {
        return typeof(i) == 'string'
    }).map((j) => {
        return j.toLowerCase();
    })
    
    return new Promise ((resolve, reject) => {
        if (newArray.length > 0)
        {
            resolve(newArray)
        } else 
        {
            reject('Array contained no strings')
        }
    })
}

lowerCaseWords(mixedArray).then(fulfilled => console.log(fulfilled), rejected => console.log(rejected))