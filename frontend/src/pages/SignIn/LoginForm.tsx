import { Button, Input }from '../../styles'
import loginService from "../../services/login"
import { useAppDispatch, useField } from '../../hooks'
import { UserOutputAttributes } from '../../types/users'
import { logUserIn } from '../../reducers/userReducer'

interface Props {
  changeForm: () => void
}

const LogInForm = ({changeForm}: Props) => {
  const dispatch = useAppDispatch()

  const username = useField('text')
  const password = useField('password')

  const submitForm = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    const credentials = {
      username: username.fields.value,
      password: password.fields.value
    }
    loginService
      .login(credentials)
      .then((user: UserOutputAttributes) => {
        // set the user here to storage with storageService
        // log the user in by dispatching login from userReducer
        dispatch(logUserIn(user))
      })
      .catch(() => {
        // catch an error here
        // notify with a notify component
      })
  }

  return (
    <div className='Auth-form-container'>
      <form className="Auth-form" onSubmit={(event: React.SyntheticEvent) => submitForm(event)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
        </div>
        <div className="text-center">
          Not registered yet?{" "}
          <span className="link-primary" onClick={changeForm}>
            Sign Up
          </span>
        </div>
        <div className="form-group mt-3">
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
        <div className="d-grid gap-2 mt-3">
          <Button type="submit">
            Log In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LogInForm