import { useState } from "react"
import SignUpForm from "./SignUpForm"
import LogInForm from "./LoginForm"
import { InfoBoxDiv } from "./InfoBox"
import { FlexBoxWrapper, Header, SignUpPage } from "./styles"

const SignIn = () => {
  const [formToShow, setFormToShow] = useState<string>('signup')

  const changeFormToShow = () => {
    setFormToShow(formToShow === 'signup' ? "signin" : "signup")
  }

  return (
    <SignUpPage>
      <Header>Let&rsquo;s get couch surfing!</Header>
      <FlexBoxWrapper>
        {formToShow === 'signup' ? (
            <SignUpForm changeForm={changeFormToShow} />
          ) : (
            <LogInForm changeForm={changeFormToShow} />
          )}
          <InfoBoxDiv />
      </FlexBoxWrapper>
    </SignUpPage>
  );
};

export default SignIn

