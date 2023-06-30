import { useAppDispatch, useAppSelector, useInitialization } from "./hooks";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const stateInitialiser = useInitialization()

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    stateInitialiser()
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
