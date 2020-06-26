function result() {
  const array = Array.from(document.querySelectorAll('.cell'));
  let result = [];

  const test = (result, x, y) => {
    result.push(elem.classList[1]);
    result.push(array[index + x].classList[1]);
    result.push(array[index + y].classList[1]);
  };

  array.forEach((elem, index) => {
    if (index % 3 === 0) {
      if (index === 0) {
        test(result, 4, 8);
      }
      test(result, 1, 2);
    } else if (index < 3) {
      test(result, 3, 6);
    }
    const temp = [];

    result.forEach((x) => {
      if (x === elem) {
        temp.push(x);
      } if (index % 3 === 0) { }
    });
    console.log(result);
    console.log(temp);
    if (temp.length === 3) {
      console.log('object');
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