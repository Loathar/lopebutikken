import { NextPage } from "next";
import Image from "next/image";
import { Progress } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
// import grønn from "../images/shoes";
const Shoes: NextPage = () => {
  return (
    <>
      <section className="relative mt-48">
        <h1>Hello World</h1>

        <Progress value={50} />
        <Button className="!bg-amber-500 text-black">Button</Button>
      </section>
    </>
  );
};
export default Shoes;
