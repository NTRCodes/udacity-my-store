export class Product {
  id: number
  name: string
  url: string
  price: number
  count: number
  description?: string

  constructor() {
    this.id = 1
    this.name = ''
    this.url = ''
    this.price = 0.00
    this.count = 1
    this.description = ''
  }
}
