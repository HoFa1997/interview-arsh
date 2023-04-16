import { IProductRes } from "@/api/type";
import { getAllProduct } from "@/api/uri";
import ProductCardItem from "@/component/ProductCardItem";
import { useCartStore } from "@/zustand/cartStore";

import { Container, Grid } from "@mui/material";
import React from "react";

export async function getServerSideProps() {
  const products = await getAllProduct();
  return {
    props: {
      products,
    },
  };
}

interface IHome {
  products: IProductRes;
}

const Home: React.FC<IHome> = ({ products }) => {
  const [product, setProduct] = React.useState<IProductRes>(products);

  React.useEffect(() => {
    setProduct(products);
  }, [products]);

  return (
    <Container>
      <Grid container columns={4}>
        {product.result?.data.map((prodcut) => (
          <Grid item xs={1} key={prodcut._id}>
            <ProductCardItem product={prodcut} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
