import { Button, Input, StyledLink } from "../../styles";
import loginService from "../../services/login";
import { useAppDispatch, useField } from "../../hooks";
import { UserOutputAttributes } from "../../types/users";
import { logUserIn } from "../../reducers/userReducer";
import {
  BoxContent,
  LabelInputWrapper,
  StyledForm,
  StyledText,
} from "./styles";

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
    loginService
      .login(credentials)
      .then((user: UserOutputAttributes) => {
        dispatch(logUserIn(user));
      })
      .catch(() => {
        // catch an error here
        // notify with a notify component
      });
  };

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
        <Button type="submit">Log In</Button>
      </StyledForm>
    </BoxContent>
  );
};

export default LogInForm;
