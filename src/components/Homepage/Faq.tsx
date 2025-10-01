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
      <div className="w-full border-y border-black  divide-black">
        {/* Row 1 */}

        <div className="flex flex-row items-center ">
          <div className="w-20 p-10 border-r border-black text-center text-sm md:text-base">
            <Typography
              variant="overline"
              color="primary"
              weight="bold"
              className="font-psygen text-sm md:text-base"
            >
              01
            </Typography>
          </div>
          <div className="flex-1 px-4">
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className="text-base md:text-lg"
            >
              What&apos;s The Core Vision Of Lampros DAO?
            </Typography>
          </div>
          <div className="w-20 flex justify-end pr-2">
            <Image
              src={top}
              alt="collapse item"
              width={40}
              height={40}
              className="bg-[#DFCDF2] p-3 rounded-lg border border-black"
            />
          </div>
        </div>
        <div className="flex flex-row    items-center">
          <div className="w-20 p-10 border-r border-black text-center text-sm md:text-base">
            <Typography
              variant="overline"
              color="primary"
              weight="bold"
              className="font-psygen  text-sm md:text-base"
            >
              02
            </Typography>
          </div>
          <div className="flex-1 px-4">
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className="text-base md:text-lg"
            >
              What&apos;s The Core Vision Of Lampros DAO?
            </Typography>
          </div>
          <div className="w-20 flex justify-end pr-2">
            <Image
              src={top}
              alt="collapse item"
              width={40}
              height={40}
              className="bg-[#DFCDF2] p-3 rounded-lg border border-black"
            />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="w-20 p-10 border-r border-black text-center text-sm md:text-base">
            <Typography
              variant="overline"
              color="primary"
              weight="bold"
              className="font-psygen  text-sm md:text-base"
            >
              03
            </Typography>
          </div>
          <div className="flex-1 px-4">
            <Typography
              variant="body2"
              color="primary"
              weight="semibold"
              className="text-base md:text-lg"
            >
              What&apos;s The Core Vision Of Lampros DAO?
            </Typography>
          </div>
          <div className="w-20 flex justify-end pr-2">
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
      <div className="flex w-full border-t border-black">
        {/* Tile 1 */}
        <div className="flex items-center justify-center w-20 bg-[#CBE9FF] border-r border-black">
          <Image
            src={question}
            alt="question mark"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>

        {/* Tile 2 */}
        <div className="flex items-center justify-center flex-1 bg-white border-r border-black ">
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
        <div className="flex items-center justify-center w-20 bg-gradient-to-b from-black to-neutral-700 border-r border-black ">
          <Image
            src={left}
            alt="previous"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full ring-1 ring-white"
          />
        </div>

        {/* Tile 4 */}
        <div className="flex items-center justify-center flex-1 bg-white border-r border-black ">
          <Image src={clip} alt="clip" width={100} height={100} />
        </div>

        {/* Tile 5 */}
        <div className="flex items-center justify-center w-20 bg-gradient-to-b from-black to-neutral-700 ">
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
