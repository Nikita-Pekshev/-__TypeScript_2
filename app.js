function calculateAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error("������ �� ������ ���� ������");
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(`Average: ${average}`);
function countValuesInRange(matrix, min, max) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const value = matrix[i][j];
            if (value >= min && value <= max) {
                count++;
            }
        }
    }
    return count;
}
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
const min = 3;
const max = 8;
const count = countValuesInRange(matrix, min, max);
console.log(`[${min}, ${max}]: ${count}`);
function formatTuple(tuple) {
    const [str0, str1, num] = tuple;
    return `${str0} � ${num} � ${str1}`;
}
const tuple = ['Nikita', 'Pekshev', 19];
const result = formatTuple(tuple);
console.log(result);
var VegetableOil;
(function (VegetableOil) {
    VegetableOil["Canola"] = "Canola oil";
    VegetableOil["Sunflower"] = "Sunflower oil";
    VegetableOil["Olive"] = "Olive oil";
    VegetableOil["Corn"] = "Corn oil";
    VegetableOil["Soybean"] = "Soy oil";
})(VegetableOil || (VegetableOil = {}));
console.log(VegetableOil.Olive);
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
}
const dog = new Dog();
const cat = new Cat();
printPetInfo(dog);
printPetInfo(cat);
const oilProduct = {
    type: VegetableOil.Sunflower,
    brand: "Gold seed",
    price: 100
};
console.log(JSON.stringify(oilProduct, null, 2));
//# sourceMappingURL=app.js.map