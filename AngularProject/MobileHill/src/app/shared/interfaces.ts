export interface CallBack {
  id: string;
  name?: string;
  telephone: string;
  date: Date;
}

export interface Environment {
  apiKey: string;
  production: boolean;
  fireBaseDataBaseUrl: string;
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

export interface Filter {
  brands: string[];
  memories: string[];
  price: { min: number; max: number };
  display: { min: number; max: number };
  camera: { min: number; max: number };
}

export interface Order {
  id: string;
  name: string;
  phone: string;
  city: string;
  adress: string;
  payment: string;
  commentary?: string;
  products: Product[];
  price: string;
  date: Date | string;
}

export interface Product {
  id?: string;
  name: string;
  brand: string;
  category: string;
  articul: string;
  price: string | number;
  amount: string | number;
  count?: number;
  images: string[];
  display: string | number;
  memory: string;
  camera: string | number;
  description?: string;
  date: Date | string;
}

export interface Subscribe {
  email: string;
  date: Date;
}

export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}
