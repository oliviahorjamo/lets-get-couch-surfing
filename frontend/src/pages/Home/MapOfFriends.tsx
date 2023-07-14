import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { updateLocationCoordinates } from "../../reducers/userReducer";

interface Props {
  selectedFriendId: string | null
}

const MapOfFriends = ( { selectedFriendId }: Props ): JSX.Element => {
  const friends = useAppSelector((state) => state.friends)
  const dispatch = useAppDispatch()

  console.log('selected friend in map', selectedFriendId)

  useEffect(() => {
    dispatch(updateLocationCoordinates())
  }, [dispatch])

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
