import React from 'react';
import { Image, Grid } from 'semantic-ui-react'

export default class MasonaryImageController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.order_images(props.images),
      min_size: 2,
      max_size: 8
    };
    this.images = this.images.bind(this);
    this.order_images = this.order_images.bind(this);
  }

  order_images(images){
    images.sort((a, b) => {
      if (a[1] === b[1]) {
        return 0;
      } else {
        return (a[1] < b[1]) ? 1 : -1;
      }
    });

    let min_scale = images[images.length -1][1];
    let max_scale = images[0][1];
    let min_size = 2;
    let max_size = 16;

    for(let eid in images){
      let image = images[eid];

      let image_scale = ((image[1] - min_scale) / (max_scale - min_scale));
      let multiplier = max_size - min_size;
      let adjustment = min_size;
      let image_grid_size = adjustment + Math.round(multiplier * image_scale);

      console.log(image_grid_size + image)

      images[eid][2] = image_grid_size;
    }

    console.log(images);

    // The code here makes sure the images take up a row
    let temp_row = [];
    for(let eid in images){
      let count = 0;
      for(let eid2 in temp_row){
        count += temp_row[eid2];
      }
      if(count == 16 || count == 0){
        // Row is empty or full
        temp_row = [images[eid][2]];
      } else if(count + images[eid][2] <= 16) {
        if(temp_row[0] == images[eid][2]){
          // Elements on this row are already same size
          temp_row.push(images[eid][2]);
        } else if(temp_row[0] <= 2*images[eid][2]){
          // Element needs scaling upto row
          temp_row.push(temp_row[0]);
          images[eid][2] = temp_row[0];
        }
      }

    }


    console.log(images);

    return ({
      images: images,
      min_scale: min_scale,
      max_scale: max_scale,
      min_size: min_size,
      max_size: max_size
    });
  }

  images() {
    let { min_scale, max_scale, images, min_size, max_size } = this.state;
    return images.map((element) => {
      let image_location = element[0];
      let image_grid_size = element[2];

      return(
        <Grid.Column key={image_location} width={image_grid_size}>
          <Image fluid src={image_location} />
        </Grid.Column>
      );
    });
  }

  render() {
    return (
      <div className="Home">
        <Grid centered columns={16}>
          {this.images()}
        </Grid>
      </div>
    );
  }


}
