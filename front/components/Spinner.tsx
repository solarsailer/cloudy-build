import styled, {keyframes} from 'styled-components'

import {colors} from '../styles/config'

// From: https://loading.io/css/

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const anim1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const anim2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`

const anim3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

const Container = styled.div`
  display: inline-block;
  position: relative;

  width: 64px;
  height: 64px;
`

const AbstractChild = styled.div`
  position: absolute;
  top: 27px;

  width: 11px;
  height: 11px;

  background: ${colors.brand};
  border-radius: 50%;

  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`

const Child1 = AbstractChild.extend`
  left: 6px;
  animation: ${anim1} 0.6s infinite;
`
const Child2 = AbstractChild.extend`
  left: 6px;
  animation: ${anim2} 0.6s infinite;
`

const Child3 = AbstractChild.extend`
  left: 26px;
  animation: ${anim2} 0.6s infinite;
`

const Child4 = AbstractChild.extend`
  left: 45px;
  animation: ${anim3} 0.6s infinite;
`

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

export default () => {
  return (
    <Container>
      <Child1 />
      <Child2 />
      <Child3 />
      <Child4 />
    </Container>
  )
}
