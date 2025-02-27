import Image from "next/image";
import { Picture, Product, Scale } from "./types";
import Link from "next/link";

export default function ImageFrame({
  product,
  index,
  scale
}: {
  product: Product,
  index: number,
  scale: Scale

}) {
  return (
    <div className="w-full flex flex-row">
      {/* first column */}
      <div className="flex  w-1/3 aspect-[13/8] ">
        <Link href={`/shop/${product.id}`}>
          {
            index % 4 === 0 &&
            <div className="w-full ">
              <div
                className={` bg-white aspect-[13/8] overflow-hidden transition-transform ${scale.origin === "top-left" ? "origin-top-left" : "origin-top-right"} duration-500`}
                style={{ transform: `scale(${scale.ratio} )` }}
              >
                <Image
                  src={product.images[0].url} alt={product.images[0].alt} height={product.images[0].height} width={product.images[0].width}
                  className=" aspect-[13/8] object-contain object-center"
                  style={{ transform: `scale(${1 / scale.ratio} )` }}
                />
              </div>
              <div
                className="pl-3 text-2xl "
                style={{ transform: `scale(${scale.ratio} )` }}
              >
                {product.name}
              </div>
              <div className="pl-3 ">${product.price}</div>
            </div>
          }
        </Link>
      </div>
      {/* second column */}
      <div className="flex w-1/3 aspect-[13/8] ">
        <Link href={`/shop/${product.id}`}>
          {
            (index % 4 === 1 || index % 4 === 3) &&
            <div className="w-full">
              <div
                className={`bg-white flex w-full aspect-[13/8] overflow-hidden transition-transform ${scale.origin === "top-left" ? "origin-top-left" : "origin-top-right"} duration-500`}
                style={{ transform: `scale(${scale.ratio} )` }}
              >
                <Image
                  src={product.images[0].url} alt={product.images[0].alt} height={product.images[0].height} width={product.images[0].width}
                  className=" aspect-[13/8] object-contain object-center"
                  style={{ transform: `scale(${1 / scale.ratio} )` }}
                />
              </div>
              <div
                className="pl-3 text-2xl"
                style={{ transform: `scale(${scale.ratio} )` }}
              >
                {product.name}
              </div>
              <div className="pl-3">${product.price}</div>
            </div>
          }
        </Link>
      </div>
      {/* third column*/}
      <div className="flex w-1/3 aspect-[13/8] ">
        <Link href={`/shop/${product.id}`}>
          {
            index % 4 === 2 &&
            <div className="w-full">
              <div
                className={`bg-white flex w-full aspect-[13/8] overflow-hidden transition-transform ${scale.origin === "top-left" ? "origin-top-left" : "origin-top-right"} duration-500`}
                style={{ transform: `scale(${scale.ratio} )` }}
              >
                <Image
                  src={product.images[0].url} alt={product.images[0].alt} height={product.images[0].height} width={product.images[0].width}
                  className=" aspect-[13/8] object-contain object-center"
                  style={{ transform: `scale(${1 / scale.ratio} )` }}
                />
              </div>
              <div
                className="pl-3 text-2xl"
                style={{ transform: `scale(${scale.ratio} )` }}
              >
                {product.name}
              </div>
              <div className="pl-3">${product.price}</div>
            </div>
          }
        </Link>
      </div>
    </div>
  )
}