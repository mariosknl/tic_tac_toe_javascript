function result() {
  const array = Array.from(document.querySelectorAll('.cell'));

  array.forEach((elements, index) => {
    if (array[index].classList[1] === 'x' || array[index].classList[1] === 'circle') {
      switch (index % 3 === 0) {
        case (array[index].className === array[index + 1].className && array[index + 1].className === array[index + 2].className):


          console.log('object');
          break;
        default:
      }
      //
    }
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