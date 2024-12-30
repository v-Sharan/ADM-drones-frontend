"use client";

import Image from "next/image";
import React from "react";
import {
  Card,
  CardBody,
  Image as NextUIImage,
  Button,
} from "@nextui-org/react";
import { Products } from "@/types/SanityResults";
import { urlFor } from "@/client";
import MotionWrap from "@/wrapper/MotionWrap";

const VersionsCard = ({ product, idx }: { product: Products; idx: string }) => {
  return (
    <div key={idx} className="flex flex-col justify-center gap-10">
      <h1 className="font-semibold text-3xl">{product.title}</h1>
      <Card
        isBlurred
        className="self-center border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <NextUIImage
                alt="Album cover"
                className="object-cover"
                height={200}
                shadow="md"
                src={urlFor(product.thumbUrl).url()}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h1 className="text-large font-medium mt-2">
                    {product.description}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <div>
        <h1 className="font-semibold text-start text-3xl">Versions</h1>
        <MotionWrap classNames="py-5 flex gap-8 flex-wrap items-center justify-center">
          {product.versions.map((item, idx) => (
            <Card
              key={idx}
              isBlurred
              className="py-1.5 px-1 dark:bg-foreground-100 border-none w-[300px]"
            >
              <CardBody className="flex flex-col gap-5">
                <div className="flex flex-col gap-6 md:gap-4 items-center justify-center">
                  <div className="relative col-span-6 md:col-span-4">
                    <NextUIImage
                      as={Image}
                      alt="Album cover"
                      className="dark:bg-background bg-foreground-100 object-cover"
                      height={300}
                      width={300}
                      src={item.imgUrl}
                    />
                  </div>
                  <h2>{item.versionName}</h2>
                </div>
                <ol className="text-gray-800 dark:text-white/90">
                  {item.description.map((des, idxs) => (
                    <li key={idxs}>{des}</li>
                  ))}
                </ol>
              </CardBody>
            </Card>
          ))}
        </MotionWrap>
      </div>
    </div>
  );
};

export default VersionsCard;
