import styled from 'styled-components'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Page = styled.div`
  padding: 1.5rem;
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default ({children}) => {
  return (
    <Page className="page" id="page">
      {children}
    </Page>
  )
}
