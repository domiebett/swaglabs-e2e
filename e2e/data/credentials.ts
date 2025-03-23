import { Credentials } from '@/types/credentinals.types';

export enum Users {
  Standard = 'standard_user',
}

export const UserCredentials: Record<Users, Credentials> = {
  [Users.Standard]: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
};
