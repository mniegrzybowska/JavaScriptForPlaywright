// Klasa bazowa (rodzic)
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce() {
        console.log(`Cześć, jestem ${this.firstName} ${this.lastName} i mam ${this.age} lat.`);
    }
}

// Klasa pochodna (dziecko)
class Employee extends Person {
    constructor(firstName, lastName, age, position) {
        // super() wywołuje konstruktor klasy Person
        super(firstName, lastName, age);
        this.position = position;
    }

    // Nowa metoda tylko dla pracownika
    work() {
        console.log(`Pracuję jako ${this.position}.`);
    }
}

// Tworzymy obiekt klasy Employee
const employee = new Employee("Anna", "Nowak", 28, "programistka");

// Możemy korzystać z metod klasy Person
employee.introduce(); // Cześć, jestem Anna Nowak i mam 28 lat.

// Oraz z metod klasy Employee
employee.work(); // Pracuję jako programistka.