import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Build from '../components/Build'

import {tint} from 'polished'

import {colors} from '../styles/config'

// -------------------------------------------------------------
// Components.
// ------------------------------------------------------------

const Row = styled.li`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${tint(0.25, colors.page.content)};

  &:last-of-type {
    margin: 0;
    padding: 0;
    border: none;
  }
`

const ErrorBlock = styled.div`
  text-align: center;

  color: ${tint(0.5, colors.page.content)};

  p {
    margin-bottom: 2rem;
  }

  p:last-of-type {
    margin: 0;
  }

  span {
    font-size: 0.75em;
    font-style: italic;
  }
`

// -------------------------------------------------------------
// Page.
// -------------------------------------------------------------

export default class extends React.Component<any, any> {
  static async getInitialProps({query}) {
    const result = await axios
      .get('http://localhost:3001/', {
        params: {
          key: query.key,
          org: query.org,
          project: query.project
        }
      })
      .then(res => res.data)

    if (result.code && result.code !== 200) {
      return {builds: [], hasError: true, error: result.message}
    }

    return {builds: result.data, hasError: false}
  }

  render() {
    console.log(this.props.builds)
    if (this.props.hasError) {
      return (
        <ErrorBlock>
          <p className="main">
            <strong>Snap!</strong> We cannot find any build.
          </p>

          <p>
            Check if your organization or API key is correct.<br />
            <span>({this.props.error})</span>
          </p>

          <p>
            <a href="/">Try Again</a>
          </p>
        </ErrorBlock>
      )
    }

    return (
      <ul>
        {this.props.builds.map(x => (
          <Row
            key={`${x.org}-${x.projectId}-${x.buildTypeId}-${x.buildNumber}`}
          >
            <Build {...x} />
          </Row>
        ))}
      </ul>
    )
  }
}
