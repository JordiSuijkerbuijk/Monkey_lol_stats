import type { Image } from "../../types/image";

export default function Image({
  src,
  alt,
  width,
  height,
  loadingType,
  imageClass,
}: Image) {
  return (
    <picture>
      <source srcSet={`/images/${src}.webp`} type="image/webp"></source>
      <img
        src={`/images/${src}.jpeg`}
        alt={alt}
        loading={loadingType ? loadingType : "lazy"}
        width={width}
        height={height}
        className={imageClass}
      ></img>
    </picture>
  );
}
