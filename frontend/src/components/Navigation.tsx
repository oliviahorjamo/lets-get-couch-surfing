import { Link } from "react-router-dom";
import styled from 'styled-components'
import { StyledLink } from "../styles";
import { clearUser } from "../reducers/userReducer";
import { useAppDispatch } from "../hooks";

const NavigationStyle = styled.div`
  background: BurlyWood;
  padding: 1em;
`

const Navigation = () => {
  const dispatch = useAppDispatch()

  const padding = {
    padding: '10px'
  }

  const logOut = async () => {
    dispatch(clearUser())
  }

  return (
    <NavigationStyle>
      <Link style={padding} to="/">home</Link>
      <StyledLink onClick={logOut}>
        Log Out
      </StyledLink>
    </NavigationStyle>
  );
};

export default Navigation;
