import { useAppSelector, useAppDispatch } from "../../hooks";

interface Props {
  selectedFriendId: string | null
}

const MapOfFriends = ( { selectedFriendId }: Props ): JSX.Element => {
  const friends = useAppSelector((state) => state.friends)
  console.log('currently selected friend', selectedFriendId)

  return (
    <div>
      <h1>Here a map of the friends</h1>
      {friends.map((f) => 
      <li key={f.username}>
        {f.username}
      </li>
      )}
    </div>
  )
  
};

export default MapOfFriends;
