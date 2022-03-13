import { useState, useRef, useEffect } from "react";

import {
  MainContainerApp,
  MainTitle,
  ApprovedImagesTitle,
  ApprovedImagesContainer,
  ApprovedImagesScroll,
  ScrollLeftImage,
  ScrollableContentRow,
} from "./styles/MainContainerApp";

import { requestImage } from "./API/Api";
import Image from "./components/Images";
import ApprovedImageList from "./components/ApprovedImageList";

import RightArrow from "./Images/right-arrow.png";
import LeftArrow from "./Images/left-arrow.png";

function App() {
  const [images, setImages] = useState([]);
  const [approved, setApproved] = useState([]);
  const [savedNumber, setSavedNumber] = useState(0);

  const ref = useRef(null);

  const onSearchSubmit = async () => {
    const imageArray = await requestImage();

    // Prevent to add dublicates.
    if (images !== imageArray.urls.small) {
      setImages(imageArray.urls.small);
    }
  };

  const saveToLocalStorageFav = (items) => {
    localStorage.setItem("approved", JSON.stringify(items));
  };

  const addApprovedImage = (image) => {
    const newApprovedList = [...approved, { newImage: image }];
    setApproved(newApprovedList);
    saveToLocalStorageFav(newApprovedList);
  };

  const scroll = (scrollVal) => {
    ref.current.scrollLeft += scrollVal;
  };

  useEffect(() => {});

  const estData = JSON.parse(window.localStorage.getItem("approved"));
  const ListApproved = () => {
    if (estData) {
      setSavedNumber(estData.length || []);
    }
    return <ApprovedImageList preloadedState={estData} />;
  };

  const renderedImage = (
    <Image
      images={images}
      onSearchSubmit={onSearchSubmit}
      handleApproved={addApprovedImage}
    />
  );

  return (
    <MainContainerApp>
      <MainTitle>Image Approval Application</MainTitle>
      <ApprovedImagesContainer>
        <ApprovedImagesTitle>
          Approved Images ({savedNumber ? savedNumber : 0})
        </ApprovedImagesTitle>
        <ScrollableContentRow>
          <ScrollLeftImage
            src={LeftArrow}
            alt="left_arrow"
            onClick={() => scroll(-150)}
          />
          <ApprovedImagesScroll ref={ref}>
            {estData ? <ListApproved /> : "No images are approved yet."}
          </ApprovedImagesScroll>
          <ScrollLeftImage
            src={RightArrow}
            alt="right_arrow"
            onClick={() => scroll(150)}
          />
        </ScrollableContentRow>
      </ApprovedImagesContainer>
      {renderedImage}
    </MainContainerApp>
  );
}

export default App;
