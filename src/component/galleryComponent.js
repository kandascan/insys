import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImages } from '../actions/galleryActions';
import Image from './imageComponent';

class galleryComponent extends Component {

    componentDidMount = () => {
        this.props.getImages();
    }
  render() {
    
    const { photos } = this.props.gallery;
    console.log(photos)

    const images = photos.map((item) => (
      <Image key={item.id} image={item.url} alt={item.title} title={item.title} />
    ))

    return (
      <div className="gallery">
        {images}
      </div>
    )
  }
}

galleryComponent.propTypes = {
    getImages: PropTypes.func.isRequired,
    gallery: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    gallery: state.gallery
  });
export default connect(mapStateToProps, {getImages})(galleryComponent);