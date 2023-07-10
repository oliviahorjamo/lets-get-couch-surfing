import { useAppSelector, useInitializeFriendsAndPublications, useAppDispatch } from "../../hooks";
import { useEffect, useState } from "react";
import MapOfFriends from "./MapOfFriends";
import PublicationList from "./PublicationList";

const Home = (): JSX.Element => {
  const friends = useAppSelector((state) => state.friends)
  const [selectedFriendId, selectFriend ] = useState(null)

  const dispatch = useAppDispatch();
  const friendInitialiser = useInitializeFriendsAndPublications()

  useEffect(() => {
    friendInitialiser()
  }, [dispatch]);
  

  console.log(friends)

  if (!friends) {
    return <div></div>;
  }

  return (
    <div>
      <MapOfFriends selectedFriendId = {selectedFriendId}></MapOfFriends>
      <PublicationList selectedFriendId={selectedFriendId}></PublicationList>
    </div>
  )
  
};

export default Home;
