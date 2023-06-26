export interface LoginCredentials {
  username: string;
  password: string;
}


export interface UserAttributes {
  id: string,
  name: string,
  username: string,
  password: string,
  createdAt?: Date,
  updatedAt?: Date
}

export type UserInputAttributes = Omit<UserAttributes, 'id' | 'createdAt' | 'updatedAt'>;
export type UserOutputAttributes = Required<UserAttributes>;

