import User from "./user";
import FriendRequest from "./friendRequest";
import Publication from "./publication";

export default function createAssociations(): void {
  User.belongsToMany(User, {
    as: 'receivers',
    through: FriendRequest,
    foreignKey: 'senderId' // The id of this user should be found in senderId field of all receivers' friend requests
  });

  User.belongsToMany(User, {
    as: 'senders',
    through: FriendRequest,
    foreignKey: 'receiverId'
  });


  User.hasMany(Publication, {
    as: 'publications',
    foreignKey: 'createdBy'
  });

  Publication.belongsTo(User,
    { foreignKey: 'createdBy' });
    
}
