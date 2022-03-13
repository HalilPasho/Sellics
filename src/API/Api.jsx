import { API_KEY } from "./API_KEY";
export const requestImage = async () => {
  const res = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${API_KEY}`
  );

  // In case we get not okay response
  if (res.status !== 200) return [];

  const imageArray = await res.json();
  return imageArray;
};
