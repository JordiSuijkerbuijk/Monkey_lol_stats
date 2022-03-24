export type Image = {
  src: string;
  isStatic: boolean;
  alt: string;
  width?: number;
  height?: number;
  loadingType: "lazy" | "eager";
  imageClass?: string;
};
