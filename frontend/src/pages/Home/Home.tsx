import { useAppSelector } from "../../hooks";

const Home = () => {
  const users = useAppSelector((state) => state.users);

  if (!users) {
    return <div></div>;
  }
  return <div>
    <h1>Users in this app</h1>
    {users.map((u) => 
    <li key={u.username}>
      {u.username}
    </li>
    )}
    </div>;
};

export default Home;
