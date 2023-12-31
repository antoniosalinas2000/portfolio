import Image from "next/image";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";

export default function ProjectCard(props: { title: string, description: string, image: string, url?: string }) {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="block">
            <div className={(props.url ? 'cursor-pointer ' : ' ') + `h-full flex flex-col items-center justify-center gap-y-3 border bg-asr-green/10 border-asr-green rounded-lg w-[400px] flex-shrink-0`}>
                <div className="flex flex-row items-center justify-center w-full">
                    <Image src={props.image} width={400} height={200} alt="project" className="object-contain rounded-t-lg" />
                </div>
                <div className="flex flex-col items-center justify-center gap-y-8 px-6">
                    <div className="flex flex-row items-center gap-x-2">
                        <h1 className="text-5xl font-iceland w-full text-center">{props.title}</h1>
                        {props.url && <div className=" bg-asr-purple/50 rounded-full p-1">
                            <CursorArrowRaysIcon className="w-8 h-8 text-white" />
                        </div>}
                    </div>
                    <p className="text-xl font-iceland text-white/50 w-full text-start">{props.description}</p>
                </div>
            </div>
        </a>
    );
}