import styled from 'styled-components'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Main = styled.main`
  max-width: 600px;

  margin: 0 auto;
  padding: 4rem;

  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2rem rgba(black, 0.25);
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default ({children}) => {
  return (
    <Main className="page-content" id="page_content" role="main">
      {children}
    </Main>
  )
}
