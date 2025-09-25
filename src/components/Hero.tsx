"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" w-full ">
      <Image src="./images/Vector1.svg" alt="" fill sizes="" />
      <div>
        <h1>The Beacon </h1>
        <h1>of Blockchain</h1>
      </div>
      <Image src="./images/Vector2.svg" alt="" fill sizes="" />
      <p>
        Driving Mainstream Adoption, Empowering Developers, and Cultivating the
        Future of Web3
      </p>
    </section>
  );
}
