import React, { Component } from "react";
import cssPhotography from "./photography.module.css";
import PhotoGallery from "./GalleryHandler";
import axios from "axios";
import { grAPI } from "../../AxiosOrders";
import InfiniteScroll from "react-infinite-scroll-component";
import Insta from "./InstaWidget/Insta";

class Photography extends Component {
  state = {
    albums: [],
    albumLength: 0,
    loaded: false,
    isDisplayed: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getPhotos(0);
  }

  getPhotos = (start) => {
    axios
      .post(`${grAPI}/backendPhotos`, {
        lengthStart: start,
        album: "ALL",
      })
      .then((res) => {
        this.setState((prevState) => ({
          albums: [...prevState.albums, ...res.data.albums],
          albumLength: res.data.albumLength || prevState.albumLength,
          loaded: true,
          isDisplayed: "photos",
        }));
      })
      .catch(() => {
        this.setState({
          isDisplayed: "error",
        });
      });
  };

  PhotosBody = () => {
    const { albumLength, loaded, albums } = this.state;
    const isInstaVisible = albums.length === albumLength;
    return (
      <div className={cssPhotography.fadeIn}>
        <div className={cssPhotography.photoHeader}>Photography</div>
        <div className={cssPhotography.photographySubHeader}>
          I picked up photography as a hobby about a decade ago. Working as a
          creative director for New Orleans’{" "}
          <a href="https://www.whereyat.com/" target="_blank" rel="noreferrer">
            <i>Where Y’at Magazine</i>
          </a>{" "}
          at the time, I observed the artistic and technical techniques of
          commissioned professionals while directing shoots for the publication.
          As my skills grew, I began contributing music and travel photographs
          to <i>Where Y’at</i>, as well as other local and regional
          publications.
        </div>
        <div className={cssPhotography.galleryContainer}>
          {albums.length > 0 ? (
            <InfiniteScroll
              dataLength={albums.length}
              next={() => this.getPhotos(albums.length)}
              hasMore={albums.length !== albumLength}
              loader={
                <img
                  className={cssPhotography.loader}
                  src="/images/loadingImage.gif"
                  alt="loading"
                />
              }
            >
              <div
                className={cssPhotography.gridContainer}
                style={{ marginTop: "30px" }}
              >
                {loaded
                  ? albums.map((album, i) => {
                      const { title, images } = album;
                      return (
                        <PhotoGallery key={i} album={title} images={images} />
                      );
                    })
                  : ""}
              </div>
            </InfiniteScroll>
          ) : (
            <img
              className={cssPhotography.loader}
              src="/images/loadingImage.gif"
              alt="loading"
            />
          )}
        </div>
        <Insta isShown={isInstaVisible} />
      </div>
    );
  };

  ErrorBody = () => {
    return (
      <div className={`${cssPhotography.fadeIn}`}>
        <div className={cssPhotography.photoHeader}>Error</div>
        <div className={cssPhotography.errorText}>
          Sorry, we cannot load this content right now. Please try again later.
        </div>
      </div>
    );
  };

  render() {
    const { isDisplayed } = this.state;
    const { PhotosBody, ErrorBody } = this;
    return isDisplayed === "photos" ? (
      <PhotosBody />
    ) : isDisplayed === "error" ? (
      <ErrorBody />
    ) : (
      ""
    );
  }
}

export default Photography;
