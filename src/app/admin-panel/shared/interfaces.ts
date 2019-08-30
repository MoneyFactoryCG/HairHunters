export interface User {
  login: string
  password: string
}

export interface Order {
  date?: Date
  order?: number
  user?: string
  list: OrderPosition[]
  _id?: string
}

export interface OrderPosition {
  name: string
  phone: string
  type: string
  _id?: string
}