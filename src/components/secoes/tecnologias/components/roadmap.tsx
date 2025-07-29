"use client"

import './styles.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { RiNextjsLine } from "react-icons/ri";
import { SiReact } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSass } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

import { TecnologiaProps } from '@/types/props';

const iconMap = {
  RiNextjsLine: RiNextjsLine,
  SiReact: SiReact,
  TbBrandJavascript: TbBrandJavascript,
  RiTailwindCssFill: RiTailwindCssFill,
  BiLogoSass: BiLogoSass,
  FaNodeJs: FaNodeJs,
};

export function RoadmapTecnologias({ tecnologias }: { tecnologias: TecnologiaProps[] }) {
  return (
    <div>
      <VerticalTimeline
        lineColor='var(--foreground)'
        layout='2-columns'
      >
        {tecnologias.map(tecnologia => {
          const Icon = iconMap[tecnologia.icon];

          return (
            <VerticalTimelineElement
              key={tecnologia.nome}
              id={tecnologia.nome}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'var(--fundoRoadmap)',
                color: 'var(--corFonteRoadmap)',
                borderTop: '3px solid var(--bordaSuperior)',
                boxShadow: 'none'
              }}
              contentArrowStyle={{ borderRight: '7px solid  var(--corSetaElementoRoadmap)' }}
              date={tecnologia.anosExp}
              textClassName='vertical-timeline-element-texts'
              iconStyle={{
                background: 'var(--corFundoInteriorCirculo)',
                boxShadow: '0 0 0 3px var(--foreground)',
              }}
              icon={<Icon size={50} color='var(--foreground)' />}
            >
              <h3 className="vertical-timeline-element-title">{tecnologia.nome}</h3>
              <h4 className="vertical-timeline-element-subtitle">{tecnologia.stack}</h4>
              <p>
                {tecnologia.paragraph}
              </p>
            </VerticalTimelineElement>
          )
        })}

      </VerticalTimeline>
    </div>
  )
}