import Image from 'next/image'
import Header from '../components/header'
import ProjectCard from '../components/projects/project-card'
import { useState } from 'react';

export default function Projects() {
  let [projects, setProjects] = useState<string>('Computación');

  return (
    <main
      id='projects'
      className="flex min-h-screen flex-col items-center justify-start bg-black text-white">
      <Header currentPage="Proyectos" />
      {/*First view */}
      <div className="flex flex-col items-center justify-center w-full h-full gap-y-6 py-6">
        <h1 className="text-4xl font-iceland font-semibold">Proyectos de <span onClick={() => setProjects("Computación")} className="text-asr-purple hover:text-asr-blue cursor-pointer" >Computación </span>/ <span onClick={() => setProjects("Diseño")} className="text-asr-green cursor-pointer hover:text-asr-blue" >Diseño</span></h1>
        {
          projects === "Computación" &&
          <div className='flex flex-col items-center gap-y-4'>
            <ProjectCard title="Trippio" description="Diseñamos y desarollamos nuestra plataforma Trippio, una plataforma web que genera Itinerarios de Viaje con Inteligencia Artificial" image="/assets/projects/trippio.png" url="https://trippio.ai" color="purple"/>
            <ProjectCard title="USE - W&T" description="Diseño y desarrollo de una plataforma web para empleadores estadounidenses que genere Training Plans con Inteligencia Artificial." image="/assets/projects/use.png" color="purple" />
            <ProjectCard title="SimpliCAR" description='Rediseño de landing page enfocado en los lineamientos de “Design for trust” de AirBNB. Identificación de componentes necesarios y desarrollo de landing.' image="/assets/projects/simplicar.png" url="https://simplicar.pe/" color="purple"/>
            <ProjectCard title="Unity 2D Demo" description='Desarrollo de demo de videojuego 2D en Unity.' image="/assets/projects/tzegarra.png" url="https://drive.google.com/file/d/14Mrvjfj_uJeKfK_VfAZzU2AsqAxMq6CL/view?usp=drive_link" color="purple"/>
            <ProjectCard title="Unity 3D Demo" description='Desarrollo de demo de videojuego 3D en Unity.' image="/assets/projects/toylo.png" color="purple"/>
          </div>
        }
        {
          projects === "Diseño" &&
          <div className='flex flex-col items-center gap-y-4'>
            <ProjectCard title="Trippio" description="Diseñamos y desarollamos nuestra plataforma Trippio, una plataforma web que genera Itinerarios de Viaje con Inteligencia Artificial" image="/assets/projects/trippio.png" url="https://trippio.ai" color="green"/>
            <ProjectCard title="USE - W&T" description="Diseño y desarrollo de una plataforma web para empleadores estadounidenses que genere Training Plans con Inteligencia Artificial." image="/assets/projects/use.png" color="green"/>
            <ProjectCard title="SimpliCAR" description='Rediseño de landing page enfocado en los lineamientos de “Design for trust” de AirBNB. Identificación de componentes necesarios y desarrollo de landing.' image="/assets/projects/simplicar.png" url="https://simplicar.pe/" color="green"/>
            <ProjectCard title="Unity 2D Demo" description='Desarrollo de demo de videojuego 2D en Unity.' image="/assets/projects/tzegarra.png" url="https://drive.google.com/file/d/14Mrvjfj_uJeKfK_VfAZzU2AsqAxMq6CL/view?usp=drive_link" color="green"/>
            <ProjectCard title="Unity 3D Demo" description='Desarrollo de demo de videojuego 3D en Unity.' image="/assets/projects/toylo.png" color="green"/>
          </div>


        }


      </div>

    </main>
  )
}
