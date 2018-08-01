import React from 'react'

import Field from '../components/Field'
import Button from '../components/Button'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

class Form extends React.Component<{}, {key: string; org: string}> {
  state = {key: '', org: ''}

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  handleKeyChange = e => {
    this.setState({key: e.target.value})
  }

  handleOrgChange = e => {
    this.setState({org: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Field
          id="org"
          value={this.state.org}
          onChange={this.handleOrgChange}
          description="Your company name, probably."
        >
          Organization
        </Field>

        <Field
          id="key"
          value={this.state.key}
          onChange={this.handleKeyChange}
          placeholder="3cc734e8e7c41a080149a3fead5e0363"
          description={
            <>
              Available in the{' '}
              <a href="https://developer.cloud.unity3d.com/preferences/">
                Unity Cloud Build preferences
              </a>.
            </>
          }
        >
          API Key
        </Field>

        <Button type="submit">Get Latest Builds</Button>
      </form>
    )
  }
}

// -------------------------------------------------------------
// Page.
// -------------------------------------------------------------

export default () => {
  return (
    <div>
      <Form />
    </div>
  )
}
