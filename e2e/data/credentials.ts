import { Credentials } from '@/types/credentinals.types';

export enum Users {
  Standard = 'standard_user',
}

export const UserCredentials: Record<Users, Credentials> = {
  [Users.Standard]: {
    username: process.env['STANDARD_USERNAME'] as string,
    password: process.env['STANDARD_PASSWORD'] as string,
  },
};
