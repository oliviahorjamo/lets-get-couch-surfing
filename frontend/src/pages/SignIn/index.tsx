import { useState } from "react"
import SignUpForm from "./SignUpForm"
import LogInForm from "./LoginForm"
import "bootstrap/dist/css/bootstrap.min.css"
import "./SignIn.css"

const SignIn = () => {
  const [formToShow, setFormToShow] = useState<string>('signup')

  const changeFormToShow = () => {
    setFormToShow(formToShow === 'signup' ? "signin" : "signup")
  }

  if (formToShow === 'signup') {
    return (
      <div>
        <SignUpForm changeForm={changeFormToShow}></SignUpForm>
      </div>
    )
  }

  return (
    <div>
      <LogInForm changeForm={changeFormToShow}></LogInForm>
    </div>
    
  )
}

export default SignIn

