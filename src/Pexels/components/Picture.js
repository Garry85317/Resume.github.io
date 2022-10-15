import React from "react";
import axios from "axios";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        <a rel="noopener noreferrer" href={data.src.large}>
          Download
        </a>
      </p>
    </div>
  );
};

export default Picture;
