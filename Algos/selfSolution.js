

function problem([x,y,z]){
    return x**2 + 5 *y/8+20*z
}

function createSoutionSet(){
    let potentialS_Size = 1000
    let potentialS = []
    if(potentialS.length<1){
        for(let i = 0; i< potentialS_Size; i++){
            let x = Math.random() * 10000
            let y = Math.random() * 10000
            let z = Math.random() * 10000
            potentialS.push([x,y,z])
        }
    }return potentialS
}

function findTopSolutions(arrList){
    results = []
    for(let i = 0; i<arrList.length; i++){
        result = problem(arrList[i])
        results.push([i,result])
    }
}