import { productFindQuery } from "@/actions/query";
import { client } from "@/client";
import VersionsCard from "@/components/VersionsCard";
import { Products } from "@/types/SanityResults";

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const product = await client.fetch<Products[]>(
    productFindQuery((await params).id)
  );
  return (
    <div className="flex flex-col gap-6 px-2 py-5 w-[70%] justify-center">
      {product.map((item, idx) => (
        <VersionsCard key={idx} product={item} idx={`${idx}`} />
      ))}
    </div>
  );
};

export default Product;
