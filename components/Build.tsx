import React from 'react'
import styled from 'styled-components'

import {tint, rgba} from 'polished'

import LinkCreator from './LinkCreator'
import {colors} from '../styles/config'

// -------------------------------------------------------------
// Constants.
// -------------------------------------------------------------

const XS_BREAKPOINT = '350px'
const S_BREAKPOINT = '600px'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const BuildContainer = styled.div`
  display: flex;
  align-items: center;

  line-height: normal;

  @media (max-width: ${S_BREAKPOINT}) {
    flex-direction: column;
  }
`

const Aside = styled.aside`
  margin-right: 1rem;

  @media (max-width: ${S_BREAKPOINT}) {
    margin: 0;
  }
`

const Main = styled.section`
  flex: 1;

  @media (max-width: ${S_BREAKPOINT}) {
    padding: 1rem 0 2rem;
    text-align: center;
  }
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

  @media (max-width: ${S_BREAKPOINT}) {
    justify-content: center;
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

  color: ${rgba(colors.brand, 0.75)};

  background-color: ${tint(0.05, colors.page.content)};
  border: 1px solid ${tint(0.5, colors.brand)};
  border-radius: 2px;

  font-family: monospace;
  text-transform: lowercase;

  @media (max-width: ${XS_BREAKPOINT}) {
    display: none;
  }
`

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
  query: {
    key: string
  }
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
      <LinkCreator share={props.share} query={props.query} />
    </BuildContainer>
  )
}
