import GalleryItem from "./GalleryItem";
// import { imageCollector } from "../Services/Imagecollect";
import { useEffect, useState } from "react";

export default function Gallery({ imageList }) {
  const [collectedAsp, setCollectedAsp] = useState([]);

  const addToAspList = (item) => {
    setCollectedAsp((prev) => [...prev, item]);
  };

  // useEffect(() => {
  //   collectedAsp.sort();
  //   console.log(`ASP: ${collectedAsp}`);
  // }, [collectedAsp]);

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
        {/* <GalleryItem item={"A5rCN8626Ck"} /> */}
      </div>
    </>
  );
}
