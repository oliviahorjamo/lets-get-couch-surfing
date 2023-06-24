import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { initializeUsers } from "./reducers/userReducer";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeUsers());
  }, [dispatch]);

  // Here check if the user is found from local storage
  // If yes, show the normal navigation
  // If not, show only the sign in page

  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
};

export default App;
