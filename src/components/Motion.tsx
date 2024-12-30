"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

const Motion = ({
  children,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default Motion;
