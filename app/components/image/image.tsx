import type { Image as ImageType } from "../../types/image";

export default function Image({
  src,
  isStatic,
  alt,
  width,
  height,
  loadingType,
  imageClass,
}: ImageType) {

  if(isStatic) {
    return (
      <picture>
        <source srcSet={`/images/${src}.webp`} type="image/webp"></source>
        <source srcSet={`/images/${src}.jpeg`} type="image/jpeg"></source>
        <img
          src={`/images/${src}.jpg`}
          alt={alt}
          loading={loadingType ? loadingType : "lazy"}
          width={width}
          height={height}
          className={imageClass}
        ></img>
      </picture>
    );
  }
  return (
    <img
      src={`${src}`}
      alt={alt}
      loading={loadingType ? loadingType : "lazy"}
      width={width}
      height={height}
      className={imageClass}
    ></img>
  )

}
