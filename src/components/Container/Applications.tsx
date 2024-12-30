"use client";

import { urlFor } from "@/client";
import { About } from "@/types/SanityResults";
import MotionWrap from "@/wrapper/MotionWrap";
import {
  Card,
  CardBody,
  CardFooter,
  Image as NextUIImage,
} from "@nextui-org/react";
import Image from "next/image";

const Applications = ({ services }: { services: About[] }) => {
  return (
    <>
      {services.map((item, idx) => (
        <MotionWrap classNames="flex gap-5 flex-wrap justify-center" key={idx}>
          <div className="flex flex-col  gap-5">
            <h1 className="text-2xl font-bold text-primary">{item.title}:</h1>
            <div className="flex gap-5 p-3 justify-center flex-col sm:flex-row sm:bg-white">
              <div className="self-center w-[300px] h-[300px]">
                <NextUIImage
                  radius="lg"
                  shadow="md"
                  as={Image}
                  src={urlFor(item.imgUrl).url()}
                  width={300}
                  height={300}
                  alt={item._id}
                  className="bg-black/20 dark:bg-white/80 cursor-pointer w-auto h-auto"
                />
              </div>
              <p className="text-xl w-[50%]">{item.description}</p>
            </div>
          </div>
        </MotionWrap>
      ))}
    </>
  );
};

export default Applications;
