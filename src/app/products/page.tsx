import { client } from "@/client";
import { ProductQuery } from "@/actions/query";
import { Products as ProductsType } from "@/types/SanityResults";
import { ProductCard } from "@/components";

const Products = async () => {
  const products = await client.fetch<ProductsType[]>(ProductQuery);
  return <ProductCard products={products} />;
};

export default Products;
