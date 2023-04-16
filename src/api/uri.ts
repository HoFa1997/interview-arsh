import axios from "axios";
import { IProductRes } from "./type";

export const getAllProduct = async () => {
  try {
    return (
      await axios.post<IProductRes>(
        "https://apis.uneed.ir/post/search",
        {
          tp: 1,
          lm: 20,
          pg: 1,
          bidc: "yg9oubu",
        },
        {
          headers: {
            t: "1rcP2/9hjHWKHyUmIvoxjinrzNSHA2wXCXtTbhnmvGk=",
          },
        }
      )
    ).data;
  } catch (error) {
    console.log(error);
  }
};

export const imageUrlGenerator = (hashImg: string) => {
  return `https://apis.uneed.ir/m/${hashImg}?pt=m1000`;
};
