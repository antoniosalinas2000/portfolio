import Image from 'next/image'

export default function SkillCard(props: { title: string, image: string, description: string[] }) {
    return (
        <div className='flex flex-col w-[300px] rounded-lg bg-asr-purple/10 border border-asr-purple gap-y-8'>
            <p className='text-4xl font-iceland text-center'>{props.title}</p>
            <Image src={props.image} width={300} height={300} alt="skill" className="object-contain rounded-t-lg" />
            <div className='text-xl font-iceland text-white/50 w-full text-center px-6 h-full flex flex-col justify-end'>
                {props.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>
        </div>
    );
};