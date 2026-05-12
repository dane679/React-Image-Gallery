import GalleryItem from "./GalleryItem";
import { useState } from "react";

export default function Gallery({ imageList }) {
  const [collectedAsp, setCollectedAsp] = useState([]);

  const addToAspList = (item) => {
    setCollectedAsp((prev) => [...prev, item]);
  };

  return (
    <>
      <div className="gallery">
        {imageList.map((image) => (
          <GalleryItem
            key={image.id}
            item={image}
            imageData={image}
            addToAspList={addToAspList}
          />
        ))}
      </div>
    </>
  );
}
