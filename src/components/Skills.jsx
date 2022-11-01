import React from 'react'
import {
    DiJsBadge,
    DiGithubBadge,
    DiHtml5,
    DiCss3,
    DiNodejsSmall,
    DiReact,
    DiPython,
    DiBootstrap,


  } from "react-icons/di";

  import { SiFigma, SiTailwindcss, SiVite, SiPowerbi } from "react-icons/si";
  

const Skills = () => {
  return (
    <section id='skills-h2'>
        <h2>Habilidades</h2>

        <div id='skills'>
            <DiHtml5 className='icon inline-flex w-24 h-24' data-tip="HTML"/>
            <DiCss3 className='icon inline-flex'/>
            <DiJsBadge className='icon inline-flex'/>
            <DiBootstrap className='icon inline-flex'/>
            <DiReact className='icon inline-flex'/>
            <DiNodejsSmall className='icon inline-flex' />
            <SiVite className='icon inline-flex' />
            <SiTailwindcss className='icon inline-flex' />
            <SiFigma className='icon inline-flex' />
            <DiPython className='icon inline-flex' /> 
            <SiPowerbi className='icon inline-flex' />
            <DiGithubBadge className='icon inline-flex' />

        </div>
    </section>
  )
}

export default Skills