const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const imageCollector = async (photoId) => {
  const apiUrl = `https://api.unsplash.com/photos/${photoId}?client_id=${accessKey}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return formatCurrentImage(data);
  } catch (error) {
    console.error("Error fetching photo:", error);
  }
};

const formatCurrentImage = (data) => {
  const {
    id,
    alt_description,
    color,
    location: { city, country, name: locationName, position },
    tags,
    urls: { raw },
    links: { html },
    height,
    width,
    user: {
      links: { html: creatorLink },
      profile_image: { medium, large },
      name: fullname,
      username,
    },
    created_at,
    location,
  } = data;
  const tagTitles = tags.map((tag) => tag.title);
  const baseUrl = raw.split("?")[0];

  return {
    id,
    alt_description,
    color,
    city,
    country,
    locationName,
    position,
    tags: tagTitles,
    baseUrl,
    html,
    height,
    width,
    creatorLink,
    medium,
    large,
    fullname,
    username,
    created_at,
    location,
  };
};
