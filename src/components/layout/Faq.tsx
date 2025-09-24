import Image from "next/image";

export default function Faq() {
  return (
    <>
      {/* Rows */}
      <div className="w-full border-y border-black divide-y divide-black">
        {/* Row 1 */}
        <div className="grid grid-cols-12 items-center ">
          <div className="col-span-2 py-6 md:col-span-1 border-r border-black text-center font-mono text-sm md:text-base">
            01
          </div>
          <div className="col-span-9 px-4 text-base md:text-lg font-medium">
            What&apos;s The Core Vision Of Lampros DAO?
          </div>
          <div className="col-span-1 flex justify-end pr-2">
            <Image
              src="/images/faq-img/top.png"
              alt="collapse item"
              width={40}
              height={40}
              className="bg-[#DFCDF2] p-3 rounded-lg border border-black"
            />
          </div>
        </div>

        {/* Row 2 (expanded answer style) */}
        <div className="grid grid-cols-12 items-start">
          <div className=" py-6 col-span-2 md:col-span-1 border-r border-black text-center font-mono text-sm md:text-base">
            02
          </div>
          <div className="col-span-9 px-4 text-sm md:text-base leading-6 md:leading-7 text-black">
            Welcome Aboard! Lampros DAO Offers Training Sessions, Hackathons,
            Bootcamps, And Cohorts Designed Specifically To Help Budding
            Developers Like You Delve Into The Nuances Of Web3. Our Community Is
            Here To Guide, Assist, And Mentor You Throughout Your Journey.
          </div>
          <div className="col-span-1 flex justify-end pr-2">
            <Image
              src="/images/faq-img/down.png"
              alt="expand item"
              width={40}
              height={40}
              className="bg-[#DFCDF2] p-3 rounded-lg border border-black"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-12 items-center">
          <div className=" py-6 col-span-2 md:col-span-1 border-r border-black text-center font-mono text-sm md:text-base">
            03
          </div>
          <div className="col-span-9 px-4 text-base md:text-lg font-medium">
            Can I Contribute To Open-Source Projects Through Lampros DAO?
          </div>
          <div className="col-span-1 flex justify-end pr-2">
            <Image
              src="/images/faq-img/top.png"
              alt="collapse item"
              width={40}
              height={40}
              className="bg-[#DFCDF2] p-3 rounded-lg border border-black"
            />
          </div>
        </div>
      </div>

      {/* Footer tiles */}
      <div className="grid grid-cols-5 w-full border-t border-black">
        {/* Tile 1 */}
        <div className="flex items-center justify-center bg-[#CBE9FF] border-r border-black py-10">
          <Image
            src="/images/faq-img/question.png"
            alt="question mark"
            width={64}
            height={64}
            className="p-3"
          />
        </div>

        {/* Tile 2 */}
        <div className="flex items-center justify-center bg-white border-r border-black py-10">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
            FAQ
          </h1>
        </div>

        {/* Tile 3 */}
        <div className="flex items-center justify-center bg-gradient-to-b from-black to-neutral-700 border-r border-black py-10">
          <Image
            src="/images/faq-img/left.png"
            alt="previous"
            width={48}
            height={48}
            className="p-3"
          />
        </div>

        {/* Tile 4 */}
        <div className="flex items-center justify-center bg-gradient-to-b  py-10">
          <Image
            src="/images/faq-img/Mask.png"
            alt="logo"
            width={100}
            height={100}
            className="p-3"
          />
        </div>

        {/* Tile 5 */}
        <div className="flex items-center justify-center bg-gradient-to-b from-black to-neutral-700 py-10">
          <Image
            src="/images/faq-img/right.png"
            alt="next"
            width={48}
            height={48}
            className="p-3"
          />
        </div>
      </div>
    </>
  );
}
