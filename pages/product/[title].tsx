import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Icon } from "@material-ui/core";
import {
  ArrowBack,
  ShoppingCart as ShoppingCartIcon,
  StarBorder,
  StarsTwoTone,
} from "@material-ui/icons";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
  description: {
    // marginTop: "2rem",
  },
  addToCartButton: {
    margin: "1rem 2rem",
    marginLeft: 0,
  },
}));

export default function ProductDetail() {
  const classes = useStyles();

  const router = useRouter();
  const { title, price, description, image, rating }: any = router.query;

  return (
    <div className="lg:px-4 px-2 my-2">
      <Link href="/">
        <Button
          className={`${classes.addToCartButton}`}
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
            className={`${classes.description} primary-color text-xs py-3 font-light`}
            variant="subtitle1"
            component="p"
          >
            {description}
          </Typography>
          {rating && (
            <Typography
              className={`${classes.description} primary-color text-xs py-3 font-light`}
              variant="subtitle1"
              component="p"
            >
              <StarBorder />
              {rating.rate} <p> ({rating.count})</p>
            </Typography>
          )}

          <Button
            className={classes.addToCartButton}
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
