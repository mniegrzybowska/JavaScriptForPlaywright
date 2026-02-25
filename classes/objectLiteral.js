//1. Stwórz 3 obiekty samochód(car) i przypisz mu pola: brand, model, year.Niech rok produkcji będzie unikalny dla każdego auta.
// 2. umieść je w tablicy.

const car1 = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
};

const car2 = {
    brand: 'Ford',
    model: 'Mustang',
    year: 2021
};

const car3 = {
    brand: 'Audi',
    model: 'A4',
    year: 2022
};



const cars = [car1, car2, car3];
//3. Dla chętnych: przy pomocy funkcji.map przeiteruj po tablicy i wyświetl wszystkie informacje(brand, model, year) dla każdego samochodu

console.log(cars.map(car => car.brand + ' ' + car.model + ' ' + car.year));

//4. Dla chętnych: Przy pomocy funkcji.filter wyświetl informacje tylko dla dwóch najmłodszych aut.
console.log(cars.filter(car => car.year < 2021));
