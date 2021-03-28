const listOfGames = [
    "Age of empires 2",
    "League of Legends"
]

const randomizerList = (list) => {
    const randomElement = list[Math.floor(Math.random() * list.length)];
    return randomElement;
}

const randomWinner = (iterations) => {
    totals = {};
    for (let index = 0; index < iterations; index++) {
        winner = randomizerList(listOfGames)
        console.log(winner);
        if (!totals[[winner]]) {
            totals[[winner]] = 1
        } else {
            totals[[winner]]=totals[[winner]]+1;
        }
    }
    return totals;
}
console.log(randomWinner(100));