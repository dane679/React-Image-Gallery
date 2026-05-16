import { config } from 'dotenv';
config({ path: './.env.local' });

const id = "A5rCN8626Ck";
const key = process.env.UNSPLASH_ACCESS_KEY;

console.log('Key loaded:', !!key);

const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
  headers: { Authorization: `Client-ID ${key}` }
});

const data = await res.json();
console.log(JSON.stringify(data, null, 2));