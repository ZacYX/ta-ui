"use client";

import { useEffect, useRef, useState } from "react";
import { GalleryRect, Scale } from "./types";
import { products } from "./data";
import ImageFrame from "./ImageFrame";


export default function Gallery() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [galleryRect, setGalleryRect] = useState<GalleryRect>();

  const [scrollY, setScrollY] = useState(0);
  const [scaleRatio, setScaleRatio] = useState<Scale[]>();

  useEffect(() => {
    const handleScroll = () => {
      // console.debug(`Viewport width: ${window.innerWidth}`);
      // console.debug(`Viewport height: ${window.innerHeight}`);
      // console.debug(`Scroll Y: ${window.scrollY}`);
      setScrollY(window.scrollY);
      let sr: Scale[] = [];
      for (let i = 0; i < products.length; i++) {
        let divHeight = window.innerHeight / 3;
        let r = (window.scrollY - divHeight * 1.3 * i) / divHeight;
        let ratio = r < 0.01 ? 0.01 : (r < 0.7 ? r : (r < 3 ? (0.7 + r * 0.1) : 1));
        let origin = (i === 0 || ((i + 1) % 4 === 2 || (i + 1) % 4 === 3) ? "top-left" : "top-right");
        sr.push({ ratio: ratio, origin: origin })
        // console.debug(`r${i}: ${r.toFixed(3)}  ra${i}: ${ratio.toFixed(3)}  1/ra${i}: ${(1 / ratio).toFixed(3)}`);
      }
      setScaleRatio(sr);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  useEffect(() => {
    const updateRect = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        // console.debug(`Rect: ${rect?.top} ${rect?.left}   ${rect?.width} ${rect?.height}`)
        setGalleryRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
      }
    }
    window.addEventListener("resize", updateRect);
    updateRect();

    return () => {
      window.removeEventListener("resize", updateRect);
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className="w-full  flex flex-col pb-40"
    >
      {
        products.map((p, i) => (
          <ImageFrame
            key={i}
            product={products[i]}
            index={i}
            scale={scaleRatio ? scaleRatio[i] : { ratio: 0, origin: "top-left" }}
          />
        ))
      }
    </div>
  )
}