import Image from "next/image";

export default function ProjectCard(props: { title: string, description: string, image: string, url?: string, color: string, left: boolean }) {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="block w-full px-4 lg:px-32">
            <div className={`flex flex-row items-start justify-start w-full gap-x-24 bg-asr-${props.color}/10 border border-asr-${props.color} rounded-md p-4`}>
                {props.left && <div className="hidden w-full lg:flex">
                    <Image src={props.image} width={600} height={200} alt="project" className="object-contain rounded-md" />
                </div>
                }
                <div className="flex flex-col items-start justify-start gap-y-6 w-full h-full">
                    <Image src={props.image} width={600} height={200} alt="project" className="lg:hidden object-contain rounded-md" />

                    <p className="text-4xl font-iceland text-white w-full text-center">{props.title}</p>
                    <p className="text-2xl font-iceland text-white/50 w-full  h-full">{props.description}</p>
                </div>
                {!props.left && <div className="hidden w-full lg:flex">
                    <Image src={props.image} width={600} height={200} alt="project" className="object-contain rounded-md" />
                </div>
                }
            </div>
        </a>
    );
}