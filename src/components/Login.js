import React, { Component } from 'react'
import { Button, Form, Modal, Segment } from 'semantic-ui-react'
import LoginAdapter from '../adapters/LoginAdapter'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      displayModal: false,
      user: {email: '', password: ''},
      errorStatus: {email_err: false, password_err: false}
    }
  }

  validateInput = (type, value) => {
    switch (type) {
      case 'email':
        //valid email
        return false;
      case 'password':
        return false;
      default:

    }
  }

  handleOpen = () => this.setState({ displayModal: true })

  handleClose = () => this.setState({ displayModal: false })

  handleChange = (event, { name, value }) => {
    // update validation for error status and restrict the set state
    // remove input types for phone, email, email_confirmation
    this.setState({
                    user: { ...this.state.user, [name]: value },
                    errorStatus: { ...this.state.errorStatus, [name+'_err']: this.validateInput(name, value) }
                  })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {user:this.state.user}
    LoginAdapter.login(userData)
    .then((response)=>{
      if(response.status >= 400){
        throw new Error(response.status, response.message)
      }else if (response.statuss >= 200 && response.status < 300) {
        console.log('success', response)
        this.setState({
          user: {email: '', password: ''},
          errorStatus: {email_err: '', password_err: ''}
        })
        this.handleClose()
      }
    })
  }

  render(){
    const { email, password } = this.state.user
    const { email_err, password_err } = this.state.errorStatus
    return(
      <div>
        <Modal trigger={<Button onClick={this.handleOpen}>Login</Button>}
        open={this.state.displayModal}
        onClose={this.handleClose}
        closeIcon
        >
          <Modal.Header>Login</Modal.Header>
          <Segment padded>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input label='Email'
                placeholder='Email...'
                name='email'
                value={email}
                type='email' onChange={this.handleChange} required error={email_err} />
              <Form.Input label='Password'
                placeholder='Password...'
                name='password'
                value={password}
                type='password'
                onChange={this.handleChange}
                required
                error={password_err} />
              <Form.Button content='Submit' />
            </Form>
          </Segment>
        </Modal>
      </div>
    )
  }
}

export default Login
