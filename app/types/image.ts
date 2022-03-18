export type Image = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loadingType: "lazy" | "eager";
  imageClass?: string;
};
