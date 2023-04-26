import {
  Card,
  Collapse,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import styles from "styles/Card.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CardComponent({ data, search }: any) {
  const router = useRouter();

  type Data = {
    id: number;
    title: string;
    category: string;
    price: number;
    description: string;
    image: string;
  };

  const { searchTerm } = search;

  function handleClick(id: Number, title: string) {
    const obj = data?.find((obj: any) => obj.id === id);
    router.push(
      {
        pathname: "/product/[title]",
        query: obj,
      },
      `/product/${title}`
    );
  }
  const filteredProducts = data.filter(({ title, category }: Data) => {
    if (searchTerm.trim() === "") {
      return true; // Display all products when searchTerm is empty
    }
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      className="flex items-end lg:justify-between justify-center gap-4"
    >
      {filteredProducts?.map(
        ({ id, title, image, description, price, category }: Data) => {
          return (
            <Item
              key={id}
              onClick={() => handleClick(id, title)}
              className={`${styles.card} cursor-pointer  mb-5 py-5 px-3 w-[95%] md:w-full m-auto`}
              sx={{ maxWidth: 345 }}
            >
              <div className=" flex items-center justify-end mb-3">
                <Button
                  variant="contained"
                  size="small"
                  className="bg-purple-300 text-xs"
                >
                  {category}
                </Button>
              </div>
              <div style={{ minHeight: 250 }}>
                <Image
                  src={image}
                  height={180}
                  width={180}
                  alt={title}
                  className="mx-auto"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={image}
                />
              </div>
              <CardContent>
                <Typography
                  gutterBottom
                  className="primary-color text-md"
                  component="div"
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className={`${styles["card-description"]} text-xs py-3`}
                >
                  {description}
                </Typography>
                <Typography
                  variant="body2"
                  className={`${styles.price} secondary-color font-bold text-xl`}
                >
                  £{price}
                </Typography>
              </CardContent>
            </Item>
          );
        }
      )}
    </Grid>
  );
}
