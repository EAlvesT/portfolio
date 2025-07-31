"use client"

import styles from './styles.module.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { RiNextjsLine } from "react-icons/ri";

import { ProjetoProps } from '@/types/props';
import Image from 'next/image';

export function RoadmapProjetos({ projetos }: { projetos: ProjetoProps[] }) {
  console.log(projetos[0].linkdemo)
  return (
    <div>
      <VerticalTimeline
        lineColor='var(--foreground)'
        layout='2-columns'
      >
        {projetos.map(projeto => {
          return (
            <VerticalTimelineElement
              key={projeto.nome}
              id={projeto.nome}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'var(--fundoRoadmap)',
                color: 'var(--corFonteRoadmap)',
                borderTop: '3px solid var(--bordaSuperior)',
                boxShadow: 'none'
              }}
              contentArrowStyle={{ borderRight: '7px solid  var(--corSetaElementoRoadmap)' }}
              textClassName='vertical-timeline-element-texts'
              iconStyle={{
                background: 'var(--corFundoInteriorCirculo)',
                boxShadow: '0 0 0 3px var(--foreground)',
              }}
              icon={<RiNextjsLine size={50} color='var(--foreground)' />}
            >
              <div className={styles.verticalTimelineElementDiv}>
                <h3 className="vertical-timeline-element-title">{projeto.nome}</h3>
                <div className={styles.verticalTimelineElementDivImage}>
                  <Image
                    alt='Imagem do projeto Barra Pneus'
                    src={projeto.imageurl}
                    quality={100}
                    priority
                    fill
                    sizes='(max-width: 768px) 100vw, 300px'
                  />
                </div>
                <p>
                  {projeto.descricao}
                </p>
                <div className={styles.botoes}>
                  {projeto.havelinkdemo && (
                    <a href={projeto.linkdemo} target='_blank' rel="noopener noreferrer">
                      <button type='button'>Visitar</button>
                    </a>
                  )}
                  {projeto.havelinkgithub && (
                    <a href={projeto.linkgithub} target='_blank' rel="noopener noreferrer">
                      <button type='button'>Repositório</button>
                    </a>
                  )}
                </div>
              </div>
            </VerticalTimelineElement>
          )
        })}

      </VerticalTimeline>
    </div>
  )
}