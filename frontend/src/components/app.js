import React from "react"

class App extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch("https://beta.stockzoom.com/api-token-auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)

        // Login was successful.
        // localStorage.setItem("token", json.token)
        // localStorage.setItem("userId", json.userId)
      })
      .catch(err => {
        console.log("Login failed", err)
      })
  }

  handleEmail = event => {
    this.setState({ email: event.target.value })
  }

  handlePassword = event => {
    this.setState({ password: event.target.value })
  }

  render() {
    return (

      <div>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <label>
              Email:
            </label>
            <input type="text" value={this.state.email} onChange={this.handleEmail} name="email" require/>
            <label>
              Password:
            </label>
            <input type="password" value={this.state.password} onChange={this.handlePassword} name="password" require/>
            <label>
              <input type="submit" value="Submit" className="button" />
            </label>
          </form>
        </div>
      </div>
    )
  }

}

export default App
