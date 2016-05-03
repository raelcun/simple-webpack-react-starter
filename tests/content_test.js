import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react/lib/ReactTestUtils'
import { expect } from 'chai'
import Content from '../app/components/Content'

describe('root', function () {
  it('downloads data from the server when the button is clicked', () => {
    const content = TestUtils.renderIntoDocument(<Content/>)

    // mock the xmlhttprequest
    const xhr = sinon.useFakeXMLHttpRequest()
    const requests = []
    xhr.onCreate = req => requests.push(req)

    // click the bytton
    TestUtils.Simulate.click(ReactDOM.findDOMNode(content.refs.refreshButton))

    // our fake response
    requests[0].respond(200, { "Content-Type": "application/json" }, JSON.stringify({ time: 'testing123' }))

    // check the server response
    const response = ReactDOM.findDOMNode(content.refs.serverResponse)
    expect(response.textContent).to.equal('testing123')

    // stop faking the xmlhttprequest
    xhr.restore()
  })
})
