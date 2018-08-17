import React from 'react'

// -------------------------------------------------------------
// Types.
// -------------------------------------------------------------

interface Props {
  src: string
  width: string
  height: string
}

interface State {
  isLoaded: boolean
}

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const EmptyPlaceholder = ({width, height}) => <div style={{width, height}} />
const InvisibleImage = props => <img {...props} style={{display: 'none'}} />

// -------------------------------------------------------------
// Export.
// -------------------------------------------------------------

// Use an empty div to prevent "jumping" when a image is fully loaded.
export default class extends React.Component<Props, State> {
  state = {isLoaded: false}

  onLoad = () => {
    this.setState({isLoaded: true})
  }

  render() {
    if (this.state.isLoaded) {
      return this.props.children
    }

    const {width, height} = this.props

    return (
      <>
        <EmptyPlaceholder width={width} height={height} />
        <InvisibleImage src={this.props.src} onLoad={this.onLoad} />
      </>
    )
  }
}
