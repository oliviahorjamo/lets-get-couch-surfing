import { Button, Input, StyledLink } from "../../styles";
import { useAppDispatch, useField } from "../../hooks";
import { logUserIn } from "../../reducers/userReducer";
import {
  BoxContent,
  LabelInputWrapper,
  StyledForm,
  StyledText,
} from "./styles";
import Notification from "../../components/Notification";

interface Props {
  changeForm: () => void;
}

const LogInForm = ({ changeForm }: Props) => {
  const dispatch = useAppDispatch();

  const username = useField("text");
  const password = useField("password");

  const submitForm = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const credentials = {
      username: username.fields.value,
      password: password.fields.value,
    };
    dispatch(logUserIn(credentials));
  };

  const fieldValues = [username.fields.value, password.fields.value];
  const buttonDisabled = fieldValues.filter((v) => v.length === 0).length !== 0;

  return (
    <BoxContent>
      <h2 className="Auth-form-title">Log In</h2>
      <StyledText>
        Not registered yet?{" "}
        <StyledLink onClick={changeForm}>Sign Up</StyledLink>
      </StyledText>
      <StyledForm onSubmit={(event: React.SyntheticEvent) => submitForm(event)}>
        <LabelInputWrapper>
          <label>Username</label>
          <Input {...username.fields} />
        </LabelInputWrapper>
        <LabelInputWrapper>
          <label>Password</label>
          <Input {...password.fields} />
        </LabelInputWrapper>
        <Notification />
        <Button disabled={buttonDisabled} type="submit">
          Log In
        </Button>
      </StyledForm>
    </BoxContent>
  );
};

export default LogInForm;
