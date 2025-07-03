"use client";

import CardMidia from "@/components/CardMidia/index";
import Image from "next/image";
import AnimarionSkills from "@/components/AnimationSkills/index";
import CardSkill from "@/components/cardExperience/index";
import CardListExperience from "@/components/cardExperience/listSkillsEx";
import CardProjectMasters from "@/components/cardProjectMasters/index";
import { Code, Component, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslations } from "next-intl";
import TypingEffect from "@/components/TypingEffect";
import ImgHome from "@/image/imghome.png";
import { dataLinkLeft, dataLinkRight } from "@/utils/dateLinks.json";
import CardProjec from "@/components/CardProjects/index";

export default function Home({ params }: any) {
  const t = useTranslations("HomePage");
  const ex = useTranslations("WxperiencePage");
  const locale = params.locale;

  return (
    <>
      <header className="container">
        <nav className="card_nav">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-black"
          >
            NM
          </Link>

          <div className="box_midia">
            <div className="box_midia-links">
              <CardMidia
                icon={<Linkedin size={25} />}
                link="https://www.linkedin.com/in/nata-martins/"
              />
              <CardMidia
                icon={<Github size={25} />}
                link="https://github.com/natamartinscodedev"
              />
              <CardMidia
                icon={<Twitter size={25} />}
                link="https://x.com/natabusiness777"
              />
            </div>
            <LanguageSelector location={locale} />
          </div>
        </nav>
      </header>

      <main>
        <section className="box_info-me container">
          <div className="card_video">
            <video src="/image/videobackground.mp4" autoPlay loop muted />
          </div>
          <div className="box-info">
            <h1>
              <TypingEffect description="Frontend Enginee" />
              <div>
                <span>&</span>
                <span>UI/UX</span>
              </div>
            </h1>
            <p>{t("description")}</p>
            <p>{t("titleEffect")}</p>
          </div>
          <div className="box-img">
            <Image src={ImgHome} alt="" />
          </div>
        </section>

        <section className="animation_skills">
          <div className="container_animation-skills">
            <div className="box_animation">
              <AnimarionSkills name="React" style={true} />
              <AnimarionSkills name="JavaScript" style={false} />
              <AnimarionSkills name="Next.JS" style={true} />
              <AnimarionSkills name="typeScript" style={false} />
              <AnimarionSkills name="ui/ux Designer" style={true} />
              <AnimarionSkills name="node.JS" style={false} />
              <AnimarionSkills name="html5/css3" style={true} />
              <AnimarionSkills name="clean code" style={false} />
              <AnimarionSkills name="Jest" style={true} />
              <AnimarionSkills name="Cypress" style={false} />
              <AnimarionSkills name="MongoDB Atlas" style={true} />
              <AnimarionSkills name="PWAs" style={false} />
              <AnimarionSkills name="Bun.js" style={false} />
            </div>
            <div className="box_animation">
              <AnimarionSkills name="React" style={true} />
              <AnimarionSkills name="JavaScript" style={false} />
              <AnimarionSkills name="Next.JS" style={true} />
              <AnimarionSkills name="typeScript" style={false} />
              <AnimarionSkills name="ui/ux Designer" style={true} />
              <AnimarionSkills name="node.JS" style={false} />
              <AnimarionSkills name="html5/css3" style={true} />
              <AnimarionSkills name="clean code" style={false} />
              <AnimarionSkills name="Jest" style={true} />
              <AnimarionSkills name="Cypress" style={false} />
              <AnimarionSkills name="MongoDB Atlas" style={true} />
              <AnimarionSkills name="PWAs" style={false} />
              <AnimarionSkills name="Bun.js" style={false} />
            </div>
          </div>
        </section>

        <section className="section_card-projects-master">
          <div className="section_card-projects-master-box">
            <h2 className="text-black font-bold text-2xl mb-10">
              Projetos em andamento
            </h2>

            <div className="card_project-master">
              <CardProjectMasters
                title="Day Life Coffee!"
                description="As Melhores Cafeterias de Belo Horizonte Descubra os locais mais aconchegantes para apreciar um café de qualidade."
                img="/image/coffee-img.png"
                linkWeb="https://www.daylifecoffee.com/"
              />
              <CardProjectMasters
                title="Analytic Web Pro"
                description="Milhões de novas oportunidades - Evite exclusão, multas e reputação em risco — torne sua empresa inclusiva, competitiva e legalmente segura."
                img="/image/analyticwebpro-img.png"
                linkWeb="https://www.analytcwebpro.com/"
              />
              <CardProjectMasters
                title="SimpeProfile"
                description="SimpleProfile is not just a link in bio it's an environment where anything can happen!"
                img="/image/simpeprofile-img.png"
                linkWeb="https://simpeprofile.com.br/NataCodeDev"
              />
            </div>
          </div>
        </section>

        <section className="container_work">
          <h2>Works</h2>
          <div className="card_project-animation">
            <div className="box-projectsLeft box-projects ">
              <div className="box-left">
                {dataLinkLeft &&
                  dataLinkLeft.map((item: any, index: any) => (
                    <CardProjec
                      key={index}
                      name={item.name}
                      descripion={item.descripion}
                      linkGithub={item.linkGithub}
                      linkVercel={item.linkVercel}
                      image={item.img}
                    />
                  ))}
                {dataLinkLeft &&
                  dataLinkLeft.map((item: any, index: any) => (
                    <CardProjec
                      key={index}
                      name={item.name}
                      descripion={item.descripion}
                      linkGithub={item.linkGithub}
                      linkVercel={item.linkVercel}
                      image={item.img}
                    />
                  ))}
              </div>
            </div>
            <div className="box-projectsRight box-projects ">
              <div className="box-right">
                {dataLinkRight &&
                  dataLinkRight.map((item: any, index: any) => (
                    <CardProjec
                      key={index}
                      name={item.name}
                      descripion={item.descripion}
                      linkGithub={item.linkGithub}
                      linkVercel={item.linkVercel}
                      image={item.img}
                    />
                  ))}
                {dataLinkRight &&
                  dataLinkRight.map((item: any, index: any) => (
                    <CardProjec
                      key={index}
                      name={item.name}
                      descripion={item.descripion}
                      linkGithub={item.linkGithub}
                      linkVercel={item.linkVercel}
                      image={item.img}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section className="card_experience container">
          <h3>{ex("title02")}</h3>
          <div className="container_boxs-experience">
            <div className="container_info-experience">
              <div className="box_card-info-experience">
                <CardSkill
                  icon={<Code size={50} />}
                  title="Developer"
                  description="WebPages, Softwares, PWAs, BFF, APIs..."
                />
                <CardSkill
                  icon={<Component size={50} />}
                  title="UI/UX"
                  description="Figma, Prototipos, Adobe..."
                />
              </div>
              <div className="box_objective-professional">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <p>{t("objective")}</p>
              </div>
            </div>
            <div className="container_info-skills-experience">
              <CardListExperience skills={`${t("text01")}`} />
              <CardListExperience skills={`${t("text02")}`} />
              <CardListExperience skills={`${t("text03")}`} />
            </div>
          </div>
        </section>

        <section className="card_contact">
          <div className="container">
            <h3>{`${t("contactTitle")}`}</h3>
            <p>{`${t("contactSubTitle")}`}</p>
            <p>{`${t("MidiaTitle")}`}</p>

            <div className="contact_footer">
              <CardMidia
                icon={<Linkedin size={25} />}
                link="https://www.linkedin.com/in/nata-martins/"
              />
              <CardMidia
                icon={<Github size={25} />}
                link="https://github.com/natamartinscodedev"
              />
              <CardMidia
                icon={<Twitter size={25} />}
                link="https://x.com/natabusiness777"
              />
            </div>

            <Link
              className="mail-pus"
              href="https://wa.me/5531982305506?text=Olá,%20vi%20seu%20projeto%20e%20quero%20conversar!
"
              target="__blank"
            >{`${t("btnClick")}`}</Link>

            {/* <Link href='https://mycompany-iota.vercel.app/' target='__blank'>NSoluções</Link> */}
          </div>
        </section>
      </main>

      <footer className="container_footer">
        <p>Natã Martins © 2021 -Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
