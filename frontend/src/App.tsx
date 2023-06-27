import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { initializeUsers } from "./reducers/usersReducer";
import { initUser, clearUser } from "./reducers/userReducer";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn";
import { useAppSelector } from "./hooks";
import Theme from "./styles/Theme";
import { Container } from "./styles";

const App = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  // jos tää ajetaan aina niin käyttäjä tyhjennetään muistista aina kun päivitetään sivu
  dispatch(clearUser())

  useEffect(() => {
    dispatch(initializeUsers());
    dispatch(initUser());
  }, [dispatch]);

  if (!user) {
    return <SignIn />;
  }

  return (
    <Theme>
      <Container>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Container>
    </Theme>
    
  );
};

export default App;
