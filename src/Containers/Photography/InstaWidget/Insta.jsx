import React, { Component } from "react";
import axios from "axios";
import cssInstagram from "./instaIcon.module.css";
import ImageLoader from "../ImgLoader/imgLoader";
import { grAPI } from "../../AxiosOrders";

class Insta extends Component {
  state = {
    isDisplay: false,
    instaAccount: "",
  };

  componentDidMount = () => {
    this.getphotoSocialGallery();
  };

  getphotoSocialGallery = () => {
    axios.get(`${grAPI}/instagram`).then((res) => {
      const { isDisplay, instaAccount } = res.data.social;
      this.setState({
        isDisplay,
        instaAccount,
      });
    });
  };
  render() {
    const { isDisplay, instaAccount } = this.state;
    const { isShown } = this.props;
    return isDisplay && isShown ? (
      <div className={cssInstagram.instaNotVisibleCenter}>
          <a
            href={`https://www.instagram.com/${instaAccount}/`}
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <ImageLoader
              alt={`Instagram: @${instaAccount}`}
              title={`Instagram: @${instaAccount}`}
              src="/images/instagramNotVisible.jpg"
            />
          </a>
      </div>
    ) : (
      ""
    );
  }
}
export default Insta;
