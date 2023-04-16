import React from "react";
import LocationIcon from "@mui/icons-material/FmdGoodOutlined";
import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareIcon from "@mui/icons-material/ShareOutlined";
import CallIcon from "@mui/icons-material/CallOutlined";
import SmsIcon from "@mui/icons-material/SmsOutlined";
import { imageUrlGenerator } from "@/api/uri";
import { Card, Box, IconButton, Typography, Button } from "@mui/material";
import Image from "next/image";
import { IProduct } from "@/api/type";
import { useCartStore } from "@/zustand/cartStore";

interface ProductCardItemProps {
  product: IProduct;
}

const ProductCardItem: React.FC<ProductCardItemProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <Card sx={{ m: 1, p: 1.5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          width={50}
          height={50}
          src={imageUrlGenerator(product.business.media[0].hash)}
          alt={product.title}
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
        <Box pr={1}>
          {product.business.name}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <LocationIcon />
            {product.regionName}
          </Box>
        </Box>
      </Box>
      <Box mt={2} width="100%" minHeight={200} position={"relative"}>
        <Image
          fill
          src={imageUrlGenerator(product.media[0].hash)}
          alt={product.title}
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        pt={1}
      >
        <Box>
          <IconButton>
            <LikeIcon />
          </IconButton>
          <IconButton>
            <BookmarkIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton>
            <SmsIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography pt={1} noWrap variant="body1">
        {product.title}
      </Typography>
      <Typography pt={1} noWrap variant="body2">
        {product.text}
      </Typography>
      <Button onClick={() => addToCart(product)}>اضافه به سبد خرید</Button>
    </Card>
  );
};

export default ProductCardItem;
