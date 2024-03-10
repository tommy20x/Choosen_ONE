import { useEffect, useState } from "react";

export default function useResponsiveImageSize() {
  const [imageWidthSize, setImageWidthSize] = useState(window.innerWidth);


  useEffect(() => {
    const onResize = () => {
      setImageWidthSize(window.innerWidth);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return imageWidthSize;
}
