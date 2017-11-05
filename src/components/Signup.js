import React, { Component } from 'react'
import { Button, Form, Modal, Segment } from 'semantic-ui-react'
import SignupAdapter from '../adapters/SignupAdapter'

class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      displayModal: false,
      user: {first_name: '', last_name: '', email: '', email_confirmation: '', phone: '', password: '', password_confirmation: ''},
      errorStatus: {first_name_err: false, last_name_err: false, email_err: false, email_confirmation_err: false, phone_err: false, password_err: false, password_confirmation_err: false}
    }
  }

  validateInput = (type, value) => {
    //returns true if invalid
    switch (type) {
      case 'first_name':
        //1-30 letters
        return false;
      case 'last_name':
        //1-30 letters
        return false;
      case 'email':
        //valid email
        return false;
      case 'email_confirmation':
        //matches email
        return false;
      case 'phone':
        //valid phone #
        return false;
      case 'password':
        // alphanumeric characters and symbols
        //` ~ ! @ # $ % ^ & * ( ) _ + - = { } | [ ] \ : " ; ' < > ? , . /
        return false;
      case 'password_confirmation':
        //matches password
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
    SignupAdapter.signup(userData)
    .then((response)=>{
      if(response.status >= 400){
        //alert user of why account wasn't created
        throw new Error(response.status, response.message)
      }else if (response.status >= 200 && response.status < 300) {
        console.log('success', response)
        //alert for created account
        this.setState({
          user: {first_name: '', last_name: '', email: '', email_confirmation: '', phone: '', password: '', password_confirmation: ''},
          errorStatus: {first_name_err: false, last_name_err: false, email_err: false, email_confirmation_err: false, phone_err: false, password_err: false, password_confirmation_err: false}
        })
        this.handleClose()
        // redirect to home page
      }
    })
  }

  render() {
    const { first_name, last_name, email, email_confirmation, phone, password, password_confirmation } = this.state.user
    const { first_name_err, last_name_err, email_err, email_confirmation_err, phone_err, password_err, password_confirmation_err } = this.state.errorStatus
    // console.log(this.state)
    return(
      <div>
        <Modal trigger={<Button onClick={this.handleOpen}>Sign Up</Button>}
          open={this.state.displayModal}
          onClose={this.handleClose}
          closeIcon
        >
          <Modal.Header>Create an Account</Modal.Header>
          <Segment padded>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group unstackable widths={2}>
                <Form.Input label='First Name'
                  placeholder='First Name...'
                  name='first_name'
                  value={first_name}
                  onChange={this.handleChange}
                  required
                  error={first_name_err} />
                <Form.Input label='Last Name'
                  placeholder='Last Name...'
                  name='last_name'
                  value={last_name}
                  onChange={this.handleChange}
                  required error={last_name_err} />
              </Form.Group>
              <Form.Input label='Email'
                placeholder='Email...'
                name='email'
                value={email}
                type='email' onChange={this.handleChange} required error={email_err} />
              <Form.Input label='Confirm Email'
                placeholder='Confirm Email...'
                name='email_confirmation'
                value={email_confirmation}
                type='email'
                onChange={this.handleChange}
                required
                error={email_confirmation_err} />
              <Form.Input label='Phone Number'
                placeholder='Phone Number...'
                name='phone'
                value={phone}
                type='number'
                onChange={this.handleChange}
                required
                error={phone_err} />
              <Form.Input label='Password'
                placeholder='Password...'
                name='password'
                value={password}
                type='password'
                onChange={this.handleChange}
                required
                error={password_err} />
              <Form.Input label='Confirm Password'
                placeholder='Confirm Password...'
                name='password_confirmation'
                value={password_confirmation}
                type='password'
                onChange={this.handleChange}
                required
                error={password_confirmation_err} />
              <Form.Button content='Submit' />
            </Form>
          </Segment>
        </Modal>
      </div>
    )
  }
}

export default Signup
