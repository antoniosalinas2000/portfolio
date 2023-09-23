import Image from 'next/image'
import Header from '../components/header'
import ProjectCard from '../components/projects/project-card'
import { useState } from 'react';
import DesignCard from '@/components/projects/design-card';
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import Footer from '@/components/footer';

export default function Projects() {
  let [projects, setProjects] = useState<string>('Computación');

  function changeProject() {
    if (projects === "Computación") {
      setProjects("Diseño");
    } else {
      setProjects("Computación");
    }
  }

  return (
    <main
      id='projects'
      className="flex min-h-screen flex-col items-center justify-start bg-black text-white">
      <Header currentPage="Proyectos" />
      {/*First view */}
      <div className="flex flex-col items-center justify-center w-full h-full gap-y-6 py-6">
        <div className="flex flex-row items-center">
          <h1 className="text-2xl lg:text-4xl font-iceland font-semibold">Proyectos de <span className="text-asr-purple hover:text-asr-orange cursor-pointer" onClick={() => setProjects("Computación")} >Computación </span>/ <span onClick={() => setProjects("Diseño")} className="text-asr-green cursor-pointer hover:text-asr-orange" >Animación</span></h1>
          <CursorArrowRaysIcon className="w-8 h-8 stroke-asr-green cursor-pointer hover:stroke-asr-orange" onClick={changeProject} />
        </div>

        {
          projects === "Computación" &&
          <div className='flex flex-col items-center gap-y-4'>
            <ProjectCard left={true} title="Trippio" description="Diseñamos y desarollamos nuestra plataforma Trippio, una plataforma web que genera Itinerarios de Viaje con Inteligencia Artificial" image="/assets/projects/trippio.png" url="https://trippio.ai" color="purple" />
            <ProjectCard left={false} title="USE - W&T" description="Diseño y desarrollo de una plataforma web para empleadores estadounidenses que genere Training Plans con Inteligencia Artificial." image="/assets/projects/use.png" color="purple" />
            <ProjectCard left={true} title="SimpliCAR" description='Rediseño de landing page enfocado en los lineamientos de “Design for trust” de AirBNB. Identificación de componentes necesarios y desarrollo de landing.' image="/assets/projects/simplicar.png" url="https://simplicar.pe/" color="purple" />
            <ProjectCard left={false} title="Unity 2D Demo" description='Desarrollo de demo de videojuego 2D en Unity.' image="/assets/projects/tzegarra.png" url="https://drive.google.com/file/d/14Mrvjfj_uJeKfK_VfAZzU2AsqAxMq6CL/view?usp=drive_link" color="purple" />
            <ProjectCard left={true} title="Unity 3D Demo" description='Desarrollo de demo de videojuego 3D en Unity.' image="/assets/projects/toylo.png" color="purple" />
          </div>
        }
        {
          projects === "Diseño" &&
          <div className='flex flex-col items-center gap-y-4'>
            <DesignCard
              image="/assets/projects/toylop.png"
              cols="grid-cols-2"
              width={400}
              title="Toylokazo"
              description="Conceptualización y realización de videos musicales con animaciones 3D para el Toylokazo - albúm musical de JAZE, artista peruano"
              videos={["https://www.youtube.com/embed/uMKgzVj7aUQ?si=tBeZjDRVJEloWbVZ", "https://www.youtube.com/embed/dX4BcD1K9fU?si=3kPIf00mSt-tzZl2", "https://www.youtube.com/embed/DKw1RkZsOOc?si=5gvSRgwihWhoahdT", "https://www.youtube.com/embed/7b_7uHMg9So?si=T62CPG0wC7KJs1kF"]}
              color="green" />
            <DesignCard
              image="/assets/projects/nigma.png"
              cols="grid-cols-1"
              width={800}
              title="Nigma"
              description="Animación 3D para sustentación de tesis de Nigma - Vehículo"
              videos={["https://www.youtube.com/embed/xr8YvaJnY_w?si=qR_-8x4YsMFllAe0"]}
              color="green" />
            <DesignCard
              image="/assets/projects/nigma.png"
              cols="grid-cols-1"
              width={800}
              title="Nigma"
              description="Animación 3D para sustentación de tesis de Nigma - Vehículo"
              videos={["https://www.youtube.com/embed/xr8YvaJnY_w?si=qR_-8x4YsMFllAe0"]}
              color="green" />
          </div>
        }
      </div>
      <Footer />

    </main>
  )
}
