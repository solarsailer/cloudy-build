import React from 'react'

import Form from '../components/Form'
import Field from '../components/Field'
import Button from '../components/Button'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

function getBuilds() {
  // Do Something.
}

const Content = () => {
  return (
    <Form onReady={getBuilds}>
      <Field
        id="key"
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
      <Field id="org" description="Your company name, probably.">
        Organization
      </Field>

      <Button type="submit">Find All Builds</Button>
    </Form>
  )
}

// -------------------------------------------------------------
// Page.
// -------------------------------------------------------------

export default () => {
  return (
    <div>
      <Content />
    </div>
  )
}
