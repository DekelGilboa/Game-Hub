/**
 * Optimizes the size of an image URL by adding a crop parameter.
 *
 * @param url - The URL of the image to be optimized.
 * @returns The optimized URL with a crop parameter.
 */

export const optimizeImg = (url: string): string => {
  if (!url) return "";
  const target = "/media/";
  const index = url.indexOf(target) + target.length;
  const crop = "crop/600/400/";
  return url.substring(0, index) + crop + url.substring(index);
};
