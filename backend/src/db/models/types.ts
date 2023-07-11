import Publication from "./publication";
import User from "./user";
import FriendRequest from "./friendRequest";

export interface ModelInterface {
  user: typeof User
  publication: typeof Publication
  friendRequest: typeof FriendRequest
}