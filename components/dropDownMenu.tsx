function DropdownMenu(props: { isOpen: boolean, currentPage : string }) {
    if (!props.isOpen) return null;

    return (
        <div className="absolute right-0 w-48 font-iceland text-2xl bg-asr-purple/50 shadow-lg rounded-lg">
            {props.currentPage != "Inicio" && <a href="/.." className="block px-4 py-2 hover:bg-asr-purple/20 rounded-t-lg">Inicio</a>}
            {props.currentPage != "Proyectos" && <a href="/projects" className="block px-4 py-2 hover:bg-asr-purple/20">Proyectos</a>}
            {props.currentPage != "Diseño" && <a href="/design" className="block px-4 py-2 hover:bg-asr-purple/20 rounded-b-lg">Diseño</a>}
        </div>
    );
}

export default DropdownMenu;