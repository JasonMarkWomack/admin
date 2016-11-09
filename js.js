function createAddingMachine() {
    var number = 1;
    // Make private variables here

    return function add(newNumber) {
        // Change private variables here.
        number += newNumber;
        return number;
    };
}

var addingMachine1 = createAddingMachine();
var addingMachine2 = createAddingMachine();

console.log(addingMachine1(2));
console.log(addingMachine1(2));
console.log(addingMachine2(2));
console.log(addingMachine2(2));
