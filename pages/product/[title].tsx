import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/material/styles";
import { Grid, Typography, Button, Icon } from "@mui/material";
import {
  ArrowBack,
  ShoppingCart as ShoppingCartIcon,
  StarBorder,
  StarsTwoTone,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail() {
  const router = useRouter();
  const { title, price, description, image, rating }: any = router.query;

  return (
    <div className="lg:px-4 px-2 my-2">
      <Link href="/">
        <Button
          className={`m-3`}
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
        >
          Go Back
        </Button>
      </Link>
      <div className="flex items-start justify-between flex-col md:flex-row flex-wrap">
        <div className="flex-grow lg:w-1/2 w-full  flex items-center justify-center lg:justify-start">
          <Image
            src={image}
            height={180}
            width={180}
            alt={title}
            className="mx-auto"
            loading="lazy"
          />
        </div>
        <div className="flex-grow lg:w-1/2 w-full">
          <Typography
            gutterBottom
            variant="h5"
            className={` primary-color font-bold text-xl`}
          >
            {title}
          </Typography>
          <Typography
            className="secondary-color lg:text-md text-lg"
            variant="h4"
          >
            £{price}
          </Typography>
          <Typography
            className={` primary-color text-xs py-3 font-light`}
            variant="subtitle1"
            component="p"
          >
            {description}
          </Typography>
          {rating && (
            <Typography
              className={` primary-color text-xs py-3 font-light`}
              variant="subtitle1"
              component="p"
            >
              <StarBorder />
              {rating.rate} <p> ({rating.count})</p>
            </Typography>
          )}

          <Button
            className={"m-3"}
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
