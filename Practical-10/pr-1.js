// Create an iterator for an infinite sequence of numbers
function* infiniteNumberGenerator() {
    let number = 1;
    while (true) {
      yield number++;
    }
  }
  
  // Usage example:
  const numberIterator = infiniteNumberGenerator();
  
  // Continuously generate and display numbers
  for (let i = 0; i < 5; i++) {
    console.log(numberIterator.next().value);
  }
  