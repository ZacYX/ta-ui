export type Picture = {
  id: number,
  alt: string,
  height: number,
  width: number,
  url: string,
  order?: string,
  productId: number,
}

export type Product = {
  id: number,
  name: string,
  details: string,
  price: number,
  salePrice?: number,
  images: Picture[],
}

export type Scale = {
  ratio: number,
  origin: string,
}

export type GalleryRect = {
  top: number,
  left: number,
  width: number,
  height: number
}