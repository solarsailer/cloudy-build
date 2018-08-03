import styled from 'styled-components'
import builds from 'pages/builds'

import {tint} from 'polished'

import {colors} from '../styles/config'

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

const Download = styled.a`
  display: block;

  text-transform: uppercase;
  cursor: pointer;
`

const Icon = styled.img`
  display: block;
  width: auto;
  height: 7rem;

  border-radius: 10px;
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
      <Download>Create Link</Download>
    </BuildContainer>
  )
}
