const cars = [
    { brand: "Ford", model: "Focus", year: 2020 },
    { brand: "Tesla", model: "Model 3", year: 2022 },
    { brand: "BMW", model: "X5", year: 2021 }
];

// filtrujemy tylko auta nowsze niż 2019
const newestCars = cars.filter(car => car.year > 2019);

// wyświetlamy wyniki
newestCars.map(car => {
    console.log(`${car.brand} ${car.model} (${car.year})`);
});

