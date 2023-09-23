import Link from "next/link";

function DropdownMenu(props: { isOpen: boolean, currentPage : string }) {
    if (!props.isOpen) return null;

    return (
        <div className="absolute right-0 w-48 font-iceland text-2xl bg-asr-purple/50 shadow-lg rounded-lg">
            {props.currentPage != "Inicio" && <Link href="/.." className="block px-4 py-2 hover:bg-asr-purple/20 rounded-t-lg">Inicio</Link>}
            {props.currentPage != "Proyectos" && <Link href="/projects" className="block px-4 py-2 hover:bg-asr-purple/20">Proyectos</Link>}
            {/*props.currentPage != "Diseño" && <Link href="/design" className="block px-4 py-2 hover:bg-asr-purple/20 rounded-b-lg">Diseño</Link>*/}
        </div>
    );
}

export default DropdownMenu;