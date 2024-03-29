import React, { Component } from "react";
import axios from "axios";
import cssInstagram from "./instaGallery.module.css";
import ImageLoader from "../../ImgLoader/imgLoader";
import { grAPI } from "../../../Dependencies/BackendAPI";

class InstaGallery extends Component {
  state = {
    userName: "",
    image: [],
    picIndex: 0,
    selectedPic: 0,
    selectedPicIndex: 0,
    display: false,
  };

  getInstaGallery = () => {
    axios.get(`${grAPI}/instagramImages`).then((res) => {
      const { userName, image } = res.data;
      this.setState({
        userName: userName,
        image: image,
      });
    });
  };

  clickL = () => {
    const { image, selectedPic, selectedPicIndex } = this.state;
    let i = selectedPicIndex - 1;
    if (i < 0) {
      i = image[selectedPic].children.length - 1;
    }

    this.setState({
      selectedPicIndex: i,
    });
  };

  clickR = () => {
    const { image, selectedPic, selectedPicIndex } = this.state;
    let i = selectedPicIndex + 1;
    if (i > image[selectedPic].children.length - 1) {
      i = 0;
    }

    this.setState({
      selectedPicIndex: i,
    });
  };

  isPopUpOpen = (e, num) => {
    const { display } = this.state;
    if (e.target !== e.currentTarget && display) {
      return;
    }
    this.setState({
      display: !display,
      selectedPic: num,
      selectedPicIndex: 0,
    });
  };

  togglePics = () => {
    const { picIndex } = this.state;
    const total = this.state.image.length;

    const newIndex =
      picIndex + 10 <= total
        ? picIndex + 5
        : total - picIndex <= 5
        ? 0
        : picIndex + (total - picIndex - 5);

    this.setState({
      picIndex: newIndex,
    });
  };

  InstaPopUp = () => {
    const { image, selectedPic, selectedPicIndex, userName } = this.state;

    return this.state.display ? (
      <div
        className={cssInstagram.centerAndBackground}
        onClick={(e) => this.isPopUpOpen(e, "")}
      >
        <div
          onClick={(e) => this.isPopUpOpen(e, "")}
          className={cssInstagram.closeButton}
        >
          X
        </div>
        <div className={cssInstagram.selectedContainer}>
          <div className={cssInstagram.selectedHeader}>
            <img
              alt="profile pic"
              className={cssInstagram.selectedHeaderImage}
              src="/images/headShots/instaPic.jpg"
            />
            <a
              className={cssInstagram.selectedHyperlink}
              href={`${image[selectedPic].url}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {userName}
            </a>
          </div>
          {image[selectedPic].children !== null ? (
            <div className={cssInstagram.selectedImageContainer}>
              <div className={cssInstagram.buttonRight}>
                <div
                  className={cssInstagram.imageGalleryButtons}
                  onClick={() => this.clickR()}
                >
                  {">"}
                </div>
              </div>
              <div className={cssInstagram.buttonLeft}>
                <div
                  className={cssInstagram.imageGalleryButtons}
                  onClick={() => this.clickL()}
                >
                  {"<"}
                </div>
              </div>
              <img
                className={cssInstagram.chosenImage}
                alt={`insta${selectedPic}`}
                src={image[selectedPic].children[selectedPicIndex]}
              />
            </div>
          ) : (
            <div className={cssInstagram.selectedImageContainer}>
              <img
                className={cssInstagram.chosenImage}
                alt={`insta${selectedPic}`}
                src={image[selectedPic].pic}
              />
            </div>
          )}
          <div className={cssInstagram.selectedCaption}>
            <b>{image[selectedPic].date}</b>
            <br />
            {image[selectedPic].children !== null ? (
              <b>
                {selectedPicIndex + 1}/{image[selectedPic].children.length}:{" "}
              </b>
            ) : null}
            {image[selectedPic].caption}
          </div>
        </div>
      </div>
    ) : null;
  };

  InstaBody = () => {
    const { image, picIndex, userName } = this.state;
    return (
      <div className={cssInstagram.bodyPageLoad}>
        <div className={cssInstagram.instagramParentHeader}>Instagram</div>
        <div className={cssInstagram.instaModuleSpacing}>
          <div className={cssInstagram.container}>
            <div className={cssInstagram.header}>
              <a
                href={`https://www.instagram.com/${userName}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                @{userName}
              </a>
            </div>

            <div className={cssInstagram.postCount}>
              {image.length > 5 ? (
                <span
                  title="Click to Toggle Instagram Images"
                  className={cssInstagram.boldHover}
                  onClick={() => this.togglePics()}
                >
                  More Pics
                </span>
              ) : (
                ""
              )}
            </div>

            <div className={cssInstagram.flexFiveCenter}>
              <div className={cssInstagram.hitemwiththatflexRow}>
                <div className={cssInstagram.hitemwiththatflexColumn1}>
                  <div
                    className={cssInstagram.instaImage1}
                    onClick={(e) => this.isPopUpOpen(e, 0 + picIndex)}
                  >
                    <img
                      className={cssInstagram.bigPicture}
                      alt={`insta_${[0 + picIndex]}`}
                      src={image[0 + picIndex].pic}
                    />
                    <div className={cssInstagram.onHover}>
                      <div className={cssInstagram.onHoverDate}>
                        {image[0 + picIndex].date}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cssInstagram.hitemwiththatflexColumn2}>
                  <div
                    className={cssInstagram.instaImage2}
                    onClick={(e) => this.isPopUpOpen(e, 1 + picIndex)}
                  >
                    <img
                      className={cssInstagram.smallPicture}
                      alt={`insta_${[1 + picIndex]}`}
                      src={image[1 + picIndex].pic}
                    />
                    <div className={cssInstagram.onHover}>
                      <div className={cssInstagram.onHoverDate}>
                        {image[1 + picIndex].date}
                      </div>
                    </div>
                  </div>
                  <div
                    className={cssInstagram.instaImage3}
                    onClick={(e) => this.isPopUpOpen(e, 2 + picIndex)}
                  >
                    <img
                      className={cssInstagram.smallPicture}
                      alt={`insta_${[2 + picIndex]}`}
                      src={image[2 + picIndex].pic}
                    />
                    <div className={cssInstagram.onHover}>
                      <div className={cssInstagram.onHoverDate}>
                        {image[2 + picIndex].date}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cssInstagram.hitemwiththatflexColumn3}>
                  <div
                    className={cssInstagram.instaImage4}
                    onClick={(e) => this.isPopUpOpen(e, 3 + picIndex)}
                  >
                    <img
                      className={cssInstagram.smallPicture}
                      alt={`insta_${[3 + picIndex]}`}
                      src={image[3 + picIndex].pic}
                    />
                    <div className={cssInstagram.onHover}>
                      <div className={cssInstagram.onHoverDate}>
                        {image[3 + picIndex].date}
                      </div>
                    </div>
                  </div>
                  <div
                    className={cssInstagram.instaImage5}
                    onClick={(e) => this.isPopUpOpen(e, 4 + picIndex)}
                  >
                    <img
                      className={cssInstagram.smallPicture}
                      alt={`insta_${[4 + picIndex]}`}
                      src={image[4 + picIndex].pic}
                    />
                    <div className={cssInstagram.onHover}>
                      <div className={cssInstagram.onHoverDate}>
                        {image[4 + picIndex].date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  InstaLink = () => {
    const { userName } = this.state;
    return (
      <div className={cssInstagram.instaNotVisibleCenter}>
        <a
          href={`https://www.instagram.com/${userName}/`}
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <ImageLoader
            alt={`Instagram: @${userName}`}
            title={`Instagram: @${userName}`}
            src="/images/instagram.jpg"
          />
        </a>
      </div>
    );
  };

  render() {
    const { isVisible } = this.props;
    const { InstaBody, InstaLink, InstaPopUp } = this;
    const { userName, image } = this.state;

    if(isVisible){
      //this.getInstaGallery();
      if (image.length > 0) {
        return (
          <div>
            <InstaPopUp />
            <InstaBody />
          </div>
        );
      }
      if (userName !== "") {
        return <InstaLink />;
      }
    }

    return (<div></div>);
  }
}

export default InstaGallery;