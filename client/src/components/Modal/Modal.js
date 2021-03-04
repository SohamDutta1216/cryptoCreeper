import React, { useState } from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import { GoogleLogin } from 'react-google-login'

export default function AuthModal() {
  const [open, setOpen] = useState(false)


  return (

    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button class="ui orange button">Sign in</button>}
    >
      <Modal.Header style={{ textAlign: 'center' }}>Sign in</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' type="email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type="password" />
          </Form.Field>

          <GoogleLogin
            clientId="489312559331-8lcppthhivcgf1nkjt4kko6i90apfq33.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                onClick={renderProps.onClick} disabled={renderProps.disabled}
                color="blue">
                <i class="google icon"></i>  Continue with Google
              </Button>
            )}
            cookiePolicy="single_host_origin"
          />

        </Form>

      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          color="orange"
          onClick={() => setOpen(false)}
        >Sign In</Button>

      </Modal.Actions>
    </Modal>
  )
}

