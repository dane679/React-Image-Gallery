export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing ID" });
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/${id}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    const data = await response.json();

    res.setHeader("Cache-Control", "s-maxage=86400");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error:`Failed to fetch image /n ${err.message}` });
  }
}