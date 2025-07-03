"use client";

import Image from "next/image";
import Link from "next/link";

interface typeCardProjectMasters {
  title: string;
  description: string;
  img: any;
  linkWeb: string;
}

const cardProjectMasters = ({
  title,
  description,
  img,
  linkWeb,
}: typeCardProjectMasters) => {
  return (
    <div className="max-w-[400px] w-full flex flex-col gap-10">
      <div className="w-full h-[200px] box_project-masters-img">
        <Image
          src={img}
          alt={title}
          width={400}
          height={400}
          className="w-full h-[200px] object-cover border-2 border-white rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2 align-center text-center items-center justify-center m-auto box_project-masters-info">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p>{description}</p>
        <Link
          href={linkWeb}
          target="__blank"
          className="text-white bg-blue-500 px-2 py-1 p-2 rounded w-[100px] hover:bg-blue-600"
        >
          Web Page
        </Link>
      </div>
    </div>
  );
};

export default cardProjectMasters;
