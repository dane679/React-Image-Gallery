const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const imageCollector = async (photoId) => {
  const apiUrl = `https://api.unsplash.com/photos/${photoId}?client_id=${accessKey}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
    // formatCurrentImage(data);
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
  // console.log(
  //   `${id}, \n${alt_description}, \n${color}, \n${city}, \n${country}, \n${name}, \n${tags}`
  // );
  const tagTitles = tags.map((tag) => tag.title);
  // console.log(tags);
  // console.log(tagTitles);
  const baseUrl = raw.split("?")[0];
  // console.log(html);
  // console.log(creatorLink);
  // console.log(raw);
  // console.log(baseUrl);
  // console.log(html);

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
