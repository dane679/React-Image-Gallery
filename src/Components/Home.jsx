import "../index.css";
import SearchBox from "./SearchBox.jsx";
import FilterButtons from "./FilterButtons.jsx";
import Gallery from "./Gallery.jsx";
import { imageCollector } from "../Services/Imagecollect.js";
import { useState, useEffect, useMemo, useLayoutEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import SkeletonGalleryItem from "./SkeletonGalleryItem";
import { getFromCache, setInCache } from "../Utils/cache.js";

export default function App() {
  const defaultImageCodes = [
    "A5rCN8626Ck",
    "4rDCa5hBlCs",
    "d4feocYfzAM",
    "UCd78vfC8vU",
    "TKXGgqnfxE0",
    "3ABZ_Uc0Ie0",
    "Hocy-u2_T1o",
    "0nv43jlu978",
    "sj98CADgI1Q",
    "2D-LVmNxIGI",
    "ePPkHi8ZKCQ",
    "PPk5cX78qys",
    "Z1KDjagJ4xI",
    "gjBGY0To8EI",
    "sXqQRcgrqH0",
    "_dEAIGD4qc4",
    "BT2Pg_yecqU",
    "9SsWhOUTBCg",
    "Eal-CakUjoI",
    "TQjQ9DTr4vs",
    "CwxAvWJ1PEA",
    "54i-1yJXjcQ",
    "4UPs6rDibz8",
    "J8YWYe84Cxg",
    "abZ8CSYOx14",
    "_FzUZYliQ1M",
    "NozWWLzEb0E",
    "LDTIxeFqWw8",
    "hnqpzHPjSEU",
    "9Szfd3tuoBg",
    "6nxuNHQ1Ojg",
    "_oEGOD20gH4",
    "ogosQTnEuhI",
    "dtxHQ6RBf10",
    "lebyZKctFyk",
    "TFU1WGps8Zs",
  ];

  const location = useLocation();
  const [activeId, setActiveId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("filter")
    ? decodeURIComponent(searchParams.get("filter"))
    : "All";

  const [allImages, setAllImages] = useState(() => {
    const cachedImages = defaultImageCodes
      .map((code) => getFromCache(`image-${code}`))
      .filter(Boolean);

    return cachedImages.length === defaultImageCodes.length
      ? cachedImages
      : null;
  });
  const searchTerm = searchParams.get("q") || "";
  const [searchInput, setSearchInput] = useState(searchTerm);

  useState(defaultImageCodes);

  function updateSearchTerm(value) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      value ? params.set("q", value) : params.delete("q");
      return params;
    });
  }

  function updateFilter(value) {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      value === "All" ? params.delete("filter") : params.set("filter", value);
      return params;
    });
  }

  useEffect(() => {
    async function fetchAllImages() {
      const results = await Promise.all(
        defaultImageCodes.map(async (code) => {
          const cacheKey = `image-${code}`;

          const cached = getFromCache(cacheKey);
          if (cached) {
            return cached;
          }

          const image = await imageCollector(code);

          setInCache(cacheKey, image);
          return image;
        })
      );

      setAllImages(results);
    }
    fetchAllImages();
  }, []);

  const filteredImages = useMemo(() => {
    if (!allImages || allImages.length === 0) return [];

    const normalizedFilter = activeFilter.toLowerCase().trim();
    const normalizedSearch = searchInput.toLowerCase().trim();

    return allImages.filter((image) => {
      const matchesCategory =
        normalizedFilter === "all" ||
        image.tags.some((tag) => tag.toLowerCase().trim() === normalizedFilter);

      const matchesSearch = image.alt_description
        ?.toLowerCase()
        .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [allImages, activeFilter, searchInput]);

  useLayoutEffect(() => {
    if (location.state?.activeId) {
      setActiveId(location.state?.activeId);
    }
  }, [location.state]);

  return (
    <div className="App">
      <main className="page-wrapper">
        <h1 className="page-title">Image Gallery</h1>

        <div className="controls-container">
          <SearchBox
            searchTerm={searchTerm}
            setSearchTerm={updateSearchTerm}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <FilterButtons
            activeFilter={activeFilter}
            setActiveFilter={updateFilter}
          />
        </div>
        {!allImages ? (
          <div className="gallery">
            {defaultImageCodes.map((_, idx) => (
              <SkeletonGalleryItem key={idx} />
            ))}
          </div>
        ) : (
          <Gallery imageList={filteredImages} />
        )}
      </main>
    </div>
  );
}
