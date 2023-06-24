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

    </NavigationStyle>
  );
};

export default Navigation;
