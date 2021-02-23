import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Card, { CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import dynamic from 'next/dynamic'
import { CircularProgress } from 'material-ui/Progress';


// const ImageLoader = dynamic({
//     modules: (props) => {
//         const components = {
//             DynamicImage: import('../components/SingleImage'),
//         }
// return components
//   },

// render: (props, { DynamicImage }) => (<DynamicImage uri={props.uri} altText={props.altText} isVisible={props.isVisible} />) })

const ImageLoader = dynamic(
    import('../components/SingleImage'),
    {
        loading: () => (<CircularProgress size={100} />)
    }
)


class ImageCard extends Component {
    state = {
        imageName: this.props.images.front
    };
    switchImage = () => {
        const images = this.props.images;

        this.setState((function (state) {
            return { imageName: state.imageName !== images.back ? images.back : images.front }
        }))

    }
    render() {
        const { classes, size, imagePath, images, altText } = this.props;
        const { imageName } = this.state;

        return (
            <Grid item xs={size} sm={3} md={2} onMouseEnter={this.switchImage} onMouseLeave={this.switchImage}>
                <Card className={classes.card}>
                    <CardMedia>
                        <ImageLoader uri={`${imagePath}${images.front}`} altText={altText} isVisible={imageName === images.front} />
                        <ImageLoader uri={`${imagePath}${images.back}`} altText={altText} isVisible={imageName === images.back} />
                    </CardMedia>
                </Card>
            </Grid>
        );
    }
}
export default ImageCard