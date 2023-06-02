//your JS code here. If required.
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.transition = 'background-color 1s';
    square.style.backgroundColor = '#ff0000';
  });

  square.addEventListener('mouseout', () => {
    square.style.transition = 'background-color 1s';
    setTimeout(() => {
      square.style.backgroundColor = '#ccc';
    }, 1000);
  });
});
