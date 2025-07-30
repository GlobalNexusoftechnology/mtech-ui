export interface ProductType {
  id: number
  title: string
  image: string
  price: {
    amount: string
    unit: string
  }
  specs: {
    cooling: string
    phase: string
    capacity: string
    usage: string
  }
  tag: string
  category: string
  buttonLabel: string
}
