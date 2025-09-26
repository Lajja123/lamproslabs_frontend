import Image from "next/image";
import left from "@/assests/common/left.svg";
import right from "@/assests/common/right.svg";
import top from "@/assests/Faq/top.svg";
import bottom from "@/assests/Faq/bottom.svg";
import question from "@/assests/Faq/question.svg";
import clip from "@/assests/Faq/clip.svg";
import { Typography } from "@/components/UI/Typography";

export default function Faq() {
  return (
    <>
      {/* Rows */}
      <div className="w-full border-y border-black divide-y divide-black">
        {/* Row 1 */}
        <div className="grid grid-cols-12 items-center ">
          <div className="col-span-2 py-6 md:col-span-1 border-r border-black text-center font-mono text-sm md:text-base">
            <Typography
              variant="overline"
              color="#000000"
              className="font-mono text-sm md:text-base"
            >
              01
            </Typography>
          </div>
          <div className="col-span-9 px-4">
            <Typography
              variant="h6"
              color="#000000"
              weight="medium"
              className="text-base md:text-lg"
            >
              What&apos;s The Core Vision Of Lampros DAO?
            </Typography>
          </div>
          <div className="col-span-1 flex justify-end pr-2">
            <Image
              src={top}
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
            <Typography
              variant="overline"
              color="#000000"
              className="font-mono text-sm md:text-base"
            >
              02
            </Typography>
          </div>
          <div className="col-span-9 px-4">
            <Typography
              variant="body2"
              color="#000000"
              className="text-sm md:text-base leading-6 md:leading-7"
            >
              Welcome Aboard! Lampros DAO Offers Training Sessions, Hackathons,
              Bootcamps, And Cohorts Designed Specifically To Help Budding
              Developers Like You Delve Into The Nuances Of Web3. Our Community
              Is Here To Guide, Assist, And Mentor You Throughout Your Journey.
            </Typography>
          </div>
          <div className="col-span-1 flex justify-end pr-2">
            <Image
              src={bottom}
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
            <Typography
              variant="overline"
              color="#000000"
              className="font-mono text-sm md:text-base"
            >
              03
            </Typography>
          </div>
          <div className="col-span-9 px-4">
            <Typography
              variant="h6"
              color="#000000"
              weight="medium"
              className="text-base md:text-lg"
            >
              Can I Contribute To Open-Source Projects Through Lampros DAO?
            </Typography>
          </div>
          <div className="col-span-1 flex justify-end pr-2">
            <Image
              src={top}
              alt="collapse item"
              width={40}
              height={40}
              className="bg-[#DFCDF2] p-3 rounded-lg border border-black"
            />
          </div>
        </div>
      </div>

      {/* Footer tiles */}
      <div className="grid grid-cols-[64px_1fr_64px_1fr_64px] md:grid-cols-[96px_1fr_96px_1fr_96px] w-full border-t border-black">
        {/* Tile 1 */}
        <div className="flex items-center justify-center bg-[#CBE9FF] border-r border-black py-10">
          <Image
            src={question}
            alt="question mark"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>

        {/* Tile 2 */}
        <div className="flex items-center justify-center bg-white border-r border-black py-10">
          <Typography
            variant="h2"
            color="#000000"
            weight="semibold"
            align="center"
            className="tracking-tight text-6xl md:text-7xl"
          >
            FAQ
          </Typography>
        </div>

        {/* Tile 3 */}
        <div className="flex items-center justify-center bg-gradient-to-b from-black to-neutral-700 border-r border-black py-10">
          <Image
            src={left}
            alt="previous"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full ring-1 ring-white"
          />
        </div>

        {/* Tile 4 */}
        <div className="flex items-center justify-center bg-white border-r border-black py-10">
          <Image src={clip} alt="clip" width={100} height={100} />
        </div>

        {/* Tile 5 */}
        <div className="flex items-center justify-center bg-gradient-to-b from-black to-neutral-700 py-10">
          <Image
            src={right}
            alt="next"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full ring-1 ring-white"
          />
        </div>
      </div>
    </>
  );
}
