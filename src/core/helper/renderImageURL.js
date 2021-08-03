export const renderImageUrl = (url) => {
  if (!url.includes("https")) return url.replace("http", "https");
  return url;
};
