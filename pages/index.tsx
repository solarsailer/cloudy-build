import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Form from '../components/Form'
import Field from '../components/Field'
import {Button} from '../components/Button'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const About = styled.article`
  padding-top: 4rem;
  font-size: 0.8em;
  font-style: italic;
  text-align: center;
`

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
            </a>
            .
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
        description={
          <>
            <strong>Optional</strong> — will search all projects if empty.
          </>
        }
        required={false}
      >
        Project
      </Field>

      <Button type="submit">Show Latest Builds</Button>

      <About>
        <p>
          Cloudy Build don't store your data.{' '}
          <Link href="/about">
            <a>About.</a>
          </Link>
        </p>
      </About>
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
