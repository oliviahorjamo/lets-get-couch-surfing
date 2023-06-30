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

export interface FriendRequestAttributes {
  id: string,
  senderId: string,
  receiverId: string,
  createdAt?: Date,
  status: 'pending' | 'created'
}

export type UserInputAttributes = Omit<UserAttributes, 'id' | 'createdAt' | 'updatedAt'>;
export type UserOutputAttributes = Required<UserAttributes>;
export type NewFriendRequest = Omit<FriendRequestAttributes, 'id' | 'createdAt' | 'status'>;
