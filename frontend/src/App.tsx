import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";
import { initializeUsers } from "./reducers/usersReducer";
import { initUser, clearUser } from "./reducers/userReducer";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  // jos tää ajetaan aina niin käyttäjä tyhjennetään muistista aina kun päivitetään sivu
  //dispatch(clearUser());

  useEffect(() => {
    dispatch(initializeUsers());
    dispatch(initUser());
  }, [dispatch]);

  if (!user) {
    return (
      <Theme>
        <GlobalStyle />
        <SignIn />
      </Theme>
    );
  }

  return (
    <Theme>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Theme>
  );
};

export default App;
