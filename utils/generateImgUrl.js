import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: "hf6s0p0z",
  dataset: "production",
  apiVersion: "2023-03-04",
});
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
