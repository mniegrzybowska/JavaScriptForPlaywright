// Class definition (the "recipe" for a cake)
class Cake {
  constructor(flavor, frosting) {
    this.flavor = flavor;
    this.frosting = frosting;
  }

  bake() {
    console.log(`Baking a ${this.flavor} cake with ${this.frosting} frosting.`);
  }

  serve() {
    console.log(`Serving a delicious ${this.flavor} cake with ${this.frosting}! `);
  }
}

// Creating objects (actual cakes)
const cake1 = new Cake("chocolate", "strawberry");
const cake2 = new Cake("vanilla", "chocolate");

// Using class methods
cake1.bake();  // Baking a chocolate cake with strawberry frosting.
cake1.serve(); // Serving a delicious chocolate cake with strawberry frosting! 

cake2.bake();  // Baking a vanilla cake with chocolate frosting.
cake2.serve(); // Serving a delicious vanilla cake with chocolate frosting! 