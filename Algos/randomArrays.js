function randomArray(length,start){
    var randomInt = Math.floor(Math.random()*length)
    var newArray = [];
    for(var i = start; i <= length; i++ ){
        if(i != randomInt)
        newArray.push(i)
    }
    console.log(randomInt)
    return newArray
}

function recursiveArray(loopCount, lowest){
    var arrayContainer = []
    var i = 0
    while(i<loopCount){
        arrayContainer.push(randomArray(range,lowest))
        i++
    }
    return arrayContainer
}
console.log(recursiveArray(20,-10,100))