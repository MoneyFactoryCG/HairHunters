export interface User {
  login: string;
  password: string;
}

export interface Order {
  date?: Date;
  spam: boolean;
  status?: string;
  order?: number;
  user?: string;
  list: OrderPosition[];
  _id?: string;
}

export interface OrderPosition {
  name: string;
  phone: string;
  type: string[];
  price: number;
  prepay: {
    sum: number;
    method: string;
  };
  master: string;
  note: string;
  _id?: string;
}
