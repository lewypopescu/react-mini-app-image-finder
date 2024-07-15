import React, { Component } from 'react';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  componentDidMount() {
    this.lightbox = new SimpleLightbox(`.${styles.gallery} a`);
  }

  componentDidUpdate() {
    if (this.lightbox) {
      this.lightbox.refresh();
    } else {
      this.lightbox = new SimpleLightbox(`.${styles.gallery} a`);
    }
  }

  componentWillUnmount() {
    if (this.lightbox) {
      this.lightbox.destroy();
    }
  }

  render() {
    return (
      <ul className={styles.gallery}>
        {this.props.images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
