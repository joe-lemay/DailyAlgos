function binaryStringExpansion(str, solutions = [], partial = "") {
    const index = str.indexOf("?");

    if (index < 0) {
        solutions.push(partial + str);
    } else {
        const front = str.slice(0, index);
        const back = str.slice(index + 1);
        const prefix = partial + front;
        binaryStringExpansion(back, solutions, prefix + "0");
        binaryStringExpansion(back, solutions, prefix + "1");
    }
    return solutions;
}

console.log(binaryStringExpansion("1?0?")) // ["1000", "1001", "1100", "1101"]

