export default function calculateRealImageHeight(originalHeight: number, originalWidth: number, realWidth: number) {
  const aspectRatio = originalHeight / originalWidth;
  return realWidth * aspectRatio;
}