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

// Klasa pochodna (dziecko) — pies
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // wywołuje konstruktor z klasy Animal
        this.breed = breed;
    }

    // Nadpisujemy metodę makeSound()
    makeSound() {
        console.log("Hau hau!");
    }

    fetch() {
        console.log(`${this.name} aportuje piłkę!`);
    }
}



// Klasa pochodna (dziecko) — kot
class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    makeSound() {
        console.log("Miau!");
    }

    sleep() {
        console.log(`${this.name} śpi na słońcu.`);
    }
}

// Użycie klas:
const dog = new Dog("Burek", "owczarek");
dog.introduce();  // Jestem zwierzęciem o imieniu Burek.
dog.makeSound();  // Hau hau!
dog.fetch();      // Burek aportuje piłkę!

const cat = new Cat("Mruczek", "biały");
cat.introduce();  // Jestem zwierzęciem o imieniu Mruczek.
cat.makeSound();  // Miau!
cat.sleep();      // Mruczek śpi na słońcu.