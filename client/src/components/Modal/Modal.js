import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react'
import { GoogleLogin } from 'react-google-login'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { signup, signin } from '../../actions/auth'
const initialState = { firstName: '', lastName: '', email: '', password: '' };

export default function AuthModal() {
  const dispatch = useDispatch()
  const history = useHistory();
  const [form, setForm] = useState(initialState);
  const [open, setOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setSignUp] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignup) {
      dispatch(signup(form, history))
    } else {
      dispatch(signin(form, history))

    }
  }

  const handleShowPassword = () => setShowPassword((old) => !old)

  const switchMode = () => {
    setSignUp((sign) => !sign)
    handleShowPassword(false)
  }

  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try Again Later")
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } })
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button class="ui orange button">Sign in</button>}
    >
      <form class="ui form" style={{ margin: '15px' }} onSubmit={handleSubmit}>


        <div class='ui inverted segment'>
          <Link to='/'>
            <button class='ui right floated button' onClick={() => setOpen(false)}>
              X
        </button>
          </Link>


          <Modal.Header style={{ textAlign: 'center', fontSize: '40px' }}>{isSignup ? 'Sign Up' : 'Sign In'}</Modal.Header>

          <Modal.Content>
            {
              isSignup && (
                <div>
                  <label>First Name</label>
                  <input class='field' onChange={handleChange} name="firstName" ></input>


                  <label>Last Name</label>
                  <input class='field' onChange={handleChange} name="lastName" ></input>
                </div>


              )
            }

            <label>Email</label>
            <input
              name="email"
              class='field'
              onChange={handleChange}
              placeholder='Email'
              type="email" />

            <label>Password</label>
            <input
              name="password"
              class='field'
              onSubmit={handleSubmit}
              onChange={handleChange}
              placeholder='Password' type={showPassword ? 'text' : 'password'} />
            <br />  <br />
            <button class='ui mini button' onClick={handleShowPassword}><i class='eye icon' />{showPassword ? 'Hide Password' : 'Show Password'}</button>

            <button
              onClick={handleSubmit}
              class='ui right floated orange button'
              type="submit"
            >{isSignup ? 'Sign Up' : 'Sign In'}</button>

            <GoogleLogin
              clientId="489312559331-8lcppthhivcgf1nkjt4kko6i90apfq33.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  class='ui  right floated blue button'
                  onClick={renderProps.onClick} disabled={renderProps.disabled}
                >
                  <i class="google icon"></i>  Continue with Google
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <button class='ui right floated  button' onClick={switchMode}>
              {isSignup ? "Already have an account ? Sign In" : "Don't have an account? Sign Up"}
            </button>




          </Modal.Content>
          <Modal.Actions>


          </Modal.Actions>

        </div>
      </form>
    </Modal >




  )
}

