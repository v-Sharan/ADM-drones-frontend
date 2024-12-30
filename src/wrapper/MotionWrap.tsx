import React from "react";
import Motion from "@/components/Motion";

const MotionWrap = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => (
  <Motion
    whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
    transition={{ duration: 0.5 }}
  >
    <div className={classNames}>{children}</div>
  </Motion>
);
export default MotionWrap;
