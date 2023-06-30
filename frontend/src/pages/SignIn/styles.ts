import styled from "styled-components";

export const SignUpPage = styled.div`
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.mediumBlue};
`;

// Next steps:
// Create a minimum size for both items relative to the size of the window
// And don't allow the items to shrink more than this

export const FlexBoxWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  
  /*
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
  */
`;

export const StyledForm = styled.form`
  background-color: ${(props) => props.theme.colors.cream};
  padding: 10px;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  margin: 5%;
  border-radius: 2em;
`;

export const BoxContent = styled.div`
  background-color: ${(props) => props.theme.colors.cream};
  padding: 20px;
  display: inline-block;
  margin: 5%;
  border-radius: 2em;
  flex-grow: 1;
`;

export const StyledLabel = styled.label`
  //flex-direction: column;
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.colors.mediumBlue};
`;

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: start;
    text-align: start;
  }
`;

export const StyledText = styled.div`
  padding: 5px;
`;
