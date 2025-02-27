"use client";

import Image from "next/image";
import { products } from "@/app/data";
import { useParams } from "next/navigation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function ProductPage() {
  const { productid } = useParams();
  const product = products.find(item => (item.id === parseInt(productid as string)));

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center  text-white"
      style={{ background: `linear-gradient(135deg, #000000, #4f4f4f, #000000)` }}
    >
      <div className="h-1/2 w-2/3 flex flex-col">
        <Carousel
          responsive={responsive}
          draggable={true}
          infinite={true}
          itemClass="carousel-item-padding-40-px"
        >
          {
            product &&
            product.images.map((item, index) => (
              <div
                key={index}
                className="w-full h-full flex  bg-white"
              >
                <Image
                  src={item.url}
                  height={item.height}
                  width={item.width}
                  alt={item.alt}
                  className=" object-center object-contain "
                />
              </div>
            ))
          }
        </Carousel>
      </div>
      <div
        className="flex flex-col items-center"
      >
        <h1>{product?.name}</h1>
        <h2>{product?.details}</h2>
        <h3>${product?.price}</h3>

      </div>
    </div>
  )
}

