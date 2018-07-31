import styled from 'styled-components'
import {colors} from '../styles/config'

// -------------------------------------------------------------
// Component.
// -------------------------------------------------------------

const Button = styled.button`
  display: block;

  margin: 0 auto;
  padding: 1.5rem 3rem;

  color: white;
  background: ${colors.brand};

  border: none;
  border-radius: 0.5rem;

  font-weight: 800;
  text-transform: uppercase;
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

type ButtonType = 'button' | 'submit' | 'reset'
type Params = {type: ButtonType; children: string}

export default (props: Params) => {
  return <Button type={props.type}>{props.children}</Button>
}
