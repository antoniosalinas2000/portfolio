import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bottom-0 flex flex-col items-center justify-center w-full bg-black text-white border-t border-white">
            <div className='flex flex-col items-center text-center w-full py-4 gap-y-6'>
                <p className='text-6xl font-iceland'>Contacto</p>
                <div className='flex flex-row gap-x-6'>
                    <a href="mailto:antonio@trippio.ai" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/socials/gmail.svg" width={50} height={50} alt="gmail" />
                    </a>
                    <a href="https://www.linkedin.com/in/antonio-salinas2000/" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/socials/linked.svg" width={50} height={50} alt="linkedin" />
                    </a>
                    <a href="https://github.com/antoniosalinas2000" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/socials/github.svg" width={50} height={50} alt="github" />
                    </a>
                    <a href="https://www.instagram.com/salinasrocaa" target="_blank" rel="noopener noreferrer">
                        <Image src="/assets/socials/instagram.svg" width={50} height={50} alt="instagram" />
                    </a>
                </div>
            </div>
        </footer>
    )
}