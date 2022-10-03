import Image from "next/image";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import nikeHero from "../images/nikeHero.webp";

const Hero = function () {
  return (
    <>
      <main className="container mx-auto text-center">
        <div className="min-h-full min-w-full -z-10 overflow-hidden fixed top-0 left-0 opacity-80">
          <Image src={nikeHero} alt="Black Nike shoes" layout="fill" />
        </div>
        <div className=" mt-48">
          <div>
            <Link href={"/news"}>
              <Button
                variant="gradient"
                size="lg"
                color="orange"
                className=" text-gray-800"
              >
                Turen starter her!
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
export default Hero;
