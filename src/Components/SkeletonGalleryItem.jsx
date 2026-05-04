import { useMemo } from "react";
import Logo from "../assets/Logo.jsx";

export default function SkeletonGalleryItem() {
  const aspectRatio = useMemo(() => {
    const min = 0.6;
    const max = 1.5;
    return (Math.random() * (max - min) + min).toFixed(2);
  }, []);

  return (
    <div className="SkeletonGalleryItem" style={{ aspectRatio }}>
      <Logo className="placeholder-icon" style={{ aspectRatio }} />
    </div>
  );
}
