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

const john = new Person("Jan", "Kowalski", 30);
john.introduce(); // Cześć, jestem Jan Kowalski i mam 30 lat.