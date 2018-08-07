import React from 'react'
import styled from 'styled-components'

import {SmallButton} from './Button'
import Spinner from './Spinner'
import {createLink} from '../services/create-link'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const StyledLink = styled.a`
  display: block;

  text-transform: uppercase;
  cursor: pointer;
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default class extends React.Component<any, any> {
  state = {data: null, hasError: false, message: null, isLoading: false}

  handleClick = e => {
    e.preventDefault()

    this.setState({isLoading: true})

    createLink(this.props.query.key, this.props.share).then(res => {
      this.setState({...res, isLoading: false})
    })
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />
    }

    if (this.state.data) {
      return (
        <StyledLink href={this.state.data} target="_blank">
          Open Link
        </StyledLink>
      )
    }

    return (
      <div>
        <SmallButton type="button" onClick={this.handleClick}>
          Create Link
        </SmallButton>

        {this.state.hasError && <p>Error</p>}
      </div>
    )
  }
}
