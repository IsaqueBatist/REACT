import React, { Component } from "react";

class App extends Component{
  state = {
    usuarios: ["Pablo", "José", "Manoel"]
  }

  render(){
    const { usuarios } = this.state
    return (
      <div className="App">
        <h1>Hello World</h1>
        {usuarios.map((item) => 
          <p>{item}</p>
      )}
      </div>
    )
  }
}

export default App