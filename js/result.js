const test = (result, array, index, x, y) => {
  result.push(array[index].classList[1]);
  result.push(array[index + x].classList[1]);
  result.push(array[index + y].classList[1]);
  console.log(result);
};

const checkWinner = (result, ele) => {
  if (ele !== 'circle' && ele !== 'x') {
    return;
  }
  const resultChecker = result.filter((x) => x === ele);
  if (resultChecker.length === 3) {
    console.log('win');
  }
};

function result() {
  const array = Array.from(document.querySelectorAll('.cell'));
  let result = [];

  array.forEach((elem, index) => {
    if (index % 3 === 0) {
      test(result, array, index, 1, 2);
      checkWinner(result, array[index].classList[1]);
    } else if (index <= 2) {
      test(result, array, index, 3, 6);
      checkWinner(result, array[index].classList[1]);
    }
    result = [];
  });
}

export default { result };


// if (index % 3 === 0 && array[index + 1].classList[1] === array[index].classList[1] && array[index + 2].classList[1] === array[index].classList[1]) {
//   //   console.log('object');
// } else if (index < 3 && array[index + 3].classList[1] === array[index].classList[1] && array[index + 6].classList[1] === array[index].classList[1]) {
//   console.log('object');
// } else if (index === 0 && array[index + 4].classList[1] === array[index + 8].classList[1] && array[index].classList[1] === array[index + 4].classList[1]) {
//   console.log('object');
// } else if (index === 2 && array[index + 4].classList[1] === array[index + 2].classList[1] && array[index].classList[1] === array[index + 4].classList[1]) {
//   console.log('object');
// }


// array.forEach((elements, index) => {
//   if (array[index].classList[1] === 'x' || array[index].classList[1] === 'circle') {
//     switch (index % 3 === 0) {
//       case (array[index].className === array[index + 1].className && array[index + 1].className === array[index + 2].className):


//         console.log('object');
//         break;
//       default:
//     }
//     //
//   }
// });