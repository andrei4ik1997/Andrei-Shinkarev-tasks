export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FireBaseAuthResponse {
  displayName: string;
  email: string;
  idToken: string;
  kind: string;
  localId: string;
  registered: boolean;
  expiresIn: string;
  refreshToken: string;
}

export interface Card {
  id?: string;
  name: string;
  brand: string;
  category: string;
  articul: string;
  price: string | number;
  amount: string | number;
  count?: number;
  images: string[];
  dispay: string | number;
  memory: string;
  camera: string | number;
  description: string;
  date: Date | string;
}

export interface Order {
  id: string;
  adress: string;
  date: Date | string;
  name: string;
  orders: Card[];
  payment: string;
  phone: string;
  price: string;
}
