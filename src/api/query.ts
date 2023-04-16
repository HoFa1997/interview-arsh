import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "./uri";

export const useGetAllProdict = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
  });
};
