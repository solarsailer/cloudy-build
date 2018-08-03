import {MouseEventHandler} from 'react'
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
type Params = {
  type: ButtonType
  children: string | React.ReactNode
  onClick?: MouseEventHandler
}

export default (props: Params) => {
  return <Button {...props}>{props.children}</Button>
}
