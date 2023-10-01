function* evenNumberGenerator() {
    let number = 2;
    while (true) {
        yield number;
        number += 2;
    }
}

const evenIterator = evenNumberGenerator();

for (let i = 0; i < 5; i++) {
    console.log(evenIterator.next().value);
}
