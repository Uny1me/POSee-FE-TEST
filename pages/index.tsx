import * as React from "react";
import { Container, Typography } from "@mui/material";
import styles from "styles/Main.module.css";
import CardComponent from "components/CardComponent";
import axios from "axios";
import { usePathname } from "next/navigation";

export default function Home({ data, search }: any) {
  const page = usePathname();
  console.log(page);
  return (
    <div
      className={
        "w-[95%] mx-auto flex items-center justify-center py-10 flex-col"
      }
    >
      <Typography
        variant="h5"
        // variantMapping={}
        className="font-bold text-black mb-12"
        textTransform={"uppercase"}
      >
        Products
      </Typography>
      <CardComponent data={data} search={search} />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get("https://fakestoreapi.com/products");
  const data = await res.data;

  // Pass data to the page as props
  return {
    props: {
      data,
    },
  };
}
