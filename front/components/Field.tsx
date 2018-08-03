import {ChangeEventHandler} from 'react'
import styled from 'styled-components'
import {rgba, tint} from 'polished'

import {colors} from '../styles/config'

// -------------------------------------------------------------
// Component.
// -------------------------------------------------------------

const Wrapper = styled.div`
  margin-bottom: 2.5rem;

  &:last-of-type {
    margin-bottom: 5rem;
  }
`

const TopRow = styled.p`
  display: flex;
  align-items: baseline;

  margin-bottom: 0.5rem;

  text-transform: uppercase;
`

const MainLabel = styled.label`
  font-weight: 900;

  flex: 1;
`

const Required = styled.span`
  color: ${colors.brand};
  font-weight: normal;
`

const MainInput = styled.input`
  width: 100%;
  padding: 1rem;

  color: ${colors.brand};
  border: 1px solid #dddddd;
  border-radius: 0.5rem;

  font-family: inherit;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;

  ::placeholder {
    color: ${rgba(colors.page.content, 0.25)};
  }
`

const SaveWidget = styled.label`
  font-size: 0.8em;

  span {
    margin-right: 5px;
  }
`

const Description = styled.p`
  padding-top: 0.5rem;

  color: ${tint(0.5, colors.page.content)};
  font-size: 0.8em;
  font-style: italic;
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

interface Parameters {
  id: string
  value?: string
  children: string
  description?: string | JSX.Element
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  required?: boolean
}

export default ({
  children,
  description,
  id,
  value,
  placeholder,
  onChange,
  required = true
}: Parameters) => {
  return (
    <Wrapper>
      <TopRow>
        <MainLabel htmlFor={id}>
          {children}
          {required ? <Required>*</Required> : ''}
        </MainLabel>

        <SaveWidget>
          <span>Save</span>
          <input type="checkbox" />
        </SaveWidget>
      </TopRow>

      <p>
        <MainInput
          required={required}
          type="text"
          name={id}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </p>

      {description && <Description>{description}</Description>}
    </Wrapper>
  )
}
