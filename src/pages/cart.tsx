import ProductCardItem from "@/component/ProductCardItem";
import { useCartStore } from "@/zustand/cartStore";
import { Container, Grid } from "@mui/material";
import React from "react";

const CartPage: React.FC = () => {
  const [hyd, setHyd] = React.useState<boolean>(false);
  const store = useCartStore((state) => state.cart);
  React.useEffect(() => {
    setHyd(true);
  }, []);
  return (
    <Container>
      <Grid container columns={4}>
        {hyd &&
          store.map((prodcut) => (
            <Grid item xs={1} key={prodcut._id}>
              <ProductCardItem product={prodcut} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CartPage;
