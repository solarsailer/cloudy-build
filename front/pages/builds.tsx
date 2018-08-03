import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Build from '../components/Build'
import Spinner from '../components/Spinner'

import {tint} from 'polished'

import {colors} from '../styles/config'

// -------------------------------------------------------------
// Functions.
// -------------------------------------------------------------

async function getBuilds({key, org, project}): Promise<BuildResponse> {
  const result = await axios
    .get('http://localhost:3001/', {
      params: {
        key,
        org,
        project
      }
    })
    .then(res => res.data)

  if (result.code && result.code !== 200) {
    return {data: [], hasError: true, message: result.message}
  }

  return {data: result.data, hasError: false}
}

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

const LoadingBlock = styled.div`
  text-align: center;

  p {
    font-size: 0.75em;
    font-style: italic;
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

interface BuildResponse {
  data: Array<any>
  hasError: boolean
  message?: string
}

export default class extends React.Component<any, BuildResponse> {
  state = {data: [], hasError: false, message: null}

  static async getInitialProps({query}) {
    return {query}
  }

  componentDidMount() {
    this.request()
  }

  request = () => {
    this.setState({data: [], hasError: false})
    getBuilds(this.props.query).then(res => this.setState({...res}))
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBlock>
          <p className="main">
            <strong>Snap!</strong> We cannot find any build.
          </p>

          <p>
            Check if your organization or API key is correct.
            {this.state.message && (
              <>
                <br />
                <span>({this.state.message})</span>
              </>
            )}
          </p>

          <p>
            <a href="#" onClick={this.request}>
              Try Again
            </a>{' '}
            | <a href="/">Restart</a>
          </p>
        </ErrorBlock>
      )
    }

    if (this.state.data.length === 0) {
      return (
        <LoadingBlock>
          <Spinner />
          <p>Looking for builds…</p>
        </LoadingBlock>
      )
    }

    return (
      <ul>
        {this.state.data.map(x => (
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
