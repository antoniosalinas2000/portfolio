import { Bars3Icon } from '@heroicons/react/24/outline';
import DropdownMenu from './dropDownMenu';  // Adjust the path as necessary
import { useState } from 'react';

export default function Header(props: {currentPage:string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-row w-full items-center justify-between px-4 lg:px-16 py-3 lg:py-6">
            <h1 className="text-2xl lg:text-4xl font-iceland">Antonio Salinas</h1>
            <div className="flex flex-row items-center justify-center gap-x-4 relative">
                <h1 className="text-2xl font-iceland">{props.currentPage}</h1>
                <div className="relative">
                    <Bars3Icon onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-6 w-6 mr-2 cursor-pointer" />
                    <DropdownMenu currentPage={props.currentPage} isOpen={isMenuOpen} />
                </div>
            </div>
        </div>
    );
};
