import type { Image as ImageType } from "../../types/image";

export default function Image({
  src,
  isStatic,
  alt,
  width,
  height,
  loadingType,
  imageClass,
}: Image) {
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
