import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { speak } from "../redux/counter";
import { logCart, uppdateAmount } from "../redux/checkout";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();
  const { cart, amount } = useSelector((state) => state.checkout);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  console.log(cart);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-blue-gray-50 text-xl"
      >
        <a href="#" className="flex items-center">
          Nyheter
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-blue-gray-50"
      >
        <a href="#" className="flex items-center">
          Sko
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-blue-gray-50"
      >
        <a href="#" className="flex items-center">
          Klær
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-blue-gray-50"
      >
        <a href="#" className="flex items-center">
          Tilbehør
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 text-gray-50 bg-gray-900 rounded-none border-none">
      <div className="container mx-auto flex items-center justify-between ">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 text-2xl font-bold uppercase tracking-widest  text-white"
        >
          <span>Løpesjappa 👟🔥</span>
        </Typography>

        <div className="hidden lg:block">{navList}</div>
        <p className="m-2">{cart}</p>
        <p className="m-2">{amount}</p>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block"
          onClick={() => dispatch(logCart())}
        >
          <span>Buy Now</span>
        </Button>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block"
          onClick={() => dispatch(uppdateAmount())}
        >
          <span>Uppdate cart</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
