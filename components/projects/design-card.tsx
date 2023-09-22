import Image from "next/image";

export default function DesignCard(props: { image:string, title: string, description: string, videos: string[], color: string, width: number, cols: number }) {
    return (
            <div className={`flex flex-col items-center justify-start gap-x-4 bg-asr-${props.color}/10 border border-asr-${props.color} rounded-md p-4`}>

                {/* Description */}
                <div className="flex flex-col items-center justify-center gap-y-6 h-full w-[350px] lg:w-[720px]">
                    <p className="text-4xl font-iceland text-white text-center">{props.title}</p>
                    <Image src={props.image} width={500} height={200} alt="project" className="object-contain rounded-md" />
                    <p className="text-2xl font-iceland text-white/50 text-center">{props.description}</p>
                </div>

                {/* Videos */}
                <div className="flex flex-col items-center justify-center w-full h-full mt-6">
                    <div className={`grid grid-cols-${props.cols } gap-4 w-fit h-full`}>

                        {props.videos.map((video, index) => (
                            <div key={index} className="video-container flex justify-center items-center">
                                <iframe width={props.width} height={props.width / 2}
                                    src={video}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="hidden lg:flex"
                                ></iframe>
                                <iframe width={props.width/3} height={props.width / 5}
                                    src={video}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="lg:hidden"
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
}
