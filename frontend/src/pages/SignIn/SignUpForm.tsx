import "./SignIn.css"
import { Button, Input } from "../../styles"
import { useField } from "../../hooks"
import { UserOutputAttributes } from "../../types/users"
import loginService from "../../services/login"

interface Props {
  changeForm: () => void
}

const SignUpForm = ({changeForm}: Props) => {
  const username = useField('text')
  const password = useField('password')
  const passwordAgain = useField('password')
  const name = useField('text')

  const submitForm = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    const credentials = {
      username: username.fields.value,
      password: password.fields.value,
      name: name.fields.value
    }
    loginService
      .signup(credentials)
      .then((user: UserOutputAttributes) => {
        // log the user in and set the user to storage service by
        // dispatching the userReducer logUserIn action creator
        console.log(user)
      })
      .catch(() => {
        // catch an error here
        // notify with a notify component
      })
  }

  return (
    <div className='Auth-form-container'>
      <form className="Auth-form" onSubmit={submitForm}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
        </div>
        <div className='text-center'>
          Already registered?{" "}
          <span className="link-primary" onClick={changeForm}>
            Log In
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Name</label>
          <Input
            { ...name.fields }
            placeholder="Enter name"
          />
        </div>
        <div className="form-group mt-3">
          <label>Username</label>
          <Input
            { ...username.fields }
            placeholder="Enter username"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <Input
            { ...password.fields }
            placeholder="Enter password"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password again</label>
          <Input
            { ...passwordAgain.fields }
            placeholder="Enter password again"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <Button type="submit" className="btn btn-primary">
            Sign Up
          </Button>
        </div>
      </form>

    </div>
  )
}

export default SignUpForm