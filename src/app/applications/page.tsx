import React from "react";
import { client } from "@/client";
import { AboutQuery } from "@/actions/query";
import { Applications as ApplicationsComponet } from "@/components";

const Applications = async () => {
  const abouts = await client.fetch(AboutQuery);
  return <ApplicationsComponet services={abouts} />;
};

export default Applications;
