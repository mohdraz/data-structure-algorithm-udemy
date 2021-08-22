import { performance } from "perf_hooks";

const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "squirt", "nemo"];

const large = new Array(10).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}

findNemo(large); // O(n) --> Linear time

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)

/* Big O Notation 

1.      O(n)    ---> Linear Time such as loop iteration
2.      O(1)    ---> Constant Time

*/
