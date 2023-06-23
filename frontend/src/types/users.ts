// Here all different user types

interface UserAttributes {
  name: string;
  username: string;
  password: string;
  id?: string,
  createdAt?: Date,
  updatedAt?: Date
}

export type UserInputAttributes = Omit<UserAttributes, 'id' | 'createdAt' | 'updatedAt'>;
export type UserOutputAttributes = Required<UserAttributes>;
