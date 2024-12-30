import React from "react";
import { client } from "@/client";
import { AboutQuery } from "@/actions/query";
import { Applications as ApplicationsComponet } from "@/components";

const Applications = async () => {
  const abouts = await client.fetch(AboutQuery);
  return (
    <div className="flex flex-wrap gap-6 px-2 py-5 w-[70%] justify-center">
      <ApplicationsComponet services={abouts} />
    </div>
  );
};

export default Applications;
