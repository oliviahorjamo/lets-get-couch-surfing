import User from "./user";
import Message from "./message";
import Publication from "./publication";
import Friendship from "./friendship";

const models = [User, Message, Publication, Friendship];

User.hasMany(Publication);
Publication.belongsTo(User);

/*
User.hasMany(Message);
Message.belongsToMany(User); // does it belong to one or multiple users if defined this way
// might need a through keyword

User.hasMany(Friendship);
Friendship.belongsToMany(User);
*/

models.forEach((model) => model.sync());

export default {
  User,
  Publication,
  Message,
  Friendship,
};
