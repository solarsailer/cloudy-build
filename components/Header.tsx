import styled from 'styled-components'

import {colors} from '../styles/config'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Header = styled.header`
  padding: 2rem;

  color: white;
  text-align: center;
`

const Title = styled.h1`
  color: ${colors.brand};
  font-weight: 900;
  text-transform: uppercase;

  a {
    border-bottom: none;
    text-decoration: none;
  }
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default () => {
  return (
    <Header className="page-header" id="page_header">
      <Title>
        <a href="/">Cloudy Build</a>
      </Title>
      <p>
        Get your latest{' '}
        <a href="https://unity3d.com/services/cloud-build">Unity Cloud Build</a>{' '}
        install links in a few seconds.
      </p>
    </Header>
  )
}
