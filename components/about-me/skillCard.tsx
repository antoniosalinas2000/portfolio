import Image from "next/image"

export default function SkillCard(props: { image: string, title: string, level: number, color: string }) {
    // Convert level to a percentage
    const levelPercentage = `${props.level}%`;

    return (
        <div className="flex flex-col items-center bg-white/20 border border-white rounded-md p-4 gap-y-4 w-46 lg:w-60 h-56 lg:h-72">
            <p className="text-4xl font-iceland text-white text-center">{props.title}</p>
            {/* Image container with fixed height */}
            <div className="h-10 lg:h-36 w-full flex items-center justify-center mt-auto">
                <Image src={props.image} width={150} height={150} alt="project" className="hidden lg:flex object-contain" />
                <Image src={props.image} width={100} height={100} alt="project" className="lg:hidden object-contain" />
            </div>
            {/* Progress bar filled up to level */}
            <div className="w-full h-2 mt-auto bg-white/50 rounded-md">
                <div style={{ width: levelPercentage }} className={`${props.color} h-full rounded-md`}></div>
            </div>
        </div>
    );
}
