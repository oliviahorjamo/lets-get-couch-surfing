import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.orange};
    height: 100%;
    overflow: auto;
    padding: 4em
  };
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.lightViolet};
  font-size: 1em;
  margin-top: 1em;
  padding: 0.25em 1em;
  border: 2px;
  border-radius: 3px;
  :hover {
    background-color: ${(props) => props.theme.colors.darkViolet};
  }
  color: ${(props) => props.theme.colors.darkBlue};
  display: inline;
`;

export const Input = styled.input`
  margin: 0.25em;
  background-color: ${(props) => props.theme.colors.lightViolet};
  border: 1px;
  outline: none;
  :hover {
    background-color: ${(props) => props.theme.colors.darkViolet};
  }
  padding: 0.6em 0.7em;
  text-align: center;
  color: ${(props) => props.theme.colors.darkBlue};
`;

export const StyledLink = styled.span`
  color: ${(props) => props.theme.colors.mediumBlue};
  :hover {
    color: ${(props) => props.theme.colors.darkViolet};
  }
`;
