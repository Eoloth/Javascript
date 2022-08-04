export class Zapatilla {
  // TypeScript define una clase como una plantilla para crear objetos, automaticamente se crean los atributos y metodos
  constructor(
    public nombre: string,
    public marca: string,
    public color: string,
    public precio: number,
    public stock: boolean
  ) {}
}
