import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import {tint} from 'polished'

import {colors} from '../styles/config'

import {SmallButton} from './Button'
import Spinner from './Spinner'

// -------------------------------------------------------------
// Functions.
// -------------------------------------------------------------

async function createLink(key, shareLink) {
  const result = await axios
    .get('http://localhost:3002/', {
      params: {
        key,
        link: shareLink
      }
    })
    .then(res => res.data)

  if (result.code && result.code !== 200) {
    return {data: '', hasError: true, message: result.message}
  }

  return {data: result.data, hasError: false}
}

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const BuildContainer = styled.div`
  display: flex;
  align-items: center;

  line-height: normal;
`

const Aside = styled.aside`
  margin-right: 1rem;
`

const Main = styled.section`
  flex: 1;
`

const Icon = styled.img`
  display: block;
  width: auto;
  height: 7rem;

  border-radius: 15px;
`

const Title = styled.h2`
  flex: 1;
  display: flex;
  align-items: center;

  margin-bottom: 0.5rem;

  text-transform: uppercase;

  span {
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;

    color: white;

    background: ${colors.brand};
    border-radius: 5px;

    font-family: monospace;
    font-size: 0.6em;
    font-weight: normal;
  }
`

const Content = styled.div`
  font-size: 0.8em;
`

const Info = styled.p`
  color: ${tint(0.5, colors.page.content)};

  strong {
    text-transform: capitalize;
  }
`

const Commit = styled.p`
  display: inline-block;

  padding: 0 0.25rem;

  color: ${tint(0.75, colors.brand)};

  background-color: ${tint(0.05, colors.page.content)};
  border: 1px solid ${tint(0.5, colors.brand)};
  border-radius: 2px;

  font-family: monospace;
  text-transform: lowercase;
`

const DownloadLink = styled.a`
  display: block;

  text-transform: uppercase;
  cursor: pointer;
`

class Download extends React.Component<any, any> {
  state = {data: null, hasError: false, message: null, isLoading: false}

  handleClick = e => {
    e.preventDefault()

    this.setState({isLoading: true})

    createLink(
      '/* TODO get key from context or pass this as a child to <Build />',
      this.props.share
    ).then(res => {
      this.setState({...res, isLoading: false})
    })
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />
    }

    if (this.state.data) {
      return (
        <DownloadLink href={this.state.data} target="_blank">
          Open Link
        </DownloadLink>
      )
    }

    return (
      <div>
        <SmallButton type="button" onClick={this.handleClick}>
          {this.props.children}
        </SmallButton>

        {this.state.hasError && <p>Error! Try again.</p>}
      </div>
    )
  }
}

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

interface BuildParams {
  buildNumber: number
  buildTypeName: string
  buildTypeId: string
  buildTime: string
  platform: string
  projectName: string
  projectId: string
  org: string
  icon: string
  share: string
  commit: string
}

export default (props: BuildParams) => {
  const iconLabel = `${props.projectName} — build #${props.buildNumber} (${
    props.platform
  })`

  return (
    <BuildContainer>
      <Aside>
        <Icon src={props.icon} alt={iconLabel} title={iconLabel} />
      </Aside>
      <Main>
        <Title>
          <span>#{props.buildNumber}</span>
          {props.projectName}
        </Title>
        <Content>
          <Info>
            <strong>{props.org}</strong> — {props.buildTypeName}
          </Info>
          <Commit>{props.commit}</Commit>
        </Content>
      </Main>
      <Download share={props.share}>Create Link</Download>
    </BuildContainer>
  )
}
