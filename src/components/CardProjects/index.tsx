import { CodeXml, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface typeContent {
  name: string;
  descripion: string;
  linkGithub: string;
  linkVercel: string;
  image: any;
}

const CardProjects = ({
  name,
  descripion,
  linkGithub,
  linkVercel,
  image,
}: typeContent) => {
  return (
    <div className="box_card-project">
      <Image src={image} alt={name} width={300} height={200} />
      
      <div className="hover_box">
        <div>
          <h3>{name}</h3>
          <p>{descripion}</p>
        </div>
        <div className="box_link">
          <Link href={linkGithub} target="__blank">
            <Github size={25} />
            Github
          </Link>
          <Link href={linkVercel} target="__blank">
            <CodeXml size={25} />
            Web Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
