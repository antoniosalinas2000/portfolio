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
          <h1 className="text-xl lg:text-4xl font-iceland font-semibold">Proyectos de <span className="text-asr-purple hover:text-asr-orange cursor-pointer" onClick={() => setProjects("Computación")} >Computación </span>/ <span onClick={() => setProjects("Diseño")} className="text-asr-green cursor-pointer hover:text-asr-orange" >Animación</span></h1>
          <CursorArrowRaysIcon className="w-8 h-8 stroke-asr-green cursor-pointer hover:stroke-asr-orange" onClick={changeProject} />
        </div>

        {
          projects === "Computación" &&
          <div className='flex flex-col items-center gap-y-4'>
            <ProjectCard left={true} title="Trippio" description="Trippio es una plataforma web que genera itinerarios de viaje personalizados mediante el uso de Inteligencia Artificial. Concebida para simplificar y optimizar la experiencia de planificación de viajes, la plataforma considera variables como el origen, destino, intereses del usuario, actividades por día, fechas del viaje y tipo de viaje (familia, amigos, pareja, solo) para crear planes de viaje adaptados y detallados. " image="/assets/projects/trippio.png" url="https://trippio.ai" color="purple" />
            <ProjectCard left={false} title="USE - W&T" description="Diseño y desarrollo de plataforma web para empleadores estadounidenses, con el objetivo de generar Training Plans personalizados mediante el uso de Inteligencia Artificial. La plataforma toma en consideración diversos factores como el tipo de empleador, el campo de entrenamiento y palabras clave específicas para generar Training Plans altamente personalizados." image="/assets/projects/use.png" color="purple" />
            <ProjectCard left={true} title="SimpliCAR" description='Este proyecto consiste en el rediseño completo de una landing page, tomando como referencia los lineamientos de "Design for Trust" desarrollados por Airbnb. El objetivo fue crear una experiencia de usuario que inspire confianza, sea intuitiva y atractiva, para finalmente incrementar las tasas de conversión y engagement. El proyecto abarca desde la identificación de componentes esenciales hasta el diseño, desarrollo y despliegue de la landing page final.' image="/assets/projects/simplicar.png" url="https://simplicar.pe/" color="purple" />
            <ProjectCard left={false} title="Unity 2D Demo" description='"Swords of Tzegarra" es la realización de un demo de videojuego de rol en 2D con vista superior, creado en Unity. Diseñado como un proyecto educativo para aprender los fundamentos del desarrollo de videojuegos, este demo incorpora diversas funcionalidades que van desde barras de vida, mana y stamina, hasta un sistema de combate interactivo con enemigos controlados por IA.' image="/assets/projects/tzegarra.png" url="https://drive.google.com/file/d/14Mrvjfj_uJeKfK_VfAZzU2AsqAxMq6CL/view?usp=drive_link" color="purple" />
            <ProjectCard left={true} title="Unity 3D Demo" description='"ToyloGame" es una demo de videojuego en 3D ambientado en un entorno urbano interactivo. Desarrollado en Unity, el juego ofrece un mundo dinámico en el que el personaje principal puede moverse libremente, interactuando con un sistema de tráfico realista y NPCs que pasean por la ciudad. Esta demo proyecto educativo para aprender los fundamentos del desarrollo de videojuegos 3D.' image="/assets/projects/toylo.png" color="purple" />
          </div>
        }
        {
          projects === "Diseño" &&
          <div className='flex flex-col items-center gap-y-4'>
            <DesignCard
              image="/assets/projects/toylop.png"
              cols="grid-cols-2"
              width={500}
              title="Toylokazo"
              description="Conceptualización y realización de videos musicales con animaciones 3D para el Toylokazo - albúm musical de JAZE, artista peruano"
              videos={["https://www.youtube.com/embed/uMKgzVj7aUQ?si=tBeZjDRVJEloWbVZ", "https://www.youtube.com/embed/dX4BcD1K9fU?si=3kPIf00mSt-tzZl2", "https://www.youtube.com/embed/DKw1RkZsOOc?si=5gvSRgwihWhoahdT", "https://www.youtube.com/embed/7b_7uHMg9So?si=T62CPG0wC7KJs1kF"]}
              color="green" />
            <DesignCard
              image="/assets/projects/nigma.png"
              cols="grid-cols-1"
              width={1000}
              title="Nigma"
              description='Animación 3D para sustentación de tesis de Gonzalo Mohme, diseñador de vehículos terrestres y marinos. En este caso tuve que conceptualizar el video como un "Car-Advert" largo y que hiciera enfasís en el diseño del vehículo y sus diferentes funcionalidades.'
              videos={["https://www.youtube.com/embed/xr8YvaJnY_w?si=qR_-8x4YsMFllAe0"]}
              color="green" />
            <DesignCard
              image="/assets/projects/endlessEngines.png"
              cols="grid-cols-1"
              width={1000}
              title="Endless Engines"
              description="Animación 3D para concurso online de Pwnisher"
              videos={["https://www.youtube.com/embed/Vic4uEZUTyw?si=oNmk29RjBFJCA9PW"]}
              color="green" />
          </div>
        }
      </div>
      <Footer />

    </main>
  )
}
