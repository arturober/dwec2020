import { User } from 'src/app/users/interfaces/user.interface';

export interface Comment {
    id?: number;
    text: string;
    date?: string;
    user?: User;
}
