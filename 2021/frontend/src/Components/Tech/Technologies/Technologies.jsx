import React from "react";
import cssTech from "./technologies.module.css";
import ImageLoader from "../../ImgLoader/imgLoader";
import { mySkills } from "../../../Dependencies/tech";
const imageLink = "/images/technologies/";

const Tech = () => {
    return (
      <div>
        <div className={cssTech.techHeader}>Tech</div>
        <div className={cssTech.techRows}>
          {mySkills.map((language, i) => {
            const altText = language
            .replace(/\.[^/.]+$/, "")
            .replaceAll("_", " ");
            return (
                <div className={cssTech.lightGray}>

                    
                      <span key={i}>
                        <ImageLoader
                          className={cssTech.skillIcon}
                          passKey={i}
                          title={altText}
                          id={`Tech${i}`}
                          src={imageLink + language}
                          alt={altText}
                        />
                      </span>
                    
                </div>
            );
          })}
        </div>
        <div className={cssTech.gitHubLink}>
        <a
          href={`https://www.github.com/gregroques`}
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <ImageLoader
            alt="GitHub: @gregroques"
            title="GitHub: @gregroques"
            src="/images/github.png"
          />
          </a>
      </div>
      </div>
    ) 
}

export default Tech;
