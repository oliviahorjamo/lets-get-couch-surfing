import { useAppSelector } from "../../hooks";
import { PublicationAttributes } from "../../types/publications";

interface Props {
  selectedFriendId: string | null
}

const PublicationList = ( { selectedFriendId }: Props ): JSX.Element => {
  const friends = useAppSelector((state) => state.friends)
  console.log('currently selected friend in publication list', selectedFriendId)
  const publicationLists = friends.map(f => f.publications)

  const publications = ([] as PublicationAttributes[]).concat(...publicationLists)

  
  return (
    <div>
      <h1>Publications sent by friends</h1>
      {publications.map(p =>
        <li key={p.title}>
          {p.title}
        </li>)}
    </div>
  )
  
};

export default PublicationList;
