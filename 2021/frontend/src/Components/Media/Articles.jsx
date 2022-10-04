import React from "react";
import { articleList } from "../../Dependencies/Design_ArticleList";
import cssMedia from "./media.module.css";
import ImageLoader from "../ImgLoader/imgLoader";

const IssueList = ({ art }) => {
  return (
    <div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={articleList[art]["link"]}
      >
        <div className={cssMedia.mags}>
          <ImageLoader
            src={articleList[art]["image"]}
            alt={articleList[art]["title"]}
          />
          <div className={cssMedia.imgDescription}>
            – {articleList[art]["category"]} –
            <br />
            <i>{articleList[art]["title"]}</i>
          </div>
        </div>
      </a>
    </div>
  );
};

const Articles = () => {
    return (
      <div>
        <div className={cssMedia.artDirection}>Writing</div>
        <div className={cssMedia.magGrid}>
          {Object.keys(articleList).map((num, i) => {
            return <IssueList key={i} art={num} />;
          })}
        </div>
        <div className={cssMedia.recentContainerBottom}>
          <div className={cssMedia.recentHeader}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSv73q6vRk-ERHABgw0qfNDY3bZhbgrBjXJW7JDOXRHj_5tnCIaZpoKTA6fXM8gSK1TBL8HbyC9f9z_/pubhtml#"
            >
              More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default Articles;
