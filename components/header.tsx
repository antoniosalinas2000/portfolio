
import {Bars3Icon } from '@heroicons/react/24/outline';

export default function Header() {
    return (
        <div className="flex flex-row  w-full items-center justify-between px-16 py-6">
            <h1 className="text-4xl font-iceland">Antonio Salinas</h1>
            <div className="flex flex-row items-center justify-center gap-x-4">
                <h1 className="text-2xl font-iceland">Inicio</h1>
                <Bars3Icon className="h-6 w-6 mr-2" />
            </div>
        </div>
    );
};