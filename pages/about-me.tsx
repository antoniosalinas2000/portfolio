import Image from 'next/image'
import Header from '../components/header'
import Footer from '@/components/footer'
import SkillCard from '@/components/about-me/skillCard'

export default function Design() {
  return (
    <main
      id='design'
      className="flex min-h-screen flex-col items-center justify-start bg-black text-white">
      <Header currentPage="Sobre mí" />
      {/*First view */}
      <div className='flex flex-col items-center justify-center w-full h-full py-6 px-4 lg:px-64'>
        <div className='flex flex-col items-center justify-center gap-y-2 bg-white/20 border-white border rounded-md px-8 py-4'>
          <p className="text-5xl font-iceland text-white text-center">Sobre mí</p>
          <Image
            src="/assets/avatar.png"
            width={250}
            height={250}
            alt="profile"
            className='object-cover'
          />
          <p className="text-2xl w-auto font-iceland text-asr-green text-start">Estudiante de Ciencias de la Computación (8vo ciclo) en la Universidad Peruana de Ciencias Aplicadas,
            con una fuerte pasión por la tecnología y el estudio del comportamiento humano. Experiencia en start-ups,
            centrado en programación, testing y desarrollo de plataformas web y videojuegos.
            Personalidad polifacética y empática, con un creciente interés en inteligencia artificial.</p>
        </div>
        <p className="text-5xl font-iceland text-asr-purple text-center mt-8">Skills</p>
        <div className='flex flex-col lg:grid lg:grid-cols-4 items-center justify-center gap-x-4 gap-y-4 mt-8'>
          <SkillCard image="/assets/skills/html.svg" title="HTML" level={80} color="bg-asr-orange"/>
          <SkillCard image="/assets/skills/css.svg" title="CSS" level={80} color="bg-asr-blue"/>
          <SkillCard image="/assets/skills/javascript.svg" title="Javascript" level={80} color="bg-asr-yellow"/>
          <SkillCard image="/assets/skills/typescript.svg" title="Typescript" level={80} color="bg-asr-blue"/>
          <SkillCard image="/assets/skills/nextjs.svg" title="NextJS" level={80} color="bg-asr-green"/>
          <SkillCard image="/assets/skills/angular.svg" title="Angular" level={60} color="bg-asr-red"/>
          <SkillCard image="/assets/skills/c--.svg" title="C#" level={70} color="bg-asr-purple"/>
          <SkillCard image="/assets/skills/c.svg" title="C++" level={50} color="bg-asr-blue"/>
          <SkillCard image="/assets/skills/react.svg" title="React" level={90} color="bg-asr-blue"/>
          <SkillCard image="/assets/skills/postman.svg" title="Postman" level={90} color="bg-asr-orange"/>
          <SkillCard image="/assets/skills/python.svg" title="Python" level={75} color="bg-asr-yellow"/>
          <SkillCard image="/assets/skills/java.svg" title="Java" level={50} color="bg-asr-blue"/>
          <SkillCard image="/assets/skills/selenium.svg" title="Selenium" level={90} color="bg-asr-green"/>
          <SkillCard image="/assets/skills/unity.svg" title="Unity" level={70} color="bg-asr-purple"/>
          <SkillCard image="/assets/skills/figma.svg" title="Figma" level={80} color="bg-asr-blue"/>
          <SkillCard image="/assets/skills/blender.svg" title="Blender" level={80} color="bg-asr-orange"/>
        </div>
      </div>
      <Footer />
    </main>
  )
}
