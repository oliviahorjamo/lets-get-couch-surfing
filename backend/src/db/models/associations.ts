import { ModelInterface } from ".";
import User from './user';
import FriendRequest from "./friendRequest";
import Publication from "./publication";

export const models = {
  user: User,
  friendRequest: FriendRequest,
  publication: Publication
};

/*
export default function createAssociations(models: ModelInterface): void {
  // associate user with users
  User.associate(models);
  Publication.associate(models);
  //FriendRequest.associate(models);
}
*/