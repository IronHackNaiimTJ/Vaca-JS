const cow = require("cowsay");
const names = require("../data/names.json");
const readline = require("readline-sync");
const chalk = require("chalk");
const CircularShuffleList = require("./models/circular-shuffle-list");

const shuffleNames = new CircularShuffleList(names);
let text;
do {
  console.clear();
  console.log(
    chalk.gray("Press enter to get a random student or type 'exit' to finish")
  );
  console.log(cow.say({ text: chalk.red(shuffleNames.next()) }));
  text = readline.question("");
} while (text !== "exit");

/*
CommonJS => node (USAREMOS ESTE) const data = require('./data')
ES Module => import data from './data'
*/
