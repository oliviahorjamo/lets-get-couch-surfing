import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { initializeUsers } from "./reducers/usersReducer";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn";
import { useAppSelector } from "./hooks";

const App = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user)
  console.log('user from local storage', user)

  // a use effect for setting user to storage here

  useEffect(() => {
    dispatch(initializeUsers());
    // here initialize publications?
  }, [dispatch]);


  if (!user) {
    return (
      <SignIn />
    )
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
