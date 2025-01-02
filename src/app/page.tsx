import { Header, ProductCard, About } from "@/components";
import { client } from "@/client";
import { Home as HomeType, Products } from "@/types/SanityResults";
import { HomeProductQuery, HeaderQuery } from "@/actions/query";
import MotionWrap from "@/wrapper/MotionWrap";

const App = async () => {
  const products = await client.fetch<Products[]>(HomeProductQuery);
  const images = await client.fetch<HomeType[]>(HeaderQuery);
  return (
    <>
      <Header images={images} />
      <h1 className="text-center font-semibold text-3xl">
        <p className="text-primary">Our Products will be Our Growth</p>
      </h1>
      <ProductCard products={products} />
      <MotionWrap>
        <div className="flex justify-center items-center py-4">
          <div className="flex justify-center items-center text-center sm:w-[75%]">
            <p className="text-2xl">
              At <span className="text-primary font-semibold">ADM Drones</span>,
              we specialize in manufacturing cutting-edge drone frames designed
              for{" "}
              <span className="text-primary font-semibold">
                performance and durability
              </span>
              . Our frames are crafted from premium{" "}
              <span className="text-primary font-semibold">carbon fiber</span>,
              ensuring unmatched{" "}
              <span className="text-primary font-semibold">lightweight</span>{" "}
              properties and{" "}
              <span className="text-primary font-semibold">
                robust strength ideal
              </span>{" "}
              for all your aerial needs.
            </p>
          </div>
        </div>
      </MotionWrap>
      <About />
    </>
  );
};

export default App;
