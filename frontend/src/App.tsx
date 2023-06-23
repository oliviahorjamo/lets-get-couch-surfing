import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn";
import { initializeUsers } from "./reducers/userReducer";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeUsers());
  }, [dispatch]);


  return (
    <div>
      <div>
        <Link to="/">home</Link>
        <Link to="/signin">sign in</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
};

export default App;
