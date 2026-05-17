# React Image Gallery with View Transition based page transitions

A responsive image gallery built with React. This project integrates the Unsplash API fetch images, while focusing on presenting the data from the API cleanly, smooth navigation, and modern UI techniques.

The gallery allows users to search and filter images by category in their tags and keywords in their title, providing an engaging and efficient browsing experience. It also includes a detailed photo view with metadata, accessed by clicking the image on the homepage. Additionaly to improve the User experience, subtle UI micro animations in the form of View Transitions to improve the overall feel of navigation.

The project is designed as both a functional application and a case study, with an emphasis on clean structure, reusable components, and real-world frontend practices.

## Preview

### Home Page
<img src="public/media/Home-page.png" width="800" />

### Photo Detail Page
<img src="public/media/Photos-page.png" width="800" />

### 404 Page
<img src="public/media/NotFound-page.png" width="800" />

---

<!--## Demo 
<video controls width="800">
  <source src="public/media/RIG-DemoVideo.mp4" type="video/mp4">
</video>
<!-- <video src="public/media/RIG-DemoVideo.mp4" autoplay loop muted playsinline controls width="800"></video> -->
<!-- <video src="public/media/RIG-DemoVideo.mp4" controls width="800"></video> -->

## Live Website

[View Live Website](https://react-image-gallery-dusky.vercel.app/)

Deployed on Vercel with full serverless API support. No setup required — just open and browse.

---
## Live Code Demo

[View on CodeSandbox](https://codesandbox.io/p/devbox/frosty-grass-6xfx6x)

Run the project instantly in your browser minamal setup required. If required start the dev server, to start the live demo. The platform allows users to fork, edit and download sourcecode.

## Features
* Search images using keywords
* Filter images by category
* Dynamic data fetching using the Unsplash API
* Cached API responses to reduce repeated requests
* Smooth navigation using the View Transitions API
* Skeleton loading states to reduce layout shift
* Responsive layout across different screen sizes
* Detailed photo view with metadata (location, author, resolution, etc.)
* Serverless API layer to keep credentials secure in production

## Tech Stack
* React
* Vite
* React Router
* Unsplash REST API
* View Transition API

## Motivation

I built this project as a way to deepen my understanding of working with real-world APIs in React, programing functionaliy whilst also focusing on user experience and performance.

I wanted to move beyond basic projects and create something that feels closer to a production-ready application. This included thinking about how users interact with the interface, how to reduce perceived loading times, and how to structure data efficiently.

The project also gave me an opportunity to explore newer browser features such as the View Transitions API, and to combine my interest in UI design with practical frontend engineering needed in real businwss applications.

## Getting Started
### 1. Clone the repository
```bash
git clone https://github.com/dane679/React-Image-Gallery.git
cd React-Image-Gallery 
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root:

```bash
VITE_UNSPLASH_ACCESS_KEY=your_key
```

Get your free API key from [unsplash.com/developers](https://unsplash.com/developers).

### 4. Run the development server

```bash
npm run dev
```
## How It Works

### Filtering
Filtering is handled client-side:

```js
const filteredImages = allImages.filter((image) => {
  return matchesCategory && matchesSearch;
});
```
* Category filtering uses tags returned from the API
* Search filtering matches against the image description

### Caching
Caching is implemented to reduce unnecessary API calls:

```js
const cached = getFromCache(cacheKey);
```
* Previously fetched images are stored and reused
* Improves performance when navigating between pages

### Fetching Data

Image data is fetched using an async function:

```js
const data = await imageCollector(photoId);
```

* The API response is transformed into a cleaner structure before use
* Only relevant fields (tags, urls, metadata) are kept

### API Security Serverless Function

In production it is unsafe to call Unsplash directly from the browser. Instead all requests are routed through a Vercel serverless function at `/api/images`, which reads the API key from a server-side environment variable and forwards the request from Unsplash. This prevents the key from ever appearing in client-side.

```js
export default async function handler(req, res) {
  const { id } = req.query;
  const response = await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` },
  });
  const data = await response.json();
  res.setHeader("Cache-Control", "s-maxage=86400");
  res.status(200).json(data);
}
```

You can see the API endpoint at work here:
**[/api/images?id=A5rCN8626Ck](https://react-image-gallery-dusky.vercel.app/api/images?id=A5rCN8626Ck)**

### Environment-Aware API Routing

The frontend automatically switches how it calls the API depending on the environment it's running in:

```js
const apiUrl = import.meta.env.DEV
  ? `https://api.unsplash.com/photos/${photoId}?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
  : `/api/images?id=${photoId}`;
```

- **Local development** (`npm run dev`): Calls Unsplash directly using the `VITE_` prefixed key from the `.env` environment variable, since the serverless function isn't available locally.

- **Production (Vercel)**: routes through `/api/images`, using the endpoint to keep the key secure on the server.

`import.meta.env.DEV` checks the environment the code is running in, it is `true` during development and `false` in the production build.

## Testing the API locally

A Node.js test script is included at `tests/test-api.js` to verify the Vercel method of Unsplash integration works before redeployment. Can be run from the root directory using the below command:

```bash
node tests/test-api.js
```
## Customisation
### Modify Filtering Logic

Filtering behaviour can be adjusted inside:

```bash
Home.jsx
```

Look for:

```js
matchesCategory
matchesSearch
```

### Update Styling / Animations

All layout and animation styles are handled in:

```bash
styles.css
```

This includes:

- gallery layout
- hover effects
- view transition animations

## Support

If you found this useful or interesting, consider giving the repo a star!

## License

This project is open-source and available under the MIT License.



## Attribution

This project uses the **Unsplash API** to fetch and display images.

- All images are provided by photographers on Unsplash  
- Image ownership and copyrights belong to their respective creators  
- Where applicable, links to the original image and creator profiles are included within the application

This project is a non-commercial portfolio piece and is intended to demonstrate frontend development practices, and does not claim ownership of any external media content.
