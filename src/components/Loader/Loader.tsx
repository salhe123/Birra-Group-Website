import { LoaderIcon } from "lucide-react";
import React from "react";

export default function Loader() {
  return (
    <div className="w-full min-h-[30vh] h-full grow flex justify-center items-center">
      <LoaderIcon size={64} className="animate-spin" />
    </div>
  );
}
