import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppContext } from '../../../contexts/AppContext';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import IconLink from '../../UI/IconLink';

const Index = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const { state, dispatch } = useContext(AppContext);
    // const [activeMenu, setActive] = useState(1)
    const router = useRouter();

    const scrollTop = () => {
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
    };

    const isArticle = router.pathname.indexOf('article') >= 0;

    return (
        <nav
            className={`inset-0 h-[10vh] w-full  fixed z-20
                    ${
                        state?.isScrolled
                            ? 'bg-zinc-900 md:bg-opacity-40'
                            : 'bg-zinc-900 lg:bg-transparent'
                    } 
                `}
        >
            <div className="mx-auto h-full max-w-7xl sm:px-6 lg:px-8">
                <div className="flex-row-center-center relative h-full">
                    <div className="absolute inset-y-0 left-0 flex items-center px-2 sm:hidden">
                        {!menuVisible && (
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={() => {
                                    setMenuVisible(true);
                                }}
                            >
                                <MenuIcon className="h-6 w-6 fill-gray-200" />
                            </button>
                        )}
                        {menuVisible && (
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={() => {
                                    setMenuVisible(false);
                                }}
                            >
                                <XIcon className="h-6 w-6 fill-gray-200" />
                            </button>
                        )}
                    </div>

                    <div className=" flex h-full flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <Link href="/">
                            <div className="flex-shrink-0  cursor-pointer flex-col-center-center">
                                {/* <img
                                    src="/logo.png"
                                    alt="logo"
                                    className="h-11 object-contain rounded"
                                /> */}
                                <h3
                                    className={`text-3xl font-medium text-white  font-sans ${
                                        state?.isScrolled || isArticle
                                            ? 'lg:text-white'
                                            : 'lg:text-zinc-900'
                                    }`}
                                >
                                    SR
                                    <span className="text-indigo-600 font-bold text-3xl">
                                        .
                                    </span>
                                </h3>
                            </div>
                        </Link>
                    </div>

                    <div className="flex-row-center-center absolute inset-y-0 right-0 h-full pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex-row-center-center h-full space-x-4">
                                <IconLink
                                    text="About"
                                    isTragetBlank={false}
                                    style={`border-b-[2px] border-transparent px-3 py-2 text-sm font-medium  hover:border-indigo-600
                                     ${
                                         state?.isScrolled || isArticle
                                             ? 'text-white'
                                             : 'text-white lg:text-zinc-900'
                                     }`}
                                    href={`../#dv-about`}
                                />

                                <IconLink
                                    text="Services"
                                    isTragetBlank={false}
                                    style={`border-b-[2px] border-transparent px-3 py-2 text-sm font-medium  hover:border-indigo-600 ${
                                        state?.isScrolled || isArticle
                                            ? 'text-white'
                                            : 'text-white lg:text-zinc-900'
                                    } `}
                                    href={`../#dv-service`}
                                />

                                <IconLink
                                    text="Portfolios"
                                    isTragetBlank={false}
                                    style={`border-b-[2px] border-transparent px-3 py-2 text-sm font-medium  hover:border-indigo-600 ${
                                        state?.isScrolled || isArticle
                                            ? 'text-white'
                                            : 'text-white lg:text-zinc-900'
                                    } `}
                                    href={`../#dv-portfolio`}
                                />

                                <IconLink
                                    text="Articles"
                                    isTragetBlank={false}
                                    style={`border-b-[2px] border-transparent px-3 py-2 text-sm font-medium  hover:border-indigo-600 ${
                                        state?.isScrolled || isArticle
                                            ? 'text-white'
                                            : 'text-white lg:text-zinc-900'
                                    } `}
                                    href={`../#dv-article`}
                                />

                                <IconLink
                                    text="Contact"
                                    isTragetBlank={false}
                                    style={`border-b-[2px] border-transparent px-3 py-2 text-sm font-medium  hover:border-indigo-600 ${
                                        state?.isScrolled || isArticle
                                            ? 'text-white'
                                            : 'text-white lg:text-zinc-900'
                                    } `}
                                    href={`../#dv-contact`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state.  */}
                <div
                    className={`${menuVisible ? 'flex' : 'hidden'} bg-zinc-900 
                    absolute 
                    w-full z-30
                    transition-transform
                    duration-1000 
                    ease-in-out
                    `}
                    id="mobile-menu"
                >
                    <div className="w-full p-3">
                        <a
                            href="#dv-about"
                            onClick={() => {
                                setMenuVisible(false);
                                scrollTop();
                                return;
                            }}
                            className="
                            block 
                            px-3 
                            py-3
                            text-base 
                            text-white
                            border-b-[1px] border-zinc-700"
                            aria-current="page"
                        >
                            About
                        </a>

                        <a
                            href="#dv-service"
                            onClick={() => {
                                setMenuVisible(false);
                            }}
                            className="
                            block 
                            px-3 
                            py-3
                            text-base 
                            text-white
                            border-b-[1px] border-zinc-700"
                        >
                            Services
                        </a>

                        <a
                            href="#dv-portfolio"
                            onClick={() => {
                                setMenuVisible(false);
                            }}
                            className="
                            block 
                            px-3 
                            py-3
                            text-base 
                            text-white
                            border-b-[1px] border-zinc-700"
                        >
                            Portfolios
                        </a>
                        <a
                            href="#dv-article"
                            onClick={() => {
                                setMenuVisible(false);
                            }}
                            className="
                            block 
                            px-3 
                            py-3
                            text-base 
                            text-white
                            border-b-[1px] border-zinc-700"
                        >
                            Articles
                        </a>

                        <a
                            href="#dv-contact"
                            onClick={() => {
                                setMenuVisible(false);
                            }}
                            className="
                            block 
                            px-3 
                            py-3
                            text-base 
                            text-white
                            "
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Index;
