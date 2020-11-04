require('dotenv').config();

if (!process.env.CONTENTFUL_CMA_ACCESS_TOKEN) {
  console.warn(
    `CONTENTFUL_CMA_ACCESS_TOKEN environment variable was not set. Skipping generating TypeScript types from Contentful content types. Cached types will be used, which could become out of date.`
  );
} else {
  require('contentful-typescript-codegen');
}
