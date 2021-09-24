import React, { Component } from 'react'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      user: "",
      password: ""
    }
    this.alert = this.alert.bind(this)
  }
  handleChange1(value) {
    this.setState({ user: value })
  }
  handleChange2(value) {
    this.setState({ password: value })
  }
  alert() {
    alert(`Username: ${this.state.user} Password: ${this.state.password}`)
  }
  render(){
    return (
      <div>
        <input type="text" onChange={ (e) => this.handleChange1(e.target.value)}/>
        <input type="text" onChange={ (e) => this.handleChange2(e.target.value)}/>
        <button onClick={this.alert}>Login</button>
      </div>
    )
  }
}
export default Login