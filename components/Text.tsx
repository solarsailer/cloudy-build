import styled from 'styled-components'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Text = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 2rem;
  }

  > :last-child {
    margin-bottom: 0;
  }

  h1 {
    font-size: 1.5em;
    text-align: center;
    text-transform: uppercase;
  }

  h2 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 1.2em;
  }
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default props => {
  return <Text {...props} />
}
