import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white w-full flex justify-between items-center p-4 px-10">
      <div className="flex items-center">
        <Image src="/logo.png" alt="logo" width={70} height={70} />
        <div className="ml-4">
          <p className="font-bold mb-0">Frontend Developer</p>
          <span className="text-muted text-sm">Skill assessment test</span>
        </div>
      </div>

      <div className="w-max p-2 px-4 rounded-lg text-purple bg-purple-light">
        <p className="font-bold mb-0">
          29:10 <span className="font-normal text-sm">time left</span>
        </p>
      </div>
    </div>
  );
}
