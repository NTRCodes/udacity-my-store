export class Product {
  id: number
  name: string
  url: string
  price: number
  description?: string

  constructor() {
    this.id = 1
    this.name = ''
    this.url = ''
    this.price = 0.00
    this.description = ''
  }
}
