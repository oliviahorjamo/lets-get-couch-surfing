
interface Props {
  changeForm: () => void
}


const LogInForm = ({changeForm}: Props) => {

  const submitForm = () => {
    console.log('form submitted')
  }

  return (
    <div className='Auth-form-container'>
      <form className="Auth-form" onSubmit={submitForm}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
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
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </div>
      </form>
    </div>
  )
}

export default LogInForm