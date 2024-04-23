function tournamentWinner(competitions, results) {

    let winner = { score: 0, name: '' };
    const scoreMap = {};
    for (let i = 0; i < competitions.length; i++) {
        let homeTeam = competitions[i][0];
        let awayTeam = competitions[i][1];

        if (results[i] === 0) {
            scoreMap[awayTeam] = (scoreMap[awayTeam] || 0) + 3;
            console.log(competitions[i][1]+ " wins the round!")
        }
        else {
            scoreMap[homeTeam] = (scoreMap[homeTeam] || 0) + 3;
            console.log(competitions[i][0]+ " wins the round!")
        }

        if (scoreMap[awayTeam] >= winner.score) {
            winner = { score: scoreMap[awayTeam], name: awayTeam };
        }
        else if (scoreMap[homeTeam] >= winner.score) {
            winner = { score: scoreMap[homeTeam], name: homeTeam }
        }
    }
    return "With a total score of " + winner.score + "..... The grand champion is.........." + winner.name[0]+winner.name[0]+winner.name[0]+winner.name[0]+winner.name + "!!!!"
}

competitionList = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

resultList = [0, 0, 1]

console.log(tournamentWinner(competitionList, resultList));