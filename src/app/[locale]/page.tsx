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
import LanguageSelector from '@/components/LanguageSelector';
import { useTranslations } from 'next-intl';
import TypingEffect from '@/components/TypingEffect';

export default function Home({ params }: any) {
  const t = useTranslations('HomePage');
  const ex = useTranslations('WxperiencePage')
  const locale = params.locale


  return (
    <>
      <header className='container'>
        <nav className='card_nav'>
          <Link href='/'>NM</Link>
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
            <LanguageSelector location={locale} />
          </div>
        </nav>
      </header>
      <main className=''>
        <section className='box_info-me container'>
          <div className='card_video'>
            <video src="/image/videobackground.mp4" autoPlay loop muted />
          </div>
          <div className='box-info'>
            <h1><TypingEffect description='Frontend Developer' />
              <div>
                <span>&</span>
                <span><TypingEffect description='UI/UX Developer' /></span>
              </div>
            </h1>
            <p>{t('description')}</p>
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
              <AnimarionSkills
                name='Jest'
                style={true}
              />
              <AnimarionSkills
                name='Cypress'
                style={false}
              />
              <AnimarionSkills
                name='MongoDB Atlas'
                style={true}
              />
              <AnimarionSkills
                name='PWAs'
                style={false}
              />
            </div>
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
              <AnimarionSkills
                name='Jest'
                style={true}
              />
              <AnimarionSkills
                name='Cypress'
                style={false}
              />
              <AnimarionSkills
                name='MongoDB Atlas'
                style={true}
              />
              <AnimarionSkills
                name='PWAs'
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
                <p>{t('objective')}</p>
              </div>
            </div>
            <div className='container_info-skills-experience'>
              <CardListExperience
                title={`${t('subTitle01')}`}
                skills={`${t('text01')}`}
              />
              <CardListExperience
                title={`${t('subTitle02')}`}
                skills={`${t('text02')}`}
              />
              <CardListExperience
                title={`${t('subTitle02')}`}
                skills={`${t('text03')}`}
              />
              <CardListExperience
                title={`${t('subTitle02')}`}
                skills={`${t('text04')}`}
              />
            </div>
          </div>
        </section>
        <section className='card_contact'>
          <div className='container'>
            <h3>{`${t('contactTitle')}`}</h3>
            <p>{`${t('contactSubTitle')}`}</p>
            <p>{`${t('MidiaTitle')}`}</p>

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
            <Link
              className='mail-pus'
              href='https://nmsolucoes-com-br.vercel.app/'
              target='__blank'
            >{`${t('btnClick')}`}</Link>

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
