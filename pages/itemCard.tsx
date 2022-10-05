import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import Image from "next/image";

const ItemCard = function () {
  return (
    <Card className="w-96 p-4 m-4 rounded-none shadow-sm">
      <CardHeader color="blue" className="relative h-56 rounded-none shadow-sm">
        {/* <Image
          src="/../images/clothes/blåskjorte.webp"
          layout="fill"
          alt="img-blur-shadow"
          className="h-full w-full"
        /> */}
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
