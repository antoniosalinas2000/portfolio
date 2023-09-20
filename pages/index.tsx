import Image from 'next/image'
import Header from '../components/header'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import ProjectCard from '@/components/project-card'
import SkillCard from '@/components/skill-card'
import ExperienceCard from '@/components/experience'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-start bg-black text-white">
      <Header />
      {/*First view */}
      <div className="flex flex-col lg:flex-row w-full py-8">
        {/*Titulos, descripción */}
        <div className="flex flex-col w-full px-16 gap-y-8">
          <h1 className="text-6xl font-lexend font-semibold w-full lg:w-[450px]">
            <span className="text-asr-green">Diseño</span> y <span className="text-asr-purple">desarollo</span> Web... y más</h1>
          <p className="text-3xl font-iceland text-white/50 w-full">Transformando Ideas en Experiencias Digitales...
          </p>

          <p className='text-lg font-iceland text-white/50 w-full'>
            Estudiante de Ciencias de la Computación (8vo ciclo) en la Universidad Peruana de Ciencias Aplicadas,
            con una fuerte pasión por la tecnología y el estudio del comportamiento humano. Experiencia en start-ups,
            centrado en programación, testing y desarrollo de plataformas web y videojuegos.
            Personalidad polifacética y empática, con un creciente interés en inteligencia artificial.
          </p>

          <div className="flex flex-row items-center justify-center bg-white rounded-md gap-x-4 py-3 px-6 w-fit">
            <p className="font-lexend text-black font-bold">Contactame</p>
            <PaperAirplaneIcon className="h-6 w-6 stroke-black" />
          </div>
        </div>
        {/*HeroImage */}
        <div className="hidden lg:flex flex-col w-full px-16 items-center justify-center">
          <Image src="/assets/heroImage.svg" width={700} height={500} alt="hero" />
        </div>
      </div>
      <div className='flex flex-col w-full border-y'>
        <div className="flex flex-col lg:flex-row w-full py-8 items-center">
          <div className="flex flex-col w-60 items-center">  {/* Set a fixed width here */}
            <p className="text-6xl font-iceland text-asr-green lg:-rotate-90 block">Proyectos</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-3 lg:overflow-x-scroll my-6 lg:mr-28 gap-y-4">
            <ProjectCard title="Trippio" description="Diseñamos y desarollamos nuestra plataforma Trippio, una plataforma web que genera Itinerarios de Viaje con Inteligencia Artificial" image="/assets/projects/trippio.png" url="https://trippio.ai" />
            <ProjectCard title="USE - W&T" description="Diseño y desarrollo de una plataforma web para empleadores estadounidenses que genere Training Plans con Inteligencia Artificial." image="/assets/projects/use.png" />
            <ProjectCard title="SimpliCAR" description='Rediseño de landing page enfocado en los lineamientos de “Design for trust” de AirBNB. Identificación de componentes necesarios y desarrollo de landing.' image="/assets/projects/simplicar.png" url="https://simplicar.pe/" />
            <ProjectCard title="Unity 2D Demo" description='Desarrollo de demo de videojuego 2D en Unity.' image="/assets/projects/tzegarra.png" url="https://drive.google.com/file/d/14Mrvjfj_uJeKfK_VfAZzU2AsqAxMq6CL/view?usp=drive_link" />
            <ProjectCard title="Unity 3D Demo" description='Desarrollo de demo de videojuego 3D en Unity.' image="/assets/projects/toylo.png" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full py-8 items-center">
          <div className="flex flex-col w-60 items-center">  {/* Set a fixed width here */}
            <p className="text-6xl font-iceland lg:w-60 text-asr-purple lg:-rotate-90 block">Skills</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-3 mt-6 lg:mr-28 gap-y-4">
            <SkillCard title="Lenguajes" description={["Typescript / Javascript", "HTML / CSS", "C++ - Intermedio", "C# - Intermedio", "Python - Intermedio", "Java - Básico"]} image="/assets/skills/web.svg" />
            <SkillCard title="Diseño" description={["UI/UX - Figma", "Animación 3D - Blender"]} image="/assets/skills/design.svg" />
            <SkillCard title="Desarrollo" description={["Frontend - Angular & NextJS", "Backend - NodeJS Express", "Videojuegos - Unity3D"]} image="/assets/skills/development.svg" />
            <SkillCard title="Mantenimiento" description={["Web", "Videojuegos", "Aplicaciones"]} image="/assets/skills/maintenance.svg" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full py-8 items-center">
          <div className="flex flex-col w-60 items-center">  {/* Set a fixed width here */}
            <p className="text-6xl font-iceland text-asr-blue lg:-rotate-90 block">Experiencia</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-3 lg:overflow-x-scroll my-6 lg:mr-28 gap-y-4">
            <ExperienceCard title="Trippio"
              jobTitle='CEO & Co-Founder'
              description="Co-fundador y CEO de Trippio, liderando la conceptualización y puesta en marcha de la plataforma. Colaboré activamente en el desarrollo full-stack utilizando Next.js en el frontend y Express con Node.js en el backend, todo implementado con TypeScript."
              image="/assets/experience/trippio.png" 
              date="Agosto 2023 – Presente"/>
            <ExperienceCard title="TalentHub"
              jobTitle='FrontEnd Developer'
              description="Coordinación y desarrollo de soluciones front-end innovadoras para la plataforma de reclutamiento TalentHub, utilizando Angular como Framework."
              image="/assets/experience/talentHub.png" 
              date="Agosto 2023 – Presente"/>
            <ExperienceCard title="Visma Latam"
              jobTitle='QA Automation Engineer'
              description="Planificación, desarrollo y ejecución de pruebas automatizadas E2E con Selenium y scripts en Java. Y, automatización de pruebas de API, con Postman, integradas a Jenkins para la integración continua. Líder de un equipo de 3 personas."
              image="/assets/experience/visma.png" 
              date="Agosto 2022 – Agosto 2023"/>
            <ExperienceCard title="BCP"
              jobTitle='Trainee - CIX'
              description="Análisis de datos. Recolección de insights por parte de los usuarios Warda - plataforma del Centro de Innovación (CIX). Participación en el proceso de ideación de estrategias y posibles oportunidades de crecimiento apoyadas en medios digitales." 
              image="/assets/experience/bcp.png" 
              date="Agosto 2021 – Diciembre 2021"/>
              <ExperienceCard title="AYO"
              jobTitle='Trainee'
              description="Apoyo en la gestión del desarrollo de producto, realizando un seguimiento constante al equipo de programación y diseño, para asegurar el óptimo funcionamiento de la plataforma web y una buena experiencia de usuario." 
              image="/assets/experience/ayo.jpeg" 
              date="Octubre 2018 – Mayo 2020"/>
          </div>
        </div>

      </div>
      <div className='flex flex-col items-center text-center w-full py-8'>
        <p className='text-6xl font-iceland'>Contacto</p>
      </div>
    </main>
  )
}
