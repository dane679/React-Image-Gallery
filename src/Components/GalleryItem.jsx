import { useState } from "react";
import SkeletonGalleryItem from "./SkeletonGalleryItem";
import { Link, useNavigate } from "react-router-dom";

export default function GalleryItem({ item, addToAspList }) {
  const [imageData, setImageData] = useState(item);
  const [activeId, setActiveId] = useState(null);
  const [loaded, setLoaded] = useState(false);

  if (!item) {
    return (
      <div className="skeleton-item-container">
        <SkeletonGalleryItem />
      </div>
    );
  }

  return (
    <div>
      <div className="gallery-item-container">
        <Link
          to={`/Photos/${imageData.id}`}
          className="gallery-item"
          data-category={imageData.tags}
          state={{ imageData, fromGallery: true }}
          viewTransition
          onPointerDown={() => setActiveId(imageData.id)}
        >
          <div
            className="gallery-img-wrapper"
            style={{
              aspectRatio: `${imageData.width} / ${imageData.height}`,
            }}
          >
            <img
              src={`${imageData.baseUrl}?w=600`}
              alt={imageData.alt_description}
              style={{
                viewTransitionName:
                  activeId === imageData.id ? `photo-transition` : "none",
              }}
              onLoad={() => setLoaded(true)}
              className={loaded ? "loaded" : ""}
            />
          </div>
          <p>{imageData.alt_description}</p>
        </Link>
      </div>
    </div>
  );
}
