import React from "react"

class App extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch("https://beta.stockzoom.com/api/v1/me/portfolios/", {
      method: "GET",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFjbmVfdC5oZW1tZWwiLCJvcmlnX2lhdCI6MTU0MTY2ODkxMywidXNlcl9pZ
     },
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
