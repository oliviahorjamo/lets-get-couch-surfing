

export interface PublicationAttributes {
  id: number,
  createdBy: string,
  title: string,
  message: string,
  createdAt?: Date,
  updatedAt?: Date
}

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
  publications?: PublicationAttributes[]
}
// Here I was wondering if I should add receivers and senders
// to the model but at least in this example https://dev.to/jctaveras/sequelize-typescript-what-you-need-to-know-41mj
// the author type doesn't have a list of books


export interface OtherUserAttributes extends Pick<UserAttributes, 'id' | 'name' | 'username'>{}


export interface FriendRequestAttributes {
  id: number;
  senderId: string;
  receiverId: string;
  createdAt?: Date;
  status: Status;
}

export interface Friend extends OtherUserAttributes {
  publications: PublicationAttributes[]
}

export enum Status {
  Pending = "pending",
  Accepted = "accepted",
}

export type UserInputAttributes = Omit<
  UserAttributes,
  "id" | "createdAt" | "updatedAt" | "publications"
>;

export interface UserOutputAttributes extends Required<UserAttributes>{}

export type NewFriendRequest = Omit<
  FriendRequestAttributes,
  "id" | "createdAt" | "status"
>;


export interface PublicationAttributes {
  id: number,
  createdBy: string,
  title: string,
  message: string,
  createdAt?: Date,
  updatedAt?: Date
}

export type PublicationInputAttributes = Omit<
  PublicationAttributes,
  "id" | "createdAt" | "updatedAt"
>;

export type PublicationOutputAttributes = Required<PublicationAttributes>;