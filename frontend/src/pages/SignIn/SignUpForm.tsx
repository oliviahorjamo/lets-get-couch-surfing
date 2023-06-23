import "./SignIn.css"

interface Props {
  changeForm: () => void
}

const SignUpForm = ({changeForm}: Props) => {
  // this is a component for creating a new user

  const submitForm = () => {
    console.log('signing up the user')
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
            Sign In
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Name</label>
          <input
            type="name"
            className="form-control mt-1"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group mt-3">
          <label>Username</label>
          <input
            type="username"
            className="form-control mt-1"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password again</label>
          <input
            type="password-again"
            className="form-control mt-1"
            placeholder="Enter password again"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>

    </div>
  )
}

export default SignUpForm