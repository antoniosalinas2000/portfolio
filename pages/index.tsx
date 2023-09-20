import Image from 'next/image'
import Header from '../components/header'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import ProjectCard from '@/components/project-card'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      {/*First view */}
      <div className="flex flex-row w-full py-8">
        {/*Titulos, descripción */}
        <div className="flex flex-col w-full px-16 gap-y-8">
          <h1 className="text-6xl font-lexend font-semibold w-[450px]">
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
        <div className="flex flex-col w-full px-16 items-center justify-center">
          <Image src="/assets/heroImage.svg" width={700} height={500} alt="hero" />
        </div>
      </div>
      <div className="flex flex-row w-full py-8 items-center">
        <div className="flex flex-col w-fit -rotate-90">
          <p className="text-6xl font-iceland text-asr-green">Proyectos</p>
        </div>
        <div className="flex flex-row w-full gap-x-3 overflow-x-scroll mt-6">
          <ProjectCard title="Trippio" description="Diseñamos y desarollamos nuestra plataforma Trippio, una plataforma web que genera Itinerarios de Viaje con Inteligencia Artificial" image="/assets/projects/trippio.png" />
          <ProjectCard title="USE - W&T" description='Rediseño de landing page enfocado en los lineamientos de “Design for trust” de AirBNB. Identificación de componentes necesarios y desarrollo de landing.' image="/assets/projects/use.png" />
          <ProjectCard title="SimpliCAR" description="Diseño y desarrollo de una plataforma web para empleadores estadounidenses que genere Training Plans con Inteligencia Artificial." image="/assets/projects/use.png" />
          <ProjectCard title="SimpliCAR" description="Diseño y desarrollo de una plataforma web para empleadores estadounidenses que genere Training Plans con Inteligencia Artificial." image="/assets/projects/use.png" />
          <ProjectCard title="SimpliCAR" description="Diseño y desarrollo de una plataforma web para empleadores estadounidenses que genere Training Plans con Inteligencia Artificial." image="/assets/projects/use.png" />
        </div>
      </div>

    </main>
  )
}
