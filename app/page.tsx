import Gallery from "./Gallery";


const homePageWords = [
  "Tonneau Cover",
  "Bed Rack",
  "Best Value for Price",
]
export default function Home() {
  return (
    <div
      className="w-full flex flex-col items-center px-20  text-white text-2xl "
      style={{ background: `linear-gradient(135deg, #000000, #4D4D4D, #000000)` }}
    >
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="w-2/3 flex flex-wrap justify-center">
          <div className=" m-2 p-2 px-4 border-2 rounded-full">Go eXploreing More</div>
          <div className=" m-2 p-2 px-4 border-2 rounded-full">Go eXperiencing More</div>
        </div>
        <div className="w-2/3 flex flex-wrap justify-center">
          {
            homePageWords.map((item, index) => (
              <div key={index} className="m-2 p-2 px-4 border-2 rounded-full">{item}</div>
            ))
          }
        </div>
        <div className="w-full h-1/3 flex flex-col justify-end">
          <div className="flex flex-row justify-between">
            <div className="w-1/3 text-4xl">Retractable Tonneau Cover and Accessories</div>
            <div className="w-1/3 flex flex-col justify-center text-lg">
              <div>Excellent technical support and customer service</div>
              <div>Comptitive pricing and value</div>
            </div>
          </div>
        </div>
        <div className=" relative w-full top-16 border-2"></div>
      </div>
      <Gallery />
    </div>
  );
}
