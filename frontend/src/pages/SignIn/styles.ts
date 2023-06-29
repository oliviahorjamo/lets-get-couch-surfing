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
`;

export const StyledForm = styled.form`
  background-color: ${(props) => props.theme.colors.cream};
  padding: 10px;
  border-radius: 0px;
  display: block;
  flex: 1 1 auto;
  margin: 5%;
  border-radius: 2em;
`;

export const BoxContent = styled.div`
  background-color: ${(props) => props.theme.colors.cream};
  padding: 20px;
  display: inline-block;
  flex: 1 1 auto;
  margin: 5%;
  border-radius: 2em;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.colors.mediumBlue};
`;

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.div`
  padding: 5px;
`;
