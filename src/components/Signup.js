import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class Signup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: '', lastName: '', email: '', emailConfirm: '', password: '', passwordConfirm: ''
    }
  }

  handleChange = (event, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { firstName, lastName, email, emailConfirm, password, passwordConfirm } = this.state
  }

  render() {
    const { firstName, lastName, email, emailConfirm, password, passwordConfirm } = this.state
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input label='First Name' placeholder='First Name...' name='firstName' value={firstName} onChange={this.handleChange} />
            <Form.Input label='Last Name' placeholder='Last Name...' name='lastName' value={lastName} onChange={this.handleChange} />
            <Form.Input label='Email' placeholder='Email...' name='email' value={email} onChange={this.handleChange} />
            <Form.Input label='Confirm Email' placeholder='Confirm Email...' name='emailConfirm' value={emailConfirm} onChange={this.handleChange} />
            <Form.Input label='Password' placeholder='Password...' name='password' value={password} onChange={this.handleChange} />
            <Form.Input label='Confirm Password' placeholder='Confirm Password...' name='passwordConfirm' value={passwordConfirm} onChange={this.handleChange} />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default Signup
// alphanumeric characters and symbols
//` ~ ! @ # $ % ^ & * ( ) _ + - = { } | [ ] \ : " ; ' < > ? , . /
