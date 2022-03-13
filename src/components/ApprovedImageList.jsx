import React from "react";
import "../styles/ApprovedImageList.css";
import { ButtonsContainer } from "../styles/ApprovedImageList";

const ApprovedImageList = ({ preloadedState }) => {
  const ApprovedList = preloadedState.map((item, idx) => {
    return (
      <ButtonsContainer
        key={idx}
        src={item.newImage}
        alt="approved_list_image"
      />
    );
  });

  return <div className="css-example">{ApprovedList}</div>;
};

export default ApprovedImageList;
