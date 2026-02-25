
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

const person = new Person("John", "Doe", 30);
person.introduce();