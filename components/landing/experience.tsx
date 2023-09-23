import Image from "next/image";

export default function ExperienceCard(props: { title: string, jobTitle: string, description: string, date: string, image: string }) {
    return (
        <div className="flex flex-col items-center justify-start py-4 gap-y-3 border bg-asr-blue/10 border-asr-blue rounded-lg w-[400px] flex-shrink-0">
            <div className="flex flex-row items-center justify-center w-full h-[200px]">
                <Image src={props.image} width={200} height={200} alt="project" className="object-contain rounded-t-lg" />
            </div>
            <div className="flex flex-col items-start justify-center text-center px-6 w-full">
                <h1 className="text-5xl font-iceland w-full">{props.title}</h1>
                <p className="text-3xl font-iceland w-full">{props.jobTitle}</p>
                <p className="text-xl font-iceland text-white/50 w-full mt-4 text-start">{props.description}</p>
            </div>
            <div className="flex w-full mt-auto items-end">
                <p className="text-2xl font-iceland w-full text-center mt-4 ">{props.date}</p>
            </div>
        </div>
    );
};
