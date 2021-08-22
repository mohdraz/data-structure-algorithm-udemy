function generalizedGCD(num, arr) {
  // WRITE YOUR CODE HERE
  const maxNum = Math.max(...arr);
  let GCDArr = [];

  for (let i = maxNum; i >= 1; i--) {
    console.log("i-start: ", i);
    let counter = 0;
    arr.forEach((el) => {
      if (el % i === 0) {
        console.log("i is: ", i);
        counter++;
      } else {
        counter--;
      }
    });
    console.log("i-end: ", i);
    console.log("counter: ", counter);

    if (counter === num) {
      GCDArr.push(i);
      counter = 0;
    } else {
      counter = 0;
    }
  }

  console.log("gdc: ", GCDArr);
  const x = Math.max(...GCDArr);
  console.log(x);
  return x;
}
// FUNCTION SIGNATURE ENDS

// const num = 5;
// const arr = [2, 3, 4, 5, 6];

// Expected Output 1

const num = 5;
const arr = [2, 4, 6, 8, 10];

console.log(generalizedGCD(num, arr));
