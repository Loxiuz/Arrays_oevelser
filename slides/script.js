"use strict";

window.addEventListener("load", start);

function start() {
  alfabet();
}

function peopleResult() {
  const people = ["Harry", "Ron", "Hermione"];
  let result;

  result = people.push("Draco");
  result = people.pop();
  result = people.push("Neville");
  result = people.push("Luna");
  result = people.slice(0, 3);
  result = people.splice(1, 0, "Cho");
  people[1] = "Ginny";
  result = people.push("Fred", "George");
  result = people.indexOf("Fred");
  result = people.splice(result, 1);

  console.log(people);
  console.log(result);
}

function alfabet() {
  const alfabet = "abcdefghijklmnopqrstuvwxyzæøå";
  const bogstaver1 = alfabet.split();
  const bogstaver2 = alfabet.split("");
  const bogstaver3 = Array.from(alfabet);

  console.log("alfabet: " + alfabet);
  console.log("split(): " + bogstaver1);
  console.log('split(""): ' + bogstaver2);
  console.log("Array.from(alfabet): " + bogstaver3);

  const alfa1 = bogstaver2.toString();
  const alfa2 = bogstaver2.join();
  const alfa3 = bogstaver2.join("");
  const alfa4 = bogstaver2.join(" ");

  console.log("toString(): " + alfa1);
  console.log("join(): " + alfa2);
  console.log('join(""): ' + alfa3);
  console.log('join(" "): ' + alfa4);
}
