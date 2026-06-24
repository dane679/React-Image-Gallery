import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { imageCollector } from "../Services/Imagecollect";
import {
  FaExternalLinkAlt,
  FaArrowLeft,
  FaLink,
  FaCheck,
  FaCalendar,
  FaMapMarked,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getDerivedContrastColor } from "../Utils/getDerivedContrastColor";
import Tags from "./Tags.jsx";

export default function PhotoDetail() {
  const { imageid } = useParams();
  const location = useLocation();
  const [imageData, setImageData] = useState(location.state?.imageData || null);
  const cameFromGallery = location.state?.fromGallery === true;
  const navigate = useNavigate();

  const [ContrastColor, setContrastColor] = useState(
    getDerivedContrastColor(location.state?.imageData.color) || null
  );
  const [copied, setCopied] = useState(false);

  const handleBack = (imageDataid) => {
    if (window.history.length > 1 && cameFromGallery) {
      navigate(-1, {
        state: { activeId: imageDataid },
        viewTransition: true,
      });
    } else {
      navigate("/", {
        state: { activeId: imageDataid },
        viewTransition: true,
      });
    }
  };

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function getAspectRatio(width, height) {
    const divisor = gcd(width, height);
    return `${width / divisor}:${height / divisor}`;
  }

  useEffect(() => {
    if (imageData) {
      return;
    }

    async function fetchImage() {
      const data = await imageCollector(imageid);
      console.log(data);
      setImageData(data);
      setContrastColor(getDerivedContrastColor(data.color));
      console.log(ContrastColor);
    }
    fetchImage();
  }, [imageid]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  function getTimeAgo(dateString) {
    const createdDate = new Date(dateString);
    const now = new Date();

    const diffInSeconds = Math.floor((now - createdDate) / 1000);

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(diffInSeconds / 3600);
    const days = Math.floor(diffInSeconds / 86400);
    const weeks = Math.floor(diffInSeconds / 604800);
    const months = Math.floor(diffInSeconds / 2629800); 
    const years = Math.floor(diffInSeconds / 31557600); 

    if (diffInSeconds < 60) return "Just now";
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    if (days < 7) return `${days} day${days !== 1 ? "s" : ""} ago`;
    if (weeks < 5) return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;

    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }

  const timeAgo = imageData ? getTimeAgo(imageData.created_at) : null;

  const asp = imageData
    ? getAspectRatio(imageData.width, imageData.height)
    : null;
  console.log(asp);

  if (!imageData) {
    return <p>Loading image...</p>;
  } 

  return (
    <main className="page-wrapper">
      <div
        className="photoDetail-container"
        style={{
          "--user-clr": imageData.color,
          "--contrast-clr": ContrastColor,
        }}
      >
        <div
          className="top-bar"
          style={{ backgroundColor: imageData.color, color: ContrastColor }}
        >

          <button
            className="back-btn"
            onClick={() => {
              handleBack(imageData.id);
            }}
            style={{ borderColor: ContrastColor }}
          >
            <FaArrowLeft />
          </button>

          <span className="profile-wrapper">
            <a
              className="creator-link"
              href={imageData.creatorLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imageData.large} alt="Gallery image" />
            </a>
            <div className="names-wrapper">
              <span className="name">{imageData.fullname}</span>
              <span className="username">@{imageData.username}</span>
            </div>
          </span>

          <div className="copy-link-wrapper">
            <button
              className={`copy-link-btn ${copied ? "copied" : ""}`}
              onClick={handleCopy}
              aria-label="Copy link"
            >
              <span className="copy-link-icon">
                {copied ? <FaCheck /> : <FaLink />}
              </span>
              <span className="copy-link-text">
                {copied ? "Copied!" : "Copy link"}
              </span>
            </button>
            {copied && (
              <div
                className="copy-link-tooltip"
                role="status"
                aria-live="polite"
              >
                Copied to clipboard!
              </div>
            )}
          </div>

          <a
            className="photo-link"
            href={imageData.html}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt />{" "}
          </a>
        </div>

        <div className="photo-detail">
          <img
            src={`${imageData.baseUrl}?w=600`}
            alt={imageData.alt_description}
            className="focus-image"
            style={{ viewTransitionName: `photo-transition` }}
          />

          <div className="image-data">
            <h2 className="photo-heading">{imageData.alt_description}</h2>
          </div>

          <div className="photo-meta-bar">
            <div className="meta-item">
              <span className="meta-label">Resolution:</span>
              <span className="meta-value">
                {imageData.width} × {imageData.height}
              </span>
              <span className="meta-value">Aspect ratio: {asp}</span>
            </div>

            <div className="meta-divider" />

            <div className="meta-item">
              <span className="meta-label">Location:</span>
              <span className="meta-value">
                {imageData.locationName
                  ? `${imageData.locationName}`
                  : "Unknown"}
              </span>
            </div>

            <div className="meta-divider" />

            <div className="meta-item">
              <span className="meta-label">Published:</span>
              <span className="meta-value">
                {new Date(imageData.created_at).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          <ul>
            <li>
              <FaCalendar /> Released: {timeAgo}
            </li>
            <li>
              <FaMapMarked />
              Country: {imageData.country ? `${imageData.country}` : "Unknown"}
            </li>
            <li>
              <FaMapMarked />
              City: {imageData.city ? `${imageData.city}` : "Unknown"}
            </li>
          </ul>

          <div className="coordinates-section">
            <div className="coordinates-header">
              <span className="coordinates-label">Coordinates</span>
              <a
                href={`https://www.google.com/maps?q=${imageData.position.latitude},${imageData.position.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`view-map-link ${
                  (imageData.position.latitude === 0 &&
                    imageData.position.longitude === 0) ||
                  (imageData.position.latitude === null &&
                    imageData.position.longitude === null)
                    ? "disabled"
                    : ""
                }`}
              >
                View on map →
              </a>
            </div>

            {(imageData.position.latitude === 0 &&
              imageData.position.longitude === 0) ||
            (imageData.position.latitude === null &&
              imageData.position.longitude === null) ? (
              <div className="coordinates-values">
                <span>latitude: Unknown</span>
                <span>longitude: Unknown</span>
              </div>
            ) : (
              <div className="coordinates-values">
                <span>latitude: {imageData.position.latitude} °N</span>
                <span>longitude: {imageData.position.longitude} °E</span>
              </div>
            )}
          </div>

          <div className="tags-data">
            <Tags tagList={imageData.tags} />
          </div>

          <div className="creator-credit">
            <span>
              Photo by{" "}
              <a
                className="acknowlegment"
                href={imageData.creatorLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {imageData.fullname}
              </a>{" "}
              on Unsplash
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
