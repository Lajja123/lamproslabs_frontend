export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-8 grid-rows-4 gap-1 ">
        <div className="row-span-4">1</div>
        <div className="col-span-2 row-span-2">2</div>
        <div className="col-span-4 row-span-2 col-start-4">3</div>
        <div className="row-span-4 col-start-8">4</div>
        <div className="col-span-6 col-start-2 row-start-3">5</div>
        <div className="col-span-2 col-start-2 row-start-4">6</div>
        <div className="col-span-2 col-start-4 row-start-4">7</div>
        <div className="col-span-2 col-start-6 row-start-4">8</div>
      </div>
    </>
  );
}
