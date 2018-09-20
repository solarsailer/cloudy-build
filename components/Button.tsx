import {MouseEventHandler} from 'react'
import styled from 'styled-components'
import {colors} from '../styles/config'

// -------------------------------------------------------------
// Types.
// -------------------------------------------------------------

type ButtonType = 'button' | 'submit' | 'reset'

type Params = {
  type: ButtonType
  children: string | React.ReactNode
  onClick?: MouseEventHandler
}

// -------------------------------------------------------------
// Functions.
// -------------------------------------------------------------

function createButton(ButtonWithStyles) {
  return (props: Params) => (
    <ButtonWithStyles {...props}>{props.children}</ButtonWithStyles>
  )
}

// -------------------------------------------------------------
// Component.
// -------------------------------------------------------------

const Base = styled.button`
  display: block;

  margin: 0 auto;

  color: white;
  background: ${colors.brand};

  border: none;
  border-radius: 0.5rem;

  cursor: pointer;

  font-weight: 800;
  text-transform: uppercase;
`

const ButtonStyled = styled(Base)`
  padding: 1.5rem 3rem;
`

const SmallButtonStyled = styled(Base)`
  padding: 1rem 1.5rem 0.8rem;
  font-size: 0.8em;
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export const Button = createButton(ButtonStyled)
export const SmallButton = createButton(SmallButtonStyled)
