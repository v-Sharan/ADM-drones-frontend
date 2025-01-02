"use client";

import { About } from "@/types/SanityResults";
import MotionWrap from "@/wrapper/MotionWrap";
import { Card, CardBody } from "@nextui-org/react";

const Applications = ({ services }: { services: About[] }) => {
  return (
    <>
      {services.map((item, idx) => (
        <MotionWrap key={idx} classNames="w-full max-w-sm mx-auto">
          <Card
            className="dark:bg-foreground-100 bg-white shadow-lg hover:shadow-xl transition-shadow"
            radius="lg"
          >
            <CardBody className="px-5 py-3">
              <div className="flex justify-center flex-col items-center py-4">
                <div className="flex justify-center flex-col">
                  <h2 className="text-2xl font-bold mb-3 text-primary text-center">
                    {item.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4 dark:text-white">
                    {item.description}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </MotionWrap>
      ))}
    </>
  );
};

export default Applications;
