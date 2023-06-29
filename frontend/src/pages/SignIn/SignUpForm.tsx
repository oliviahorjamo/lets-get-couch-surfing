import { Button, Input, StyledLink } from "../../styles";
import { useAppDispatch, useField } from "../../hooks";
//import { UserOutputAttributes } from "../../types/users";
//import loginService from "../../services/login";
import { signUpUser } from "../../reducers/userReducer";
import {
  BoxContent,
  LabelInputWrapper,
  StyledForm,
  StyledLabel,
  StyledText,
} from "./styles";

interface Props {
  changeForm: () => void;
}

const SignUpForm = ({ changeForm }: Props) => {
  const dispatch = useAppDispatch();
  const username = useField("text");
  const password = useField("password");
  const passwordAgain = useField("password");
  const name = useField("text");

  const submitForm = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const credentials = {
      username: username.fields.value,
      password: password.fields.value,
      name: name.fields.value,
    };
    dispatch(signUpUser(credentials));
  };

  const fieldValues = [
    name.fields.value,
    username.fields.value,
    password.fields.value,
    passwordAgain.fields.value,
  ];

  const buttonDisabled = fieldValues.filter((v) => v.length === 0).length !== 0;

  /*
  const passwordAgainInvalid = () => {
    console.log('password', password)
    console.log('password again', passwordAgain)
    return true
  }
  */

  return (
    <BoxContent>
      <h2>Sign Up</h2>
      <StyledText>
        Already registered?
        <StyledLink onClick={changeForm}> Log In</StyledLink>
      </StyledText>
      <StyledForm onSubmit={submitForm}>
        <LabelInputWrapper>
          <label>Name</label>
          <Input {...name.fields} />
        </LabelInputWrapper>
        <LabelInputWrapper>
          <label>Username</label>
          <Input {...username.fields} />
        </LabelInputWrapper>
        <LabelInputWrapper>
          <label>Password</label>
          <Input {...password.fields} />
        </LabelInputWrapper>
        <LabelInputWrapper>
          <label>Password again</label>
          <Input {...passwordAgain.fields} />
        </LabelInputWrapper>
        <Button type="submit" disabled={buttonDisabled}>
          Sign Up
        </Button>
      </StyledForm>
    </BoxContent>
  );
};

export default SignUpForm;
