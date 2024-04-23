function solution(statues) {
    statues.sort((a, b) => a - b);
    console.log(statues)
    neededStatues = 0;
    for(var i = 0; i < statues.length-1; i++){
        console.log(i, Math.abs((statues[i+1]-statues[i])-1))
        neededStatues += Math.abs((statues[i]-statues[i+1])-1)
    }
    return neededStatues
}
theseStatues = [6, 2, 3, 8]

console.log(solution(theseStatues))