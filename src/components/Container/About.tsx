"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import MotionWrap from "@/wrapper/MotionWrap";

const products = [
  {
    title: "Carbon Fiber Drone Frames",
    description:
      "Our carbon fiber frames are engineered for ultimate performance. Lightweight, durable, and available in various sizes.",
    features: ["Lightweight Design", "Durability", "Variety of Sizes"],
  },
  {
    title: "Quadcopter Frames",
    description:
      "Designed for stability and versatility. Perfect for FPV racing, aerial photography, and surveying.",
    features: [
      "Compact and Modular Designs",
      "Ease of Assembly",
      "Custom Options",
    ],
  },
  {
    title: "VTOL Frames",
    description:
      "Combining innovation and functionality for specialized applications like mapping and delivery.",
    features: [
      "Vertical Takeoff and Landing Capability",
      "Hybrid Flight",
      "Optimized for Payloads",
    ],
  },
  {
    title: "Drone Frame Accessories",
    description:
      "Complement your drone with our range of high-quality accessories, including landing gears, motor mounts, and propeller guards.",
    features: [
      "Precision-engineered for perfect fit.",
      "Lightweight yet robust materials.",
      "Enhances drone safety and performance",
    ],
  },
  {
    title: "Customization Services",
    description:
      "Bring your vision to life with our bespoke customization services. We design frames tailored to your unique requirements.",
    features: [
      "Fully customizable shapes, sizes, and designs.",
      "Consultation with our expert engineers.",
      "Rapid prototyping and delivery.",
    ],
  },
  {
    title: "Drone Frame Kits",
    description:
      "These kits are perfect for DIY enthusiasts and professionals looking to build a high-performance drone from scratch.",
    features: [
      "Includes a durable carbon fiber frame, motor mounts, screws, and other essentials.",
      "Step-by-step assembly guide for ease of use.",
      "Compatible with popular motors, ESCs, and flight controllers.",
    ],
  },
];

const ProductCard = ({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: string[];
}) => {
  return (
    <Card
      className="w-full max-w-sm mx-auto dark:bg-foreground-100 bg-white shadow-lg hover:shadow-xl transition-shadow"
      radius="lg"
    >
      <CardBody className="px-5 py-3">
        <div className="flex justify-center flex-col items-center py-4">
          <div className="flex justify-center flex-col">
            <h2 className="text-2xl font-bold mb-3 text-primary text-center">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-4 dark:text-white">
              {description}
            </p>
            <ul className="list-disc list-inside text-md text-gray-700">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="dark:text-white list-disc marker:text-lg marker:text-primary"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const App = () => {
  return (
    <div className="p-6 dark:bg-background bg-gray-100 ">
      <h1 className="text-3xl font-bold text-center mb-6">
        <p className="text-primary">Our Specialty in Our Frames</p>
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <MotionWrap key={index}>
            <ProductCard {...product} />
          </MotionWrap>
        ))}
      </div>
    </div>
  );
};

export default App;
