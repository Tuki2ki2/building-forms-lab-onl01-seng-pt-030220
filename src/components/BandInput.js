// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

state = {
  name:"" 
}

handleChange = event => {
  this.setState({
    name:event.target.value 
  })
}


handleSubmit = event => {
  event.preventDefault()
  this.props.addBand({...this.state})
}

  render() {
    return(
      <div>
  <form onSubmit={this.handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
  </label>
  <input type="submit" value="Submit" />
</form>
        Band Input
      </div>
    )
  }
}

export default BandInput
