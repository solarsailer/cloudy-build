import styled from 'styled-components'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Footer = styled.footer`
  padding: 2rem;

  color: white;
  font-size: 0.8em;
  text-align: center;
  text-transform: white;
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default () => {
  return (
    <Footer className="page-footer" id="page_footer">
      Made with ♥︎ by <a href="https://solarsailer.net/">Matthieu Oger</a>
    </Footer>
  )
}
