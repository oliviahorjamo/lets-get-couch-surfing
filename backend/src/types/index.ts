export interface LoginCredentials {
  username: string;
  password: string;
}

export interface UserAttributes {
  id: string;
  name: string;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
// Here I was wondering if I should add receivers and senders
// to the model but at least in this example https://dev.to/jctaveras/sequelize-typescript-what-you-need-to-know-41mj
// the author type doesn't have a list of books

export interface FriendRequestAttributes {
  id: number;
  senderId: string;
  receiverId: string;
  createdAt?: Date;
  status: Status;
}

export enum Status {
  Pending = "pending",
  Accepted = "accepted",
}

export type UserInputAttributes = Omit<
  UserAttributes,
  "id" | "createdAt" | "updatedAt"
>;
export type UserOutputAttributes = Required<UserAttributes>;
export type NewFriendRequest = Omit<
  FriendRequestAttributes,
  "id" | "createdAt" | "status"
>;


export interface PublicationAttributes {
  id: number,
  createdBy: String,
  title: String,
  message: String,
  createdAt?: Date,
  updatedAt?: Date
}

export type PublicationInputAttributes = Omit<
  PublicationAttributes,
  "id" | "createdAt" | "updatedAt"
>;

export type PublicationOutputAttributes = Required<PublicationAttributes>;