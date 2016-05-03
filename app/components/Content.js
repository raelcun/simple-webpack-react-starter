import React from 'react'

export default class Content extends React.Component {
  constructor() {
    super()
    this.state = { serverData: 'Click the button to hit the API' }
  }

  refreshData() {
    const xhr = new XMLHttpRequest()
    xhr.open('get', '/api/currentTime', true)
    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText)
      this.setState({ serverData: data.time })
    }
    xhr.send()
  }

  render() {
    return (
      <div>
        <p>Here is some Content <b ref='serverResponse'>{ this.state.serverData }</b></p>
        <input ref='refreshButton' type='button' onClick={ ::this.refreshData } value='Hit the server'></input>
      </div>
    )
  }
}
