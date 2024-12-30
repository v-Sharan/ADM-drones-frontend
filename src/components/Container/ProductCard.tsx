"use client";

import React from "react";
import MotionWrap from "@/wrapper/MotionWrap";
import { Products } from "@/types/SanityResults";
import {
  Card,
  CardBody,
  Image as UIimage,
  Link as NextUILink,
} from "@nextui-org/react";
import Image from "next/image";
import { urlFor } from "@/client";
import Link from "next/link";

const ProductCard = ({ products }: { products: Products[] }) => {
  return (
    <div className="py-5 flex gap-8 flex-wrap items-center justify-center">
      {products.map(({ _id, thumbUrl, title, description }, idx) => (
        <MotionWrap key={idx}>
          <NextUILink as={Link} href={`/products/${_id}`}>
            <Card
              isBlurred
              className="py-1.5 px-1 dark:bg-foreground-100 border-none w-[300px]"
            >
              <CardBody>
                <div className="flex flex-col gap-6 md:gap-4 items-center justify-center">
                  <div className="relative col-span-6 md:col-span-4">
                    <UIimage
                      as={Image}
                      alt="Album cover"
                      className="dark:bg-background bg-foreground-100 object-cover"
                      height={200}
                      width={300}
                      src={urlFor(thumbUrl).url()}
                    />
                  </div>
                  <h2 className="text-primary font-semibold">{title}</h2>
                </div>
                <p className="text-gray-800 dark:text-white/90">
                  {description}
                </p>
              </CardBody>
            </Card>
          </NextUILink>
        </MotionWrap>
      ))}
    </div>
  );
};

export default ProductCard;
