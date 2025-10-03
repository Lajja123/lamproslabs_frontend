"use client";
import Image from "next/image";
import Clip from "@/assests/HeroSection3/Clip.svg";
import Clip2 from "@/assests/HeroSection3/Clip2.svg";
import ArrowLeft from "@/assests/common/left.svg";
import ArrowRight from "@/assests/common/right.svg";
import { Typography } from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";

export default function Research() {
  return (
    <section className="relative w-full bg-[#121212] text-white  ">
      <div className="grid grid-cols-6 grid-rows-5 gap-2">
        <div className="col-span-3 row-span-5 border border-[#000000]">
          <div className="w-full ">
            <div className="relative w-full aspect-[4/3] md:aspect-[4/3]  ">
              <Image
                src={Clip}
                alt="Metallic sculpture"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 row-span-4 col-start-4 border border-[#000000]">
          <div className="border-1 space-y-6 px-4 md:px-6 lg:px-8 py-16 md:py-24">
            <Typography
              variant="h1"
              weight="normal"
              align="left"
              color="#E9FCE4"
              className="uppercase tracking-[-0.02em] leading-[0.95] text-[40px] md:text-[68px] lg:text-[76px]"
            >
              Govern{" "}
              <span className="uppercase font-bohemian wavy-letter">a</span>
              nce &
              <br />
              Rese{" "}
              <span className="uppercase font-bohemian wavy-letter">a</span>
              rch
            </Typography>

            <Typography
              variant="subtitle2"
              weight="normal"
              color="#C7C7C7"
              className="max-w-xl leading-relaxed"
            >
              Empowering Web3 contributors through workshops, seminars, and
              hackathons. Learn, build, and engage with DAOs like Arbitrum &
              Optimism.
            </Typography>

            <div>
              <Button label="Know More" color="#B3F4A6" textColor="#0B0B0B" />
            </div>
          </div>
        </div>

        <div className="col-start-4 row-start-5  border border-black relative flex items-center justify-center">
          {" "}
          <div

          // style={{
          //   backgroundImage: `url(${bgImage2.src})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
          ></div>{" "}
          <Image
            src={ArrowLeft}
            alt="Next"
            width={100}
            height={100}
            className="relative object-contain p-2 mx-auto border rounded-full"
          />{" "}
        </div>

        <div className="col-start-5 row-start-5 border border-[#000000]">
          <Image src={Clip2} alt="Emblem" className="mx-auto" />
        </div>
        <div className="col-start-6 row-start-5 border border-[#000000]">
          {" "}
          <div

          // style={{
          //   backgroundImage: `url(${bgImage2.src})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          // }}
          ></div>
          <Image
            src={ArrowRight}
            alt="Next"
            width={100}
            height={100}
            className="relative object-contain p-2 mx-auto border rounded-full"
          />{" "}
        </div>
      </div>
    </section>
  );
}
