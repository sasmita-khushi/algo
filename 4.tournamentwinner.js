function tournamentWinner(competitions, results) {
  let score = {};
  let highscore = 0;
  let winner = "";
  for (let i = 0; i < results.length; i++) {
    let matchWinner = "";
    let result = results[i];
    if (result === 0) {
      matchWinner = competitions[i][1];
      if (score[matchWinner]) {
        score[matchWinner] += 3;
      } else {
        score[matchWinner] = 3;
      }
    } else {
      matchWinner = competitions[i][0];
      if (score[matchWinner]) {
        score[matchWinner] += 3;
      } else {
        score[matchWinner] = 3;
      }
    }
    if (highscore < score[matchWinner]) {
      highscore = score[matchWinner];
      winner = matchWinner;
    }
  }
  return winner;
}

competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
results = [0, 0, 1];
console.log(tournamentWinner(competitions, results));
