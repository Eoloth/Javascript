// Intrface
interface CamisetaBase {
  setColor(color);
  getColor();
}

// Clase (molde del objeto
class Camiseta implements CamisetaBase {
  // Propiedades (caracteristicas del objeto)
  public color: string;
  public modelo: string;
  public marca: string;
  public talla: string;
  public precio: number;
  // Metodos (funciones o acciones del objeto)
  constructor(color, modelo, marca, talla, precio) {
    this.color = color;
    this.modelo = modelo;
    this.marca = marca;
    this.talla = talla;
    this.precio = precio;
  }
  public setColor(color) {
    this.color = color;
  }
  public getColor() {
    return this.color;
  }
}

var camiseta = new Camiseta("Rojo", "Manga Larga", "Nike", "L", 10);
console.log(camiseta);

// Herencia

// Clase hija
class Sudadera extends Camiseta {
  public capucha: boolean;

  setCapucha(capucha: boolean) {
    this.capucha = capucha;
  }

  getCapucha() {
    return this.capucha;
  }
}

var sudadera_Adidas = new Sudadera("Verde", "Manga Corta", "Adidas", "XL", 12);
sudadera_Adidas.setCapucha(true);
sudadera_Adidas.setColor("Verde");
sudadera_Adidas.getCapucha();
console.log(sudadera_Adidas);
