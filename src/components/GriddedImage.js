import React from 'react';
import { Menu, Segment, Image } from 'semantic-ui-react'

export default class GriddedImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
      scale: props.scale
    }
  }

  render() {
    var { image, scale } = this.state
    return (
      <div className="Home">
        <Image src={image} size={scale} />
      </div>
    );
  }


}
