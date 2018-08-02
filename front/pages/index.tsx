import React from 'react'

import Form from '../components/Form'
import Field from '../components/Field'
import Button from '../components/Button'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Content = () => {
  return (
    <Form action="/builds">
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

      <Field
        id="project"
        description="Optional — will search all projects if empty."
      >
        Project
      </Field>

      <Button type="submit">Find Latest Builds</Button>
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
