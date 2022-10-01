import { NextPage } from "next";
import { Progress } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
const Shoes: NextPage = () => {
  return (
    <>
      <h1>Hello World</h1>

      <Progress value={50} />
      <Button className="!bg-amber-500 text-black">Button</Button>
    </>
  );
};
export default Shoes;
