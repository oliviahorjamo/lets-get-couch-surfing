const User = require("./user");
const Message = require("./message");
const Publication = require("./publication");
const Friendship = require("./friendship");

const models = [User, Message, Publication, Friendship];

User.hasMany(Publication);
Publication.belongsTo(User);

/*
User.hasMany(Message);
Message.belongsToMany(User); // does it belong to one or multiple users if defined this way
// might need a through keyword

User.hasMany(Friendship);
Friendship.belongsToMany(User);


models.forEach((model) => model.sync());
*/

module.exports = {
  User,
  Publication,
  Message,
  Friendship,
};
