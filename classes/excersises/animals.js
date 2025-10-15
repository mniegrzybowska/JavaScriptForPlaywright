// Klasa bazowa (rodzic)
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("To zwierzę wydaje jakiś dźwięk.");
    }

    introduce() {
        console.log(`Jestem zwierzęciem o imieniu ${this.name}.`);
    }
}

// tutaj dodaj dziedziczące po rodzicu dziecko