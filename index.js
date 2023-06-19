class masini {
    constructor(marca, model, color, kilometraj){
      this.marca = marca;
      this.model = model;
      this.color = color;
      this.kilometraj = kilometraj;
}

    get prop() {
        return `Car[marca= ${this.marca}, model= ${this.model}, color= ${this.color}, kilometraj= ${this.kilometraj}`
    }
}
function main() {
    const primaMasinaNoua = new masini("Volvo", "XC-60", "Negru", "234 000");
    const aDouaMasinaNoua = new masini("Mazda", "CX-5", "Verde", "111 000");
    const aTreiaMasinaNoua = new masini("Dacia", "BIGGSTER", "Albastru", "20 000");

    const masina1 = primaMasinaNoua.prop;
    const masina2 = aDouaMasinaNoua.prop;
    const masina3 = aTreiaMasinaNoua.prop;

    console.log(masina1);
    console.log(masina2);
    console.log(masina3);
}
main();

class masiniDeCurse extends masini {
  constructor (marca, model, color, kilometraj){
    super (marca, model, color, kilometraj)
  }
  participaLaCampionat(pozitia) {
    if (pozitia>0)
      return `Am castigat pe locul ${pozitia}`;
    else
      return `nu am castigat nici un premiu`;
  }
}

const masinaDeCurse = new masiniDeCurse("Toyota", "Turbo", "Rosu", 10000)
console.log(masinaDeCurse.prop);
let rezultate = masinaDeCurse.participaLaCampionat;
console.log(rezultate(20));
