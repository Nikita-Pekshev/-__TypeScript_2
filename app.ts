function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("ћассив не должен быть пустым");
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(`Average: ${average}`);
function countValuesInRange(matrix: number[][], min: number, max: number): number {
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

type MyTuple = [string, string, number];
function formatTuple(tuple: MyTuple): string {
    const [str0, str1, num] = tuple;
    return `${str0} Ц ${num} Ц ${str1}`;
}
const tuple: MyTuple = ['Nikita', 'Pekshev', 19];
const result = formatTuple(tuple);
console.log(result);

enum VegetableOil {
    Canola = "Canola oil",
    Sunflower = "Sunflower oil",
    Olive = "Olive oil",
    Corn = "Corn oil",
    Soybean = "Soy oil"
}
console.log(VegetableOil.Olive);

class Pet {
    name: string = 'Some pet';
    age: number = -1;

    speak(): string {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;

    speak(): string {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;

    speak(): string {
        return "Miyau!";
    }
}
function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
}
const dog = new Dog();
const cat = new Cat();
printPetInfo(dog);  
printPetInfo(cat);

interface OilProduct {
    type: VegetableOil;
    brand: string;
    price: number;
}

const oilProduct: OilProduct = {
    type: VegetableOil.Sunflower,  
    brand: "Gold seed", 
    price: 100             
};

console.log(JSON.stringify(oilProduct, null, 2));
