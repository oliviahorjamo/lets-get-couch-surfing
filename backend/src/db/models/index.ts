import Publication from "./publication";
import User from "./user";
import FriendRequest from "./friendRequest";

export interface ModelInterface {
  User: typeof User
  Publication: typeof Publication
  FriendRequest: typeof FriendRequest
}