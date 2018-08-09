import styled from 'styled-components'

import {colors} from '../styles/config'

// From: https://loading.io/css/

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Container = styled.div`
  display: inline-block;
  position: relative;

  width: 64px;
  height: 64px;

  div {
    position: absolute;
    top: 27px;

    width: 11px;
    height: 11px;

    background: ${colors.brand};
    border-radius: 50%;

    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 6px;
    animation: spinner-lds-ellipsis1 0.6s infinite;
  }

  div:nth-child(2) {
    left: 6px;
    animation: spinner-lds-ellipsis2 0.6s infinite;
  }

  div:nth-child(3) {
    left: 26px;
    animation: spinner-lds-ellipsis2 0.6s infinite;
  }

  div:nth-child(4) {
    left: 45px;
    animation: spinner-lds-ellipsis3 0.6s infinite;
  }

  @keyframes spinner-lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes spinner-lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes spinner-lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default () => {
  return (
    <Container>
      <div />
      <div />
      <div />
      <div />
    </Container>
  )
}
