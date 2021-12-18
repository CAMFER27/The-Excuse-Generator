let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const generateExcuse = () => {
  let excuseGenerator = "";

  excuseGenerator += who[Math.floor(Math.random() * who.length)];
  excuseGenerator += action[Math.floor(Math.random() * action.length)];
  excuseGenerator += what[Math.floor(Math.random() * what.length)];
  excuseGenerator += when[Math.floor(Math.random() * when.length)];

  return excuseGenerator;
};

document.getElementById("excuse").innerHTML =
  "OMG! you will not believe me but:" + generateExcuse();
