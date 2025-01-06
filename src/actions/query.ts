import { defineQuery } from "next-sanity";
import { Products } from "@/types/SanityResults";

export const HeaderQuery = defineQuery(`*[_type == "home"]{imgUrl,alt,_id}`);

export const HomeProductQuery = defineQuery(`*[_type == "products"][0..7]`);

export const ProductQuery = defineQuery(`*[_type == "products"]`);

export const ServicesQuery =
  defineQuery(`*[_type == "services"]{...,"imgUrl":imgUrl.asset->url
    }`);

export const productFindQuery = (_id: Products["_id"]) =>
  defineQuery(`*[_type == "products" && _id match "${_id}"]{
  ...,
  "versions":versions[]->{
    ...,
    "imgUrl":imgUrl.asset->url
  },
}`);

export const AboutQuery = defineQuery(`*[_type == "about"]`);
