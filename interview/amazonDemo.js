function cellCompete(states, days) {
  // WRITE YOUR CODE HERE

  for (let i = 0; i < days; i++) {
    let left = [];
    let right = [];
    for (let j = 0; j < states.length; j++) {
      // left state
      if (j === 0) {
        left.push("inActive");
      } else if (states[j - 1] === 0) {
        left.push("inActive");
      } else if (states[j - 1] === 1) {
        left.push("active");
      }

      // right state
      if (j === states.length - 1) {
        right.push("inActive");
      } else if (states[j + 1] === 0) {
        right.push("inActive");
      } else if (states[j + 1] === 1) {
        right.push("active");
      }
    } // end of inner array for loop
    console.log("left: ", left[1]);
    console.log("right: ", right[1]);

    for (let k = 0; k < states.length; k++) {
      if (
        (left[k] === "inActive" && right[k] === "inActive") ||
        (left[k] === "active" && right[k] === "active")
      ) {
        states[k] = 0;
      } else {
        states[k] = 1;
      }
    }

    left = [];
    right = [];
  } // end of outer day loop
  return states;
}
// FUNCTION SIGNATURE ENDS

// const states = [1, 0, 0, 0, 0, 1, 0, 0];
// const days = 1;

const states = [1, 1, 1, 0, 1, 1, 1, 1];
const days = 2;

console.log(cellCompete(states, days));
// Expected Return [0, 1, 0, 0, 1, 0 , 1, 0]
// Expected Return [0,0,0,0,0,1,1,0]
