import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { initializeUsers } from "./reducers/usersReducer";
import { initUser, clearUser } from "./reducers/userReducer";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn";
import { useAppSelector } from "./hooks";

const App = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(initializeUsers());
    dispatch(initUser());
  }, [dispatch]);

  if (!user) {
    return <SignIn />;
  }

  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
