import { User } from 'src/app/users/interfaces/user.interface';

export interface Product {
  id?: number;
  description: string;
  imageUrl: string;
  price: number;
  rating?: number;
  creator?: User;
}
