import { Link } from "react-router-dom";
import styled from 'styled-components'

const NavigationStyle = styled.div`
  background: BurlyWood;
  padding: 1em;
`

const Navigation = () => {

  const padding = {
    padding: '10px'
  }

  return (
    <NavigationStyle>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/signin">sign in</Link>

    </NavigationStyle>
  );
};

export default Navigation;
