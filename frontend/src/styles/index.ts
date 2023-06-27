import styled from "styled-components";

export const Button = styled.button`
  background: Bisque;
  font-size: 1em;
  margin-top: 1em;
  padding: 0.25em 1em;
  border: 2px solid Chocolate;
  border-radius: 3px;
`

export const Input = styled.input`
  margin: 0.25em;
`
export const Container = styled.div`
  background-color: ${props => props.theme.colors.orange};
`