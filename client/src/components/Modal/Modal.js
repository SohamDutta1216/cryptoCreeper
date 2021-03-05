import React, { useState } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { GoogleLogin } from 'react-google-login'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

export default function AuthModal() {
  const [form, setForm] = useState(initialState);
  const [open, setOpen] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });



  return (

    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button class="ui orange button">Sign in</button>}
    >
      <form class="ui form" style={{ margin: '5px' }}>
        <div class='ui inverted segment'>
          <Modal.Header style={{ textAlign: 'center', fontSize: '40px' }}>Sign In</Modal.Header>
          <Modal.Content>

            <div >

              <label>First Name</label>
              <input handleChange={handleChange} name="firstName" label="firstName"></input>
            </div>

            <div>
              <label>Last Name</label>
              <input handleChange={handleChange} name="lastName" label="lastName"></input>

            </div>

            <label>Email</label>
            <input
              handleChange={handleChange}
              placeholder='Email' type="email" />

            <label>Password</label>
            <input
              handleChange={handleChange}
              placeholder='Password' type="password" />


            <div class="ui right aligned inverted segment" >
              <button class='ui button' onClick={() => setOpen(false)}>
                Close
        </button>
              <GoogleLogin
                clientId="489312559331-8lcppthhivcgf1nkjt4kko6i90apfq33.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    class='ui blue button'
                    onClick={renderProps.onClick} disabled={renderProps.disabled}
                  >
                    <i class="google icon"></i>  Continue with Google
                  </button>
                )}

                cookiePolicy="single_host_origin"
              />
              <button
                class='ui orange button'
                type="submit"
              >Sign In</button>
            </div>
          </Modal.Content>
          <Modal.Actions>


          </Modal.Actions>

        </div>
      </form>
    </Modal >




  )
}

