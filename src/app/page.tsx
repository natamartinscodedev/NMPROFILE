'use client'

import CardMidia from '@/components/CardMidia/index'
import Image from 'next/image';
import AnimarionSkills from '@/components/AnimationSkills/index'
import ImgHome from '@/image/imghome.png'
import CardProjec from '@/components/CardProjects/index'
import { dataLinkLeft, dataLinkRight } from '@/utils/dateLinks.json'
import CardSkill from '@/components/cardExperience/index'
import CardListExperience from '@/components/cardExperience/listSkillsEx'
import { Code, Component, Github, Linkedin, MailPlus, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className='container'>
        <nav className='card_nav'>
          <h2>NM</h2>
          <p>ALL WORKS</p>
          <div className='box_midia'>
            <CardMidia
              icon={<Linkedin size={25} />}
              link='https://www.linkedin.com/in/nata-martins/'
            />
            <CardMidia
              icon={<Github size={25} />}
              link='https://github.com/natamartinscodedev'
            />
            <CardMidia
              icon={<Twitter size={25} />}
              link='https://twitter.com/naythan777'
            />
            <button className='button-translation'>pt-BR</button>
          </div>
        </nav>
      </header>
      <main className=''>
        <section className='box_info-me container'>
          <div className='card_video'>
            <video src="/image/videobackground.mp4" autoPlay loop muted />
          </div>
          <div className='box-info'>
            <h1>Frontend Developer
              <div>
                <span>&</span>
                <span>UI/UX Developer</span>
              </div>
            </h1>
            <p>
              Desde 2021, tenho me dedicado ao desenvolvimento de interfaces e softwares,
              transformando minha paixão em uma carreira. Especializado em linguagens e tecnologias
              de ponta, como JavaScript/TypeScript, ReactJS e NextJS, meu objetivo é criar produtos
              digitais de alta qualidade que impactem positivamente a vida das pessoas.
            </p>
          </div>
          <div className='box-img'>
            <Image src={ImgHome} alt='' />
          </div>
        </section>
        <section className='animation_skills'>
          <div className='container_animation-skills'>
            <div className='box_animation'>
              <AnimarionSkills
                name='React'
                style={true}
              />
              <AnimarionSkills
                name='JavaScript'
                style={false}
              />
              <AnimarionSkills
                name='Next.JS'
                style={true}
              />
              <AnimarionSkills
                name='typeScript'
                style={false}
              />
            </div>
            <div className='box_animation'>
              <AnimarionSkills
                name='ui/ux Designer'
                style={true}
              />
              <AnimarionSkills
                name='node.JS'
                style={false}
              />
              <AnimarionSkills
                name='html5/css3'
                style={true}
              />
              <AnimarionSkills
                name='clean code'
                style={false}
              />
            </div>
            <div className='box_animation'>
              <AnimarionSkills
                name='ui/ux Designer'
                style={true}
              />
              <AnimarionSkills
                name='node.JS'
                style={false}
              />
              <AnimarionSkills
                name='html5/css3'
                style={true}
              />
              <AnimarionSkills
                name='clean code'
                style={false}
              />
            </div>
          </div>
        </section>
        <section className='container_work'>
          <h2>Works</h2>
          <div className='card_project-animation'>
            <div className='box-projectsLeft box-projects '>
              <div className='box-left'>
                {
                  dataLinkLeft && dataLinkLeft.map((item: any, index: any) => (
                    <CardProjec
                      key={index}
                      name={item.name}
                      descripion={item.descripion}
                      linkGithub={item.linkGithub}
                      linkVercel={item.linkVercel}
                      image={item.img}
                    />
                  ))
                }
                {
                  dataLinkLeft && dataLinkLeft.map((item: any, index: any) => (
                    <CardProjec
                      key={index}
                      name={item.name}
                      descripion={item.descripion}
                      linkGithub={item.linkGithub}
                      linkVercel={item.linkVercel}
                      image={item.img}
                    />
                  ))
                }
              </div>
            </div>
            <div className='box-projectsRight box-projects '>
              <div className='box-right'>
                {
                  dataLinkRight && dataLinkRight.map((item: any, index: any) => (
                    <CardProjec
                      key={index}
                      name={item.name}
                      descripion={item.descripion}
                      linkGithub={item.linkGithub}
                      linkVercel={item.linkVercel}
                      image={item.img}
                    />
                  ))
                }
                {
                  dataLinkRight && dataLinkRight.map((item: any, index: any) => (
                    <CardProjec
                      key={index}
                      name={item.name}
                      descripion={item.descripion}
                      linkGithub={item.linkGithub}
                      linkVercel={item.linkVercel}
                      image={item.img}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </section>
        <section className='card_experience container'>
          <h3>Experience professional</h3>
          <div className='container_boxs-experience'>
            <div className='container_info-experience'>
              <div className='box_card-info-experience'>
                <CardSkill
                  icon={<Code size={50} />}
                  title='Developer'
                  description='Experience with,web pages, softwares, web responsives...'
                />
                <CardSkill
                  icon={<Component size={50} />}
                  title='ui/ux'
                  description='Experience with, Prototipos, Figma, Adobe...'
                />
              </div>
              <div className='box_objective-professional'>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <p>
                  Meu objetivo é continuar crescendo como profissional, desenvolvendo produtos de qualidade,
                  transformando vidas e aprendendo novas tecnologias. Estou constantemente em busca de novos
                  desafios que me permitam aplicar minhas habilidades e contribuir para projetos inovadores.
                  Adepto de metodologias ágeis, acredito na entrega rápida e contínua de valor.
                </p>
              </div>
            </div>
            <div className='container_info-skills-experience'>
              <CardListExperience
                title='Desenvolvimento Web e Desenvolvimento de Software'
                skills='JavaScript/TypeScript: Expertise em ES6+, Ember.js. Frameworks e Bibliotecas: 
                ReactJS, NextJS, VueJS, NodeJS. Integrações BFF (Backend for Frontend): Experiência com 
                REST APIs. Styling: Proficiência em Sass, Styled Components, Tailwind CSS, Material UI. 
                Progressive Web Apps (PWAs): Criação de sites responsivos e acessíveis.'
              />
              <CardListExperience
                title='Desenvolvimento Orientado a Testes (TDD)'
                skills='Ferramentas: Jest, Cypress.Clean Code: Código limpo, acessível e reutilizável.'
              />
              <CardListExperience
                title='Desenvolvimento Orientado a Testes (TDD)'
                skills='Ferramentas: Figma, Storybook.Ecossistema JS: Babel, Webpack.'
              />
              <CardListExperience
                title='Outras Tecnologias'
                skills='Bancos de Dados: MongoDB, Firebase. Linguagens Adicionais: Java (Maven, Spring Boot), 
                Kotlin. Contêineres: Docker.'
              />
            </div>
          </div>
        </section>
        <section className='card_contact'>
          <div className='container'>
            <h3>Quer começar um projeto e
              alavancar seu produto online?</h3>
            <p>Entre em contato para conversarmos</p>
            <p>Redes para contato:</p>

            <div className='contact_footer'>
              <CardMidia
                icon={<Linkedin size={25} />}
                link='https://www.linkedin.com/in/nata-martins/'
              />
              <CardMidia
                icon={<Github size={25} />}
                link='https://github.com/natamartinscodedev'
              />
              <CardMidia
                icon={<Twitter size={25} />}
                link='https://twitter.com/naythan777'
              />
            </div>
            <Link className='mail-pus' href='mailto:nata.codedev@gmail.com'><MailPlus size={25} /> Email: nata.codedev@gmail.com</Link>

            {/* <Link href='https://mycompany-iota.vercel.app/' target='__blank'>NSoluções</Link> */}
          </div>
        </section>
      </main>
      <footer className='container_footer'>
        <p>Natã Martins © 2021 -Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
