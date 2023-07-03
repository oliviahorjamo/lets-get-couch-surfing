import { ModelInterface } from ".";
import User from './user';
//import FriendRequest from "./friendRequest";

export default function createAssociations(models: ModelInterface): void {
  // associate user with users
  User.associate(models);
}