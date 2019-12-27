import React, { Component } from 'react'
import {Button, TextField} from '@material-ui/core';

import ApiService from '../../helpers/apiService'

class Index extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  passwordChangeHandler(val) {
    this.setState({password: val})
  }

  emailChangeHandler(val) {
    this.setState({email: val})
  }

  submitHandler() {
    const { email, password } = this.state
    ApiService.post('login', {email, password})
      .then((result) => {
        if(result.ok) {
          console.log(result.token)
          //todo Store token into an higherOrderComponent which is extended by the app components
          //where on onComponentWillMount / componentWillUpdate method should be checked the token, and redirects the
          //user to login if it is expired; and from where it is read when api is called
        }
        console.log("logged!")
      })


  }

  render(){
    const { password, email } = this.state
    return(
      <div>
        <form
          // onSubmit={this.submitHandler}
        >
          <TextField
            value={email}
            onChange={(e, val) => {this.emailChangeHandler(e.target.value)}}
            hintText="Email"
            floatingLabelText="Email"
            floatingLabelFixed={true}
            placeholder="email"
          />
          <br />
          <TextField
            value={password}
            onChange={(e, val) => {this.passwordChangeHandler(e.target.value)}}
            hintText="Confirmed Password"
            floatingLabelText="Confirmed Password"
            floatingLabelFixed={true}
            type="password"
            placeholder="password"
          />
          <br />
          <Button
            // type="submit"
            onClick={this.submitHandler.bind(this)}
          >Log in</Button>
        </form>
      </div>
    )
  }
}

export default Index