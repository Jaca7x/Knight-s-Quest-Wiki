import { useState } from "react";
import { Link } from "react-router-dom";

type LinkType = {
    name: string;
    path: string;
};

type Props = {
    links: LinkType[];
};


export default function HamburgerMenu({ links }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="relative z-[70] p-2 flex flex-col gap-1.5 items-end group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`h-0.5 bg-[#c9a227] transition-all duration-300 shadow-[0_0_8px_#c9a227] ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
                <span className={`h-0.5 bg-[#c9a227] transition-all duration-300 shadow-[0_0_8px_#c9a227] ${isOpen ? 'opacity-0' : 'w-5'}`}></span>
                <span className={`h-0.5 bg-[#c9a227] transition-all duration-300 shadow-[0_0_8px_#c9a227] ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-7'}`}></span>
            </button>

            <div className={`
                fixed inset-0 w-full h-screen bg-[#0f0c1a]/fb backdrop-blur-xl z-[60]
                flex flex-col items-center justify-center transition-all duration-500
                ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
            `}>

                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                    <h2 className="text-[20vw] font-black uppercase italic text-white">Quest</h2>
                </div>

                <ul className="relative z-10 flex flex-col items-center gap-8">
                    {links.map((link, index) => (
                        <li
                            key={link.path}
                            className={`transform transition-all duration-500 delay-[${index * 100}ms] 
                            ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            <Link
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-bold tracking-[0.3em] text-gray-300 hover:text-[#c9a227] transition-all duration-300 uppercase italic group"
                            >
                                <span className="relative">
                                    {link.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#c9a227] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#c9a227]"></span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="absolute bottom-10 w-20 h-[1px] bg-[#c9a227]/30"></div>
            </div>
        </>
    );
}